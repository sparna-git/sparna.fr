---
layout: reference.njk
title: European Legislation Identifier (ELI)
subtitle:
date: 2024-01-01
abstract: Our semantic expertise for an international working group, laying the foundations for a "legislative knowledge graph" on the scale of the European - and global - web.
image: /assets/uploads/2021/02/Squared_ELiSeal-160x130.png
tags: reference
permalink: en/references/{{ title | slugify }}/
---

## European Legislation Identifier (ELI)

[ELI](http://eur-lex.europa.eu/eli) (European Legislation Identifier) is an initiative of the Official Journals of several EU Member States and the Publications Office of the EU, aimed at making **legislation more visible and interoperable on a European scale**. This initiative is based on the **technological fundamentals of the semantic web**:

- the ELI is a URI assigned to a legal text, a version or translation of a text, or part of a text, such as an article. This URI must have a number of specific characteristics:
  - it must contain the /eli component to identify it as an ELI.
  - it must use a certain number of URI components, such as _{jurisdiction}_, _{year}_, _{natural_identifier}_, etc., which each ELI implementation can arrange in its own way to create a perennial identifier similar to the way legal references are made to these texts. While remaining a technical identifier, this URI is intended to be "user-friendly" and relatively legible, to facilitate the establishment of links between laws on a web scale;
  - this URI should be able to be "truncated" to enable simplified navigation through the legislative corpus; for example, if the URI `http://..../eli/2009/loi/1234` identifies law number 1234 of the year 2009, then the URI http://.../eli/2009/loi should list all the laws of 2009, and the URI http://.../eli/2009 should list all the legal texts of 2009.
- ELI defines [an ontology for describing legislative texts](http://publications.europa.eu/resource/dataset/eli), the result of collaboration and compromise between the various Journaux Officiels. This ontology takes the FRBR structuring for describing bibliographic records, and applies it to the characterization of laws. Typically :
  - an abstract level represents the law independently of its versions;
  - a level represents a particular version of the law;
  - one level represents a particular linguistic variant of that version of the law;
  - and the last level represents a specific format (authenticated PDF, paper, HTML etc.) of a particular linguistic variant of a version of a text;
  - This ontology is also complemented by [ELI-DL (Draft Legislation)](https://joinup.ec.europa.eu/collection/eli-european-legislation-identifier/solution/eli-ontology-draft-legislation-eli-dl), an ontology for describing legislation currently under development. The aim of ELI-DL is to promote transparency and optimize the process of drafting legislation through a structured description of its data;

- ELI promotes the content annotation standards [RDFa](http://rdfa.info/) and [JSON-LD](https://json-ld.org/) so that the Official Journals of the various participants - as well as any regulatory or content provider - can semantize the content of existing web pages on its portal.

The ELI working group has also proposed an [extension to the schema.org vocabulary for describing laws](http://schema.org/Legislation), based on ELI. The aim of this extension is to make laws more visible on the Web.
  
---------

## Our expertise for ELI

I've been working as **technical expert to the ELI Taskforce since 2014**. In this capacity, I have been able to contribute to the following aspects

### Training, support and documentation for organizations wishing to implement ELI.

An important part of the expertise consists of training and assistance to the participants of the ELI Taskforce, to facilitate the implementation of ELI in the websites of the Official Journals of the Member States. As such, I have been able to conduct training workshops with official newspapers in the following countries (in chronological order):

- Denmark
- Italy
- France
- Finland
- Luxemburg
- Austria
- Croatia
- Ireland
- Malta
- Slovakia

These workshops are followed by periods of remote assistance and validation of each state's implementation.

These workshops are complemented by the drafting of a [technical guide for ELI implementation](https://op.europa.eu/en/publication-detail/-/publication/8159b75d-5efc-11e8-ab9c-01aa75ed71a1/language-fr/format-PDF) which provides answers to the main technical questions that an information team may have when implementing ELI. This guide is based on feedback gathered during the various workshops.

In some cases, this initial training work was supplemented by specific consulting for a particular implementation, for example in [Luxembourg for Legilux](https://www.sparna.fr/reference/gouvernement-du-luxembourg/) or at [Office des Publications for Cellar](https://www.sparna.fr/reference/office-des-publications-de-lunion-europeenne/).

### Modeling ontologies

I provide expertise on OWL and the formalization of business requirements in the various ELI ontologies:

- The [ELI ontology](http://publications.europa.eu/resource/dataset/eli) itself, which has undergone 4 revisions since 2014 (1.0, 1.1, 1.2 and 1.3 in 2020)
- The [ELI-DL ontology](https://joinup.ec.europa.eu/collection/eli-european-legislation-identifier/solution/eli-ontology-draft-legislation-eli-dl), which is part of the [CIDOC-CRM](http://www.cidoc-crm.org/) conceptual framework, for describing the activities of a legislative process and the associated documents
- The [Legislation schema.org extension] model(http://schema.or/Legislation)

### Specifications for interoperability with ELI

I led and wrote a number of specifications to complement the original ELI standard

- The [ELI/XML specification](https://eur-lex.europa.eu/eli-register/resources.html);
- The [ELI dataset description specification](https://eur-lex.europa.eu/eli-register/resources.html);

### Dissemination and involvement in other initiatives

The ELI initiative is linked to other related initiatives that need to be followed, and for which interoperability must sometimes be ensured:

- Akoma Ntoso](http://www.akomantoso.org/), XML schema for drafting legislative acts;
- OASIS LegalCiteM Working Group](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=legalcitem) for structuring legal references;
- schema.org Community](https://github.com/schemaorg/schemaorg/issues/1156) for the Legislation extension.
- And, in emergence, [Wikidata](http://wikidata.org/) for the dissemination of legislation data;

In addition, I am the author of the following publication on ELI: [The European Legislation Identifier, Thomas Francart, John Dann, Roberto Pappalardo, Carmen Malagon and Marco Pellegrino](http://ebooks.iospress.nl/volume/knowledge-of-the-law-in-the-big-data-age), in Knowledge of the Law in the Big Data Age, IOS Press, 2019, p137-148

### Application development

With the aim of assisting member states with the implementation of ELI, the ELI working group has developed [an ELI metadata validator based on SHACL](https://webgate.ec.europa.eu/eli-validator/). This metadata validator, developed in 2017, relied early on [SHACL](https://www.w3.org/TR/shacl/), before its finalization as an official W3C recommendation. This validator extracts structured metadata published in a web page and validates their semantic conformity with the ELI ontology, providing a validation report.