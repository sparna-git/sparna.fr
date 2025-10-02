---
layout: post.njk
title: "VocBench Sheet2RDF import guide"
author: Thomas Francart
date: 2025-10-01
description: "A practical guide to convert spreadsheets and CSV into RDF triples using VocBench Sheet2RDF mapping tool"
tags: VocBench, Sheet2RDF, guide, tutorial, mapping, semantization
permalink: "{{ lang }}/posts/{{ title | slugify }}/"
linkedin:
bluesky:
mastodon:
---

<p class="lead">Data migration is a recurrent task in knowledge graphs project. Data migration from tabular data is a very common situation.</p>

To tackle this data migration task we are happy to publish a **[practical guide on how to map spreadsheet data](https://docs.google.com/document/d/1zr91DjkFPGUbvxI89VQOGVIkOKujMlv2twHW7Y9WsQI/edit?usp=sharing)** using the [VocBench Sheet2RDF](https://vocbench.uniroma2.it/doc/user/sheet2rdf.jsf) mapping tool. The guide is shared directly as a Google document on which everyone can comment if you want.

Sheet2RDF is integrated in VocBench and can be used either to populate VocBench projects, but also simply to download the result of the mapping in an RDF file.

[![](/assets/posts-images/sheet2rdf.png)](/assets/posts-images/sheet2rdf.png)

On a daily basis, we still use our own mapping tool [xls2rdf](https://xls2rdf.sparna.fr/rest/doc.html), because it can directly ingest online spreadsheet URLs in an API. But we also help clients deploying and using VocBench and in this context using the integrated mapping tool is really beneficial.

The VocBench team is always very helpful in providing assistance in the [VocBench users mailing list](https://groups.google.com/g/vocbench-user). With this guide we are giving back to the community and hopefully this will help individuals and institutions to map more data to RDF knowledge graphs !