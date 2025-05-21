---
layout: reference.njk
title: Ministry of Culture and Communication
subtitle: PUBLICATION OF THESAURUS SKOS IN PDF
date: 2017-01-01
abstract: The data.culture.fr platform disseminates several controlled vocabularies from the Ministry, notably in clickable PDF formats, automatically generated from SKOS data.
image: /assets/uploads/2015/01/Logo-ministere-culture-et-communication-170-140-160x130.png
tags: reference
permalink: en/references/{{ title | slugify }}/
---

## Ministry of Culture and Communication

### SKOS thesaurus PDF distribution

The French Ministry of Culture and Communication has embarked on a transition to the cultural web of data, and has set out its approach in the [roadmap](http://cblog.culture.fr/projet/2013/11/07/groupe-de-travail-metadonnees-culturelles/) it has published. This roadmap comprises 9 actions, including the implementation of a mechanism for perennial identifiers for cultural resources, the interconnection of major cultural repositories (the "culture graph"), and the inter-institutional interconnection of data.

As part of this roadmap, and more specifically for its thesauri, the Ministry has developed a pair of open-source applications, [Ginco](https://github.com/culturecommunication/ginco) and [Ginco Diffusion](https://github.com/culturecommunication/ginco-diff). These respectively edit vocabularies (complying with the [ISO-25964](http://www.niso.org/schemas/iso25964/) standard) to produce SKOS files, and publish these SKOS files on the web, on the [data.culture.fr/thesaurus](http://data.culture.fr/thesaurus/) platform.

![screenshot MCC](/assets/uploads/2015/01/screenshot-index-alpha.png)

Our contribution to this project consisted in perfecting the open-source application [SKOS Play](https://labs.sparna.fr/skos-play) (see also [related blog posts](https://blog.sparna.fr/category/outils/skos-play-outils/)) to publish professional-quality PDF versions of each thesaurus put online on the [data.culture.fr/thesaurus](http://data.culture.fr/thesaurus/) platform. We'll be looking in particular at the results for the [thesaurus for designating architectural works](http://www.inventaire.culture.gouv.fr/telechar/thesaurus_architecture_2013.pdf), and that for [movable objects](http://www.inventaire.culture.gouv.fr/telechar/thesaurus_objets_mobiliers_2014.pdf). In collaboration with the [heritage inventory] teams(http://www.inventaire.culture.gouv.fr/), we have integrated a design for alphabetical indexes, hierarchical views and translation tables, and generated permuted indexes from thesaurus terms. These developments are [available in open-source](https://bitbucket.org/tfrancart//src) for the community.