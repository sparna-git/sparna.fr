---
layout: reference.njk
title: CNRS - Huma-Num Nakala
subtitle: NAKALA - DATA SILO FOR HUMAN AND SOCIAL SCIENCES
date: 2015-01-01
abstract: Nakala is a data storage, description and dissemination service for researchers in the humanities and social sciences, based on web of data technologies (RDF base, SPARQL service).
image: /assets/uploads/2014/09/logohumanum-web-grand-rvb-170-140-160x130.png
tags: reference
permalink: en/references/{{ title | slugify }}/
---

## CNRS - Huma-Num Nakala

### Nakala - Data silo for the humanities and social sciences

The mission of the CNRS Très grande Infrasctructure de Recherche [Huma-Num](http://www.huma-num.fr/) is to offer digital services to researchers in the humanities and social sciences. As part of this mission, it wishes to provide researchers with a data hosting and distribution platform: [Nakala](https://www.nakala.fr/).

Nakala enables data to be stored and archived perennially, described (using [dcterms](http://www.sparna.fr/reference/huma-num-nakala/dublincore.org/documents/dcmi-terms/) metadata), and redistributed in the form of [OAI](http://www.openarchives.org/OAI/openarchivesprotocol.html) streams, dereferenceable URIs, and [SPARQL service](http://www.nakala.fr/sparql). Nakala demonstrates the flexibility of Web of Data technologies compared with other dissemination technologies such as OAI. More information on the solution implemented is available on the [Nakala service description page](http://www.huma-num.fr/service/nakala).

http://www.sparna.fr//wp-content/uploads/2014/09/nakala-services-proposes.jpg

In terms of technology, the proposed solution stands out for its use of a [Virtuoso triplestore](http://virtuoso.openlinksw.com/) as the central point of the architecture (no relational database), and for the implementation of open-source components: [PROAI](http://proai.sourceforge.net/) for the OAI part, [PUBBY](http://wifo5-03.informatik.uni-mannheim.de/pubby/) for metadata access, and integration with the [Renater identity federation](https://services.renater.fr/federation/index) authentication system.

