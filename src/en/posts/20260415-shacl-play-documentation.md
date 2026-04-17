---
layout: post.njk
title: "SHACL Play documentation generation : document your knowledge graph !"
author: Thomas Francart
date: 2026-04-14
description: "SHACL Play documentation generation utility now uses ReSpec to produce human-readable documentation based on SHACL profiles"
tags: SHACL, RDF, SHACL Play, documentation
permalink: "{{ lang }}/posts/{{ title | slugify }}/"
linkedin: 
bluesky:
mastodon:
---

<p class="lead">We are taking knowledge graph documentation to a new level.</p>

Maybe you need to publish a documentation of the structure of a graph or dataset, or you need to do a review of a knowledge graph structure in a human-friendly manner, or want to visually see the links between the entities in the graph, then what you need is to write a SHACL specification that describes your graph, and generate a human-readable documentation from it.

We have improved the [SHACL Play documentation generation tool](https://shacl-play.sparna.fr/play/doc) to use the [ReSpec utility](https://respec.org/docs/) as a basis for the generated document. The result is a much nicer and professional looking specification document. Also much more conformant in terms of accessibility. And we have also made enhancements in the layout and behavior that make the document much nicer to read:

  1. The table of content is **split into "Main entities" and "Supportive entities"**. The "supportive" ones are, by default, the shapes without a target - but this can be overriden by an annotation: [![](/assets/posts-images/shacl-play-0.png)](/assets/posts-images/shacl-play-0.png)
  2. The **properties table** now displays the definitions and examples of each property in a row below, which makes the table more readable and accomodates for longer descriptions: [![](/assets/posts-images/shacl-play-1.png)](/assets/posts-images/shacl-play-1.png)
  3. **Description, targets and URI patterns** of each shapes and cleanly separated in different blocks: [![](/assets/posts-images/shacl-play-2.png)](/assets/posts-images/shacl-play-2.png)
  4. Individual **automatically-generated diagrams** for each shape are always available, even when larger than the page : [![](/assets/posts-images/shacl-play-3.png)](/assets/posts-images/shacl-play-3.png)
  5. We are currently working on adding a **"usage" section** for each entity, showing from which property (or entity) in the model the entity is being referenced : [![](/assets/posts-images/shacl-play-4.png)](/assets/posts-images/shacl-play-4.png)
  6. The **document metadata** header is much nicer thanks to ReSpec (but we need to sort out some details on how ReSpec manages some mandatory metadata fields) : [![](/assets/posts-images/shacl-play-5.png)](/assets/posts-images/shacl-play-5.png)


Want to try it out ? why don't you compare the [existing European Parliament ELI-EP Application Profile documentation](https://europarl.github.io/eli-ep/) with its [rendering in the new version using ReSpec](https://shacl-play.sparna.fr/play/doc?format=html_respec&url=https%3A%2F%2Feuroparl.github.io%2Feli-ep%2F3.0.0%2Feli-ep.shacl.ttl&includeDiagram=false&sectionDiagram=true#eli:Work) ? You can also try i twith other SHACL shapes we designed for our clients, such as the [other models from the European Parliament](https://data.europarl.europa.eu/en/developer-corner) or the [models of the SAPA foundation](https://shapes.performing-arts.ch/).

The old layout remains accessible (select _"HTML (old version)"_ in the format option).

SHACL experts that need to demonstrate what they are doing to their clients will certainly love it. We would love to hear from the use-cases and need of the community in relation to human-readable SHACL documentation. We are still working out the details so feel free to share your experience here ! The tool remains completely free and open.

