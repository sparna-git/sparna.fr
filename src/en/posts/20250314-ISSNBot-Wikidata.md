---
layout: post.njk
title: "ISSN contributes 130k periodical records in Wikidata"
author: Thomas Francart
date: 2025-03-14
description: The ISSN International Center uses a bot developped by Sparna to automatically populate Wikidata items with attributes from its catalog
tags: Wikidata, ISSN
permalink: "{{ lang }}/posts/{{ title | slugify }}/"
linkedin: https://www.linkedin.com/posts/thomasfrancart_issn-wikidata-activity-7307355529201238016-zhtQ
bluesky: 
mastodon: 
---

<p class="lead">ISSN has contributed to Wikidata the 130k periodical records of it catalog (out of 2.3 millions) that have a corresponding item in Wikidata.</p>

And it does it with a bot developped by yours truly, [ISSNBot](https://github.com/CIEPS/ISSNBot).

The contributed data on the 130k records is the [Released ISSN Data](https://portal.issn.org/content/license-contract), which includes:

  - The ISSN and ISSN-L identifiers
  - The title proper and key title of the periodical
  - The country of its publisher
  - The medium of the periodical
  - The URL of online ressources
  - The language of the periodical

Take a look at [this random Wikidata periodical record](https://www.wikidata.org/wiki/Q108279397), where you will see title, country of origin and language added by the bot.

The initial bot run was launched on Tuesday 12th march 2025, and can be reviewed in details in [ISSNBot EditGroups log](https://editgroups.toolforge.org/?tool=ISSNBot). The bot will then run every week to keep this set of records from the [ISSN catalog](https://portal.issn.org/) in synch with Wikidata. 

134582 periodical records from the ISSN database were synched with Wikidata, which resulted in an **update of 59k Wikidata items**, while 74k Wikidata items were left untouched.
 
On the 59k updated wikidata records, 93k statements were added. Also, 39k references and 23k qualifiers were added on existing statements.

The additions are broken down into:
  - 1843 new labels
  - 12283 new aliases
  - 14884 new ISSN-L statements (P7363)
  - 12526 new title statements (P1476)
  - 7704 new language statements (P407)
  - 29131 new official websites statements (P856)
  - 7792 new ISSN statements (P236)
  - 7159 new country of origin statements (P495)

Only the periodicals from Wikidata that already have an ISSN statement are being updated by the bot (so, if you know of a periodical that is not in Wikidata, add it with its ISSN, and ISSNBot will pick it up to enrich it with additionnal metadata from the ISSN catalog).

Congratulations to the team at the [ISSN International Center](https://www.issn.org/the-centre-and-the-network/our-mission/the-international-centre-for-the-registration-of-serial-publications-cieps/) for such a contribution to Wikidata !
