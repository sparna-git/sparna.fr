---
layout: reference.njk
title: European Legislation Identifier (ELI)
subtitle:
abstract: Notre expertise sémantique pour un groupe de travail international, qui pose les fondations d'un "knowledge graph législatif" à l'échelle du web européen - et mondial.
image: /assets/old-website/uploads/2021/02/Squared_ELiSeal-160x130.png
tags: reference
---

## European Legislation Identifier (ELI)

[ELI](http://eur-lex.europa.eu/eli) (European Legislation Identifier) est une initiative des Journaux Officiels de plusieurs états membres de l'UE, ainsi que de l'Office des Publications de l'UE, visant à rendre plus visibles et interopérables les **lois à l'échelle européenne**. Cette initiative est basée sur les **fondamentaux technologiques du web sémantique** :

- l'ELI est une URI assignée à un texte de loi, une version ou traduction d'un texte, ou partie de texte, comme un article. Cette URI doit avoir quelques caractéristiques particulières :
  - elle doit contenir le composant /eli pour l'identifier comme un ELI.
  - elle doit utiliser un certain nombre de composants d'URI, comme _{jurisdiction}_, _{year}_, _{natural_identifier}_, etc. que chaque implémentation d'ELI peut agencer à sa façon pour créer un identifiant pérenne similaire à la façon de faire des références légales à ces textes. Cette URI se veut donc, tout en restant un identifiant technique, "user-friendly" et relativement lisible, pour faciliter la pose de liens entre lois à l'échelle du web;
  - cette URI devrait pouvoir se "tronquer" afin de permettre une navigation simplifiée dans les corpus législatifs; par exemple si l'URI `http://..../eli/2009/loi/1234` identifie la loi numéro 1234 de l'année 2009, alors l'URI http://.../eli/2009/loi devrait lister toutes les lois de 2009, et l'URI http://.../eli/2009 devrait lister tous les textes de loi de 2009.
  
  
---------

![scoLOMFR screenshot](/assets/old-website/uploads/2020/12/scolomfr-screenshot.png)