---
layout: reference.njk
title: Government of Luxembourg
subtitle: NEW GENERATION LEGISLATIVE PORTAL
date: 2021-01-01
abstract: A search portal based on a graph of links between laws and on controlled vocabularies set to music by Virtuoso and ElasticSearch. A fine example of implementation in the context of ELI (European Legislation Identifier).
image: /assets/uploads/2017/02/logo-gv-lux-carre-small-130x130.jpg
tags: reference
permalink: en/references/{{ title | slugify }}/
---

## Government of Luxembourg

### legilux.public.lu / Casemates

Luxembourg launched the new version of its legislative portal http://legilux.public.lu on January 1, 2017. In the combined movement of the [ELI](http://blog.sparna.fr/2015/05/31/eli-european-legislation-identifier-web-de-donnees-legislatif-europeen/) (European Legislation Idenfier) initiative, open data and the web of data, this is based on an open, searchable **legislative knowledge graph**: the "Casemates" database, accessible at http://data.legilux.public.lu/.

This knowledge graph is based on a modeling of legislative texts in FRBR-OO (the latest evolution in terms of bibliographic description), which precisely distinguishes a law in general, a particular version of the law (published in the Journal Officiel, consolidated on such and such a date, etc.), and a specific format (HTML, XML, PDF) from a particular version. The graph then captures all the relationships between legal texts: citation links, amendment links, repeal links, transposition links, bill links, etc. Controlled vocabularies also form part of the knowledge graph: list of Luxembourg communes, themes, text types, ministries, etc.

The richness of this graph enables **intelligent autocompletion and precise search facets** in the Legilux search engine: the user is guided by icons to select a ministry, a place, a theme, or even a legal text directly. ElasticSearch powers the Legilux search engine.

![screenshot legilux](/assets/uploads/2017/02/legilux-autocompletion.png)


The "raw" knowledge graph - in RDF - is open on the web: through ELI (and schema.org) metadata included in Legilux records, through dereferenceable URIs, through downloadable exports, through a direct query service in SPARQL. **Data openness is complete**.

I provided project management assistance upstream of the project: summary of requirements and objectives, functional architecture, drafting of both Casemates and Legilux specifications. I was also involved in monitoring the implementation, entrusted to [SWORD](http://www.sword-group.com/fr/), to ensure compliance with the specifications. The result is **a state-of-the-art law publication system** in line with web standards, and data dissemination constraints for citizens, legal publishers and search engines.