---
layout: reference.njk
title: UNESCO IIEP
subtitle: "PLAN4LEARNING : MULTILINGUAL DOCUMENTARY PORTAL ON EDUCATION PLANNING"
date: 2016-01-01
abstract: Using business repositories (thesaurus, glossary, authority lists) to propose an intelligent search system.
image: /assets/uploads/2014/09/logo-iiep-170-140-160x130.png
tags: reference
permalink: en/references/{{ title | slugify }}/
---

## UNESCO IIEP

### Plan4Learning: multilingual documentary portal on educational planning

The [International Institute for Educational Planning](http://www.iiep.unesco.org/) is a UNESCO training and research center, founded in Paris in 1963, whose mission is to train and assist managers and planners of educational systems. Recognized for the quality of its documentary resource center, IIEP wanted to enhance it through a documentary search portal, providing easy access to resource records, highlighting the institute's monitoring work and current debates on the subject, and creating a unifying tool for the community of education specialists. This is what we have achieved with the [Plan4learning] portal (http://plan4learning.iiep.unesco.org/).

This project was carried out in collaboration with [IRI](http://www.iri.centrepompidou.fr/) (Institut de Recherche et d'Innovation du Centre Pompidou), which produced a tool for entering documentary records based on an RDF triplestore, and [Mondeca](http://www.mondeca.com/), which contributed its [ITM pour la gestion des référentiels](http://www.mondeca.com/Products/Intelligent-Topic-Manager) solution, and a chain for indexing RDF data in SolR.

http://www.sparna.fr//wp-content/uploads/2014/09/plan4learning-screenshot-1.png

Based on the [SolR](http://lucene.apache.org/solr) search engine, the final portal features a number of distinctive aspects:

- a multi-faceted (cartographic, temporal, thematic, event-based) and multilingual search mode ;
- the use and development during the project of authority repositories to facilitate searches (UNESCO thesaurus, thematic thesaurus, list of institutional authorities, terminological glossary);
- use of web data technologies (RDF, SKOS, SPARQL) throughout the architecture, from the record entry back-office to the repository management tool (Mondeca's ITM (http://www.mondeca.com/Products/Intelligent-Topic-Manager)), including the SolR indexing chain;

The next stage of this project, taken over by the [LeHub agency](http://www.lehub-agence.com/), consists of integrating the search engine into an ergonomic portal incorporating collaborative functionalities.