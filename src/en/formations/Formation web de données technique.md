---
title: "Web of data technical training : develop your knowledge graph based system"
date: 2023-01-01
permalink: "en/training/{{ title | slugify }}/"
tags:
  - formation
---

## {{title}}

### Training goals

The aim of this technical training course for developers is to enable participants to use the right methods and tools to implement a knowledge graph project. It is aimed at developers and data scientists.

This course will enable participants to answer the following questions:

- How to take advantage of advanced SPARQL queries (federated queries, data transformation queries, etc.).
- How to manipulate RDF data in scripts, programs (Java), using RDF4J or Jena, to perform data transformations?
- How to feed a knowledge graph with relational data, XML, CSV, JSON, etc.?
- How can I expose RDF data on the Web?
- What are the main ontology models to be aware of when reusing, processing or publishing data?

### Duration

1.5 days. This course can be adapted to 1 or 2 days.

### Who is this training for ?

This advanced Web of data training course is aimed at **developers**, **data scientists**, project managers or consultants who wish to perfect their Web of data skills, or who are in the implementation phase of a project using Web of data technologies.

### Prerequisites

- Knowledge of XML and JSON
- Ability to write SQL queries is a plus
- notions of RDF (a reminder will be given at the beginning of the course)

### Program

#### RDF structure reminder

- RDF data model reminder
- Turtle syntax reminder

#### RDF and advanced SPARQL
  - SPARQL Update: SPARQL update operations
  - Advanced SPARQL: taking advantage of named graphs
  - SPARQL non-standard operations: full-text search and spatial search

#### JSON-LD: encoding RDF triplets in JSON
  - JSON basics
  - The notion of JSON-LD context
  - Creating RDF-compatible JSON files with a JSON-LD context
  - JSON-LD Framing: exporting JSON files from a JSON-LD specification

#### Converting native data to RDF
  - Convert XML to RDF/XML using an XSLT stylesheet
  - Use native data to RDF mapping tools :
    - xls2rdf
    - SPARQLAnything
    - GraphDB's OntoRefine
  - R2RML and Direct Mapping: converting a relational database to RDF with OnTop

#### SPARQL and SPARQL update
  - SPARQL operators (depending on trainees' level of familiarity)
  - GeoSPARQL for querying geographic data
  - Using SPARQL to update data
  - Using SPARQL to export data

#### The GraphDB Triplestore
  - Installing and configuring GraphDB
  - Using the administration interface
  - Loading, exploring and visualizing data
  - Data maintenance strategy in a triplestore: named graphs

#### RDF APIs in Java and Python
  - RDF4J Java API: read/write RDF, execute SPARQL queries
  - The rdflib API in Python
  - Apache Jena: command lines: SPARQL, inference and processing without writing code

### Adapt this course

By its very nature, this Web of Data training course for developers requires special adaptation to suit your project and data. If your problem requires the use of particular tools (inference engines, RDF bases, semantic ETLs), or particular data models, the basic training content will be adapted to take them into account. Please [contact us](https://sparna.fr/contact/).