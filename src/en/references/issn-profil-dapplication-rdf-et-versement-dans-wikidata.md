---
layout: reference.njk
title: "ISSN : RDF application profile and loading records in Wikidata"
subtitle:
date: 2023-01-01
abstract: How the largest bibliographic catalog of periodicals aligned itself with a semantic graph. And how ISSN has added value to its data by uploading it to Wikidata.
image: /assets/uploads/2020/12/logo-square-160x130.jpeg
tags: reference
permalink: en/references/{{ title | slugify }}/
---

## ISSN: RDF application profile and upload to Wikidata

The International ISSN Center, located in Paris, maintains the directory of all ISSN identifiers assigned to serial publications. It is the **world's most comprehensive reference source for serial identification**. The database contains over 2.5 million ISSNs assigned by the ISSN Regional Centers Network. Between 60,000 and 70,000 records are added each year.

Our intervention at ISSN since 2016 has consisted of 4 points:

- Initial training on the theoretical and technical foundations of semantic web standards;
- Support in formalizing and documenting the [ISSN application profile for data dissemination in linked data](https://www.issn.org/understanding-the-issn/assignment-rules/issn-linked-data-application-profile/), as well as its alignment from MARC21 records;
- An analysis and specification for the dissemination of [ISSN portal](https://portal.issn.org/) data to search engines using [schema.org](http://schema.org/);
- An analysis and specific development for the synchronization of freely accessible ISSN catalog data with [Wikidata](http://wikidata.org/); this development, initially envisaged with OpenRefine, was finally developed in the form of a Wikidata "bot": [ISSNBot](https://github.com/CIEPS/ISSNBot), capable of performing synchronization between ISSN registry data and data present in Wikidata. More information on this project and the chosen model can be found on the [Wikidata project talk page](https://www.wikidata.org/wiki/Wikidata_talk:WikiProject_Periodicals/Archive_2#Data_donation_from_ISSN_Register_-_Feedback_welcome).

The benefits for ISSN of these interventions:

- A better understanding and conceptualization of the internal structure of its catalog;
- A new data distribution channel for its customers, through access via content negotiation and a SPARQL endpoint (for a fee);
- Enhanced data visibility through semantic annotation in schema.org;
- Sharing and enhancement of free catalog data via Wikidata;
- Eventually, the ISSN catalog will be enriched by recovering data from Wikidata;

We continue to support ISSN in all matters relating to linked data and the semantic web, in particular the modeling of the [Keepers Registry](https://keepers.issn.org/) using schema.org.


![screenshot ISSN](/assets/uploads/2020/12/screenshot-issn-wikidata.png)