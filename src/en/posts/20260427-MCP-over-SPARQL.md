---
layout: post.njk
title: "MCP protocol over SPARQL endpoints"
author: Thomas Francart
date: 2026-04-25
description: "Setting up a GraphRAG architecture does not only require access to your SPARQL endpoint. It also requires the ability for the agent to understand the graph structure, and lookup entity URIs."
tags: SPARQL, SHACL, AI, MCP, graphRAG
permalink: "{{ lang }}/posts/{{ title | slugify }}/"
linkedin: https://www.linkedin.com/posts/thomasfrancart_mcp-servers-over-sparql-endpoints-graphrag-share-7453438921474056193-X7s5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAiD3YwBJvGpu4Ak2jXNNvmSX7ws2MZ_uLE
bluesky:
mastodon: https://mstdn.social/@sparna/116533117381952849
---

<p class="lead">GraphRAG architecture requires 3 things : an access to a SPARQL service, an understanding of what the graph looks like, and the ability to lookup entities from their names.</p>

Together with the team at [Lab of Huma-Num IR*](https://www.huma-num.fr/hnlab/) we are prototyping an MCP connector over a knowledge graph accessible through a SPARQL endpoint. [MCP (Model Context Protocol)](https://modelcontextprotocol.io/) enables to plug connectors to AI agents through a (not-quite-entirely-stable-yet) standard protocol. Using MCP a server can expose 3 things :
  1. **tools** : functions that the AI agent can choose to call (the agent decides)
  2. **resources** : files or data that the user can choose to expose to the AI agent, typically personal data (like your calendar) or local files (from your computer)
  3. **prompts** : predefined prompts that the user can explicitly invoke with predefined inputs. Prompts will guide the AI agent in doing a task in a certain way.

What does it mean if you have a semantic knowledge graph and you want to expose it through MCP ? It means you need 3 MCP tools :
  1. A first tool that **exposes the SPARQL endpoint** (input : SPARQL query, output : SPARQL result format, JSON or XML variant)
  2. A second tool that **exposes the SHACL specification of the knowledge structure** (input : nothing, output : a JSON representation of the [SHACL](https://www.w3.org/TR/shacl/) spec of the knowledge graph). This is critical. It enables the agent to understand the structure of the graph without the need to discover it itself. Besides, through this SHACL spec, you can choose to expose to the agent a subset of the full classes and predicates that the graph contains. In addition, you can complement it with hints and explanations on how to write certain queries, in particular using the [upcoming `sh:agentInstruction` annotation from SHACL 1.2](https://www.w3.org/TR/shacl12-core/#agentInstruction). A typical information that the agent needs is which property to use as the human-readable label of each entity.
  3. A third tool that allows the agent to **resolve named entities from their names** (input : label to search + type of entity). This is necessary to decouple named entity reconciliation contained in user input, from graph traversal (e.g. _"Give me all articles written by Thomas Francart"_). Named entity reconciliation can be implemented in standard SPARQL - but this is suboptimal, as SPARQL is lacking full-text search; or using proprietary full-text SPARQL extensions in your triplestore of choice; or through a dedicated search index built from knowledge graph content, which is the most efficient. And you can expose your reconciliation service also as an [OpenRefine-compatible API](https://www.w3.org/community/reports/reconciliation/CG-FINAL-specs-0.2-20230410/), so that it becomes also available if/when you or others work with OpenRefine.

The intended agent behavior is the following : it will first read the knowledge graph structure to understand it; then it will parse user query, detect named entities from the user query, reconcile them to find their URI (and potentially asking the help of the user for that using the [elicitation feature of MCP](https://modelcontextprotocol.io/docs/learn/client-concepts#elicitation) - but this is not widely supported yet), and finally write and execute the final SPARQL query, based on the graph structure and containing named entities URI. It would fetch human-readable labels (and other properties) as indicated in the graph structure to present a meaningful result to the user.

You can forget about MCP resources for this use-case (unless of course they are needed for something else than for SPARQL querying). You can optionally write an MCP prompt that explicitly instruct the AI agent to do this "fetch structure -> reconcile entities -> execute final SPARQL" sequence but that is not required, it will figure it out itself if you provide enough tool description in your MCP server.

Yes, all of that requires not just a knowledge graph, but a SHACL profile of it. Of course, how can you ask anyone (flesh- or silicon-made) to query something without first explaining the structure of it ? Luckily we have [automated RDF analysis algorithms](https://shacl-play.sparna.fr/play/generate#documentation) that enables you to produce a SHACL profile from your dataset to get you started. This is yet another use-case for the centrality of SHACL profiles in any knowledge graph based architecture, as explained in [last year ENDORSE conference](https://shacl-play.sparna.fr/play/generate#documentation) - the other main use-case is the provision of human-readable documentation.

Yes, all of that requires a reconciliation service from named entities to URI. This is the price to pay when working with semantic knowledge graphs where you want unambiguous identifiers, _"things not strings"_. If you think you don't need that, you probably don't need semantic knowledge graphs.

Those 3 steps (SHACL specs parsing, entity reconciliation, final query writing including human-readable labels) we already had when designing the [Sparnatural UI](https://sparnatural.eu/), and we had already integrated them in our experiment with [Sparnatural-AI](https://sparna-git.github.io/sparnatural-ai/doc-page.html). One main difference is that in Sparnatural-AI we were exposing the SHACL structure inside the agent prompt, while here it is the agent that explicitly requests the SHACL structure. Another difference is that with Sparnatural queries the agent does not need to worry about human-readable labels : they are automatically inserted when generating the final SPARQL query.

Exposing everything we had through MCP was easy and we see immediate GraphRAG usage by the agent of the content of the graph by the agent, with correct queries : the agent does not need to iterate on multiple queries to build a proper SPARQL query.