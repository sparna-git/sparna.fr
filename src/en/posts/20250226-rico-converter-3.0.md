---
layout: post.njk
title: "RiC-O converter 3.0 : transition from EAD or EAC to archival knowledge graphs"
author: Thomas Francart
date: 2025-02-26
description: A new version of the RiC-O converter tool has been released (v3.0). This tool enables archival institutions to transition from XML-oriented archival descriptions to graph-based descriptions based on the new archival conceptual model Records-in-Contexts.
tags: RiC-O
permalink: "{{ lang }}/posts/{{ title | slugify }}/"
linkedin: https://www.linkedin.com/posts/thomasfrancart_the-ric-o-converter-tool-has-been-released-activity-7300474920117956608-KL7L?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAiD3YwBJvGpu4Ak2jXNNvmSX7ws2MZ_uLE
bluesky: 
mastodon: 
---

<p class="lead">The RiC-O converter tool has been <a href="https://github.com/ArchivesNationalesFR/rico-converter/releases/tag/3.0.0">released in its v3.0 version</a>.</p>

_(continuation of a serie of posts on the usage of knowledge graphs by archival institutions)_. The announcement was [posted on the RiC-O users mailing-list](https://groups.google.com/g/Records_in_Contexts_users/c/RkJuffVqsS0/m/jf8roJNtAAAJ). I am pleased to collaborate with Florence Clavaud that leads the lab of the _Archives Nationales de France_ on this project. Florence is also the main editor of RiC-O.

What is RiC-O converter ? a tool to help archival institutions transition from their XML and document-based data (EAD and EAC files), to graph-based RDF datasets expressed on the [Records In Contexts ontology](https://www.ica.org/standards/RiC/ontology). This is a **double-shift** : a shift to a different data structure (graphs, decentralized) but also and more importantly a shift to a different conceptual model (RiC-CM) : new kinds of entities to describe archival descriptions, leading to more precise and interoperable descriptions. Typically we are talking here about *[RecordResources](https://www.ica.org/standards/RiC/ontology#RecordResource)*, *[Instantiations](https://www.ica.org/standards/RiC/ontology#Instantiation)*, *[Relations](https://www.ica.org/standards/RiC/ontology#Relation)*, etc. In particular, v3.0.0 of the converter produces data that conforms to RiC-O 1.1.

Two things make this transition to graph-based + conceptual-model-backed descriptions in the archival domain unique : 

1. they provide a ready-to-use OWL encoding of the conceptual model (RiC-O encodes RiC-CM). This was not the case for FRBR, nor for CIDOC-CRM (only since a few months can we download OWL encoding of the CIDOC-CRM from the website). So archival institutions have everything they need to start encoding.
2. they provide a tool to convert existing data ! and that is RiC-O converter. So archival institutions can adpat it to their own need.

Check out the [online documentation of RiC-O converter](https://archivesnationalesfr.github.io/rico-converter/) if you want to try it out on your own EAD or EAC files, and let us know what you think of it.
