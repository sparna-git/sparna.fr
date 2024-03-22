---
layout: reference.njk
title: Publications Office of the European Union
subtitle: CELLAR, ELI, EUROVOC
date: 2019-01-01
abstract: A centralized metadata repository that manages, in a FRBR model, the multilingual and multi-format metadata of EU publications.
image: /assets/uploads/2015/01/EU-Publications-Office-logo.svg--160x130.png
tags: reference
permalink: en/references/{{ title | slugify }}/
---

## Publications Office of the European Union

The [Publications Office](http://publications.europa.eu/) is an inter-institutional body based in Luxembourg, responsible for publishing the publications of the institutions of the European Communities and the European Union, in particular the [Official Journal of the European Union](http://eur-lex.europa.eu/oj/direct-access.html) in 23 or 24 languages. Its mission as a legal publisher for European citizens led it to set up the [Cellar](http://www.w3.org/International/multilingualweb/luxembourg/slides/41-schmitz.pdf) project several years ago, which aims to make the metadata and content published by the Office accessible in a central location.

Cellar is largely based on semantic technologies; in fact, it stores, in a [FRBR](http://fr.wikipedia.org/wiki/Sp%C3%A9cifications_fonctionnelles_des_notices_bibliographiques) model, the multilingual and multi-format metadata (those found on the [Eur-Lex](http://eur-lex.europa.eu/) portal) of all the Office's publications, i.e. some 1.5 billion triplets. This database is at the heart of the Office's editorial system, integrating metadata from several source applications, and disseminating them to several portals or target tools.

http://www.sparna.fr//wp-content/uploads/2015/01/cellar-architecture.png


Our involvement - limited in relation to the scope of the Cellar project - was divided into several distinct sub-projects.

### Development of an RDF data editing tool

The data stored in the Cellar comes from third-party applications and, once ingested, cannot be directly modified without returning to the third-party application at the source of the data. However, corrections directly in the Cellar are sometimes necessary, for reasons of ease, speed or flexibility. The Publications Office therefore needed an interface enabling metadata to be searched, viewed and modified directly in the Cellar RDF.

The tool we developed, called RDFEdit, is entirely dynamic and based on an OWL ontology to generate the display and editing interfaces. To this end, it integrates the [RDForms] component (http://rdforms.org/). RDFEdit is [published on Joinup](https://joinup.ec.europa.eu/software/rdfedit/description) where you'll find more details on its design.
