---
layout: reference.njk
title: European Legislation Identifier (ELI)
subtitle:
date: 2024-01-01
abstract: Notre expertise sémantique pour un groupe de travail international, qui pose les fondations d'un "knowledge graph législatif" à l'échelle du web européen - et mondial.
image: /assets/uploads/2021/02/Squared_ELiSeal-160x130.png
tags: reference
---

## European Legislation Identifier (ELI)

[ELI](http://eur-lex.europa.eu/eli) (European Legislation Identifier) est une initiative des Journaux Officiels de plusieurs États membres de l'UE, ainsi que de l'Office des Publications de l'UE, visant à rendre plus visibles et interopérables les **lois à l'échelle européenne**. Cette initiative est basée sur les **fondamentaux technologiques du web sémantique** :

- l'ELI est une URI assignée à un texte de loi, une version ou traduction d'un texte, ou partie de texte, comme un article. Cette URI doit avoir quelques caractéristiques particulières :
  - elle doit contenir le composant /eli pour l'identifier comme un ELI.
  - elle doit utiliser un certain nombre de composants d'URI, comme _{jurisdiction}_, _{year}_, _{natural_identifier}_, etc. que chaque implémentation d'ELI peut agencer à sa façon pour créer un identifiant pérenne similaire à la façon de faire des références légales à ces textes. Cette URI se veut donc, tout en restant un identifiant technique, "user-friendly" et relativement lisible, pour faciliter la pose de liens entre lois à l'échelle du web;
  - cette URI devrait pouvoir se "tronquer" afin de permettre une navigation simplifiée dans les corpus législatifs; par exemple si l'URI `http://..../eli/2009/loi/1234` identifie la loi numéro 1234 de l'année 2009, alors l'URI http://.../eli/2009/loi devrait lister toutes les lois de 2009, et l'URI http://.../eli/2009 devrait lister tous les textes de loi de 2009.
- ELI définit [une ontologie de description des textes législatifs](http://publications.europa.eu/resource/dataset/eli), fruit d'une collaboration et de compromis entre les différents Journaux Officiels. Cette ontologie reprend la structuration FRBR de description des notices bibliographiques, et l'applique à la caractérisation des lois. Typiquement :
  - un niveau abstrait représente la loi indépendamment de ses versions;
  - un niveau représente une version particulière de la loi;
  - un niveau représente une variante linguistique particulière de cette version de la loi;
  - et le dernier niveau représente un format spécifique (PDF authentifié, papier, HTML etc.) d'une variante linguistique particulière d'une version d'un texte;
  - cette ontologie est par ailleurs complémentée par [ELI-DL (Draft Legislation)](https://joinup.ec.europa.eu/collection/eli-european-legislation-identifier/solution/eli-ontology-draft-legislation-eli-dl), une ontologie de description des lois en cours d'élaboration. L'objectif d'ELI-DL est de promouvoir la transparence et d'optimiser les processus d'élaboration des textes législatifs au travers d'une description structurée de leurs données;

- ELI promeut les standards d'annotation de contenu [RDFa](http://rdfa.info/) et [JSON-LD](https://json-ld.org/) pour que les Journaux Officiels des différents participants - ainsi que tout fournisseur de réglementation ou de contenu - puisse sémantiser le contenu des pages web existantes de son portail

Le groupe de travail ELI a par ailleurs proposé une [extension du vocabulaire schema.org pour décrire les lois](http://schema.org/Legislation), basée sur ELI. Cette extension vise à donner plus de visibilité aux lois à l'échelle du web.
  
---------

## Notre expertise pour ELI

J'interviens comme **expert technique auprès de la Taskforce ELI depuis 2014**. À ce titre j'ai pu apporter ma contribution sur les aspects suivants

### Formation, assistance et documentation pour les organisations souhaitant implémenter ELI

Une partie importante de l'expertise consiste dans la formation et l'assistance aux participants du groupe de travail ELI, pour faciliter l'implémentation de ELI dans les sites web des journaux officiels des États membres. A ce titre j'ai pu mener des ateliers de formation auprès des journaux officiels des pays suivants (par ordre chronologique):

- Danemark
- Italie
- France
- Finlande
- Luxembourg
- Autriche
- Croatie
- Irlande
- Malte
- Slovaquie

Ces ateliers sont suivis par des périodes d'assistance à distance et de validation de l'implémentation de chaque État.

Par ailleurs ces ateliers sont complémentés par la rédaction d'un [guide technique pour l'implémentation de ELI](https://op.europa.eu/en/publication-detail/-/publication/8159b75d-5efc-11e8-ab9c-01aa75ed71a1/language-fr/format-PDF) qui donne les réponses aux questions techniques principales qu'une équipe information peut se poser lors de l'implémentation de ELI. Ce guide s'appuie sur les retours collectés lors des différents ateliers.

Ces travaux de formation initiale ont été complémentés, pour certains cas, par du consulting spécifique pour une implémentation particulière, au [Luxembourg pour Legilux](http://www.sparna.fr/reference/gouvernement-du-luxembourg/) ou à l'[Office des Publications pour le Cellar](http://www.sparna.fr/reference/office-des-publications-de-lunion-europeenne/) par exemple.

### Modélisation d'ontologies

J'apporte une expertise sur OWL et la formalisation des besoins métier dans les différentes ontologies de ELI :

- L'[ontologie ELI](http://publications.europa.eu/resource/dataset/eli) elle-même, qui a fait l'objet de 4 révisions depuis 2014 (1.0, 1.1, 1.2 et 1.3 en 2020)
- L'[ontologie ELI-DL](https://joinup.ec.europa.eu/collection/eli-european-legislation-identifier/solution/eli-ontology-draft-legislation-eli-dl) qui s'inscrit dans le cadre conceptuel du [CIDOC-CRM](http://www.cidoc-crm.org/), pour la description des activités d'un processus législatif et des documents associés
- La modélisation de l'[extension Legislation schema.org](http://schema.or/Legislation)

### Spécifications pour l'interopérabilité en lien avec ELI

J'ai conduit et rédigé un certain nombre de spécifications complémentaires au standard ELI de départ

- La [spécification ELI/XML](https://eur-lex.europa.eu/eli-register/resources.html);
- La [spécification pour la description des datasets ELI](https://eur-lex.europa.eu/eli-register/resources.html);

### Dissémination et intervention auprès d'autres initiatives

L'initiative ELI s'articule avec d'autres initiatives connexes qu'il s'agit de suivre et pour lesquelles l'interopérabilité doit parfois être assurée :

- [Akoma Ntoso](http://www.akomantoso.org/), schema XML pour la rédaction d'actes législatifs;
- [Groupe de travail OASIS LegalCiteM](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=legalcitem) pour la structuration des références juridiques;
- [Communauté schema.org](https://github.com/schemaorg/schemaorg/issues/1156) pour l'extension Legislation
- Et, en émergence, [Wikidata](http://wikidata.org/) pour la diffusion des données des lois;

Par ailleurs je suis l'auteur de la publication suivante sur l'ELI : [The European Legislation Identifier, Thomas Francart, John Dann, Roberto Pappalardo, Carmen Malagon and Marco Pellegrino](http://ebooks.iospress.nl/volume/knowledge-of-the-law-in-the-big-data-age), dans Knowledge of the Law in the Big Data Age, IOS Press, 2019, p137-148

### Développement d'applications

Dans l'objectif d'assister les États membres à l'implémentation de ELI, le groupe de travail ELI a mis au point [un validateur de métadonnées ELI basé sur SHACL](https://webgate.ec.europa.eu/eli-validator/). Ce validateur de métadonnées, développé en 2017, s'est très tôt appuyé sur [SHACL](https://www.w3.org/TR/shacl/), avant sa finalisation comme recommandation W3C officielle. Ce validateur permet d'extraire les métadonnées structurées publiées dans une page web et de valider leur conformité sémantique avec l'ontologie ELI, en fournissant un rapport de validation.