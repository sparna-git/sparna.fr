---
layout: reference.njk
title: Réseau Canopé and ScoLOMFR in SKOS
subtitle: SCOLOMFR PUBLICATION IN SKOS
date: 2022-01-01
abstract: Advice and development for the dissemination of a thesaurus in the web of data, taking into account the successive versions of the thesaurus.
image: /assets/uploads/2017/02/Logo_CANOPE_VERT_petit-160x67.png
tags: reference
permalink: en/references/{{ title | slugify }}/
---

## Réseau Canopé and ScoLOMFR in SKOS

### Publication of ScolomFr in SKOS

[Réseau Canopé](https://www.reseau-canope.fr/) (formerly CNDP / CRDP), a network for educational creation and support, is in charge of distributing [ScoLOMFR](https://www.reseau-canope.fr/scolomfr/accueil.html), a thesaurus describing digital resources for school education. This thesaurus is subdivided into 46 micro-thesauri, for a total of almost 15,000 concepts.

The ScoLOMFR consists of 2 parts: a resource description schema, which lists the possible fields for describing an educational resource, and the controlled vocabularies in which some of these fields take their value.

ScoLOMFR rigorously follows the official texts concerning school curricula, and is updated with each reform.

We have been working with Réseau Canopé since 2016 to distribute ScoLOMFR. The distribution of these vocabularies is today **at the cutting edge in terms of controlled vocabulary distribution in the web of data**. The main areas of intervention for this support were:

- A clear vocabulary versioning policy;
- Management of changes in vocabulary structure between versions: concepts deprecated, obsolete, merged, cut out, moved;
- A production chain for exporting data from the back-office tool to RDF broadcast data;
- A [vocabulary browsing/visualization portal](https://www.reseau-canope.fr/scolomfr/data/fr/), in which successive versions of the thesaurus can be browsed; this browsing portal is based on the [Skosmos] tool(http://skosmos.org/), with special development for displaying timelines on the page for each concept;
- An [ontology for representing specific aspects of ScoLOMFR](https://www.reseau-canope.fr/scolomfr/fileadmin/user_upload/ontologie/index-fr.html): relationships between certain vocabularies ("a knowledge domain is taught in an educational level", "a program point is part of a knowledge domain", etc.);
- A [data publication application profile](https://www.reseau-canope.fr/scolomfr/fileadmin/user_upload/ontologie/Scolomfr-regles_SHACL-v-6-0.zip), i.e. a data model based on SKOS, DublinCore, PROV, and the specific ScoLOMFR ontology. This application profile is formally described using [SHACL](https://www.w3.org/TR/shacl/);
- Automatic generation of a table of all the modifications that have occurred between 2 versions of a vocabulary (a thesaurus "diff");

We are continuing to support Réseau Canopé in 2021, to push the logic of modifying this thesaurus towards an ontology, by enriching the relationships between concepts.

(read more on the [blog post about the ScoLOMFR release](http://blog.sparna.fr/2018/09/25/thesaurus-versions-of-scolomfr-skos/)).


![screenshot scoLOMFR](/assets/uploads/2020/12/scolomfr-screenshot.png)