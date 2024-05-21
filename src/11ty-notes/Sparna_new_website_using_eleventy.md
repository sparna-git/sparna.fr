---
type: post
meta:
  language: en-US
  url: https://example.com/page
  title: Post title
  description: Post description
  image:
    src: https://example.com/images/page.png
  author:
    name: First Last
  published: 2020-07-03T06:43:21.123Z
  modified: 2020-07-03T08:35:46.289Z
  section: Example
tags:
  - tag1
  - tag2
---

# Building our new website using Eleventy

## Configure Eleventy

Install the compiler :

```sh
npm install @11ty/eleventy
```

Then we create a `.eleventy.js` config file in the root folder, and configure our input and output directory :

```javascript
module.exports = function(eleventyConfig) {
  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  }
};
```

## running Eleventy

To compile the site we use nodejs 14 installed via a snap :

```sh
/snap/bin/npx @11ty/eleventy
```

To run a dev server that will update itself automatically :

```sh
npx @11ty/eleventy --serve
```

## Scaffolding

### Template language

I went for Nunjuck:

1. It is from Mozilla
2. People say it's cool : https://www.reddit.com/r/eleventy/comments/lhb073/what_template_language_to_use/

### Separate layouts from include

I separated layouts from include, but they can theoretically leave in the same directory.

### Specify a default layout

To specify a default layout, I added a `layout.js` file in the data dir, with the `module.exports ) default.njk`, as seen here https://github.com/11ty/eleventy/issues/380#issuecomment-932851369

This is picked up by Eleventy data cascade

We can also do that :

```json
// apply to only these globbed templates
eleventyConfig.addData('myglob/**/*.md', { layout: "posts.njk", mykey: "myvalue" });
```

See https://github.com/11ty/eleventy/issues/55#issuecomment-362881292

### Specify a passthrough directoy

Passthrough directory are directories that are copied "as-is". I set `assets` which is *relative to the input directory*.
I can copy CSS files inside

### Define the package.json


## Working with 11ty

### Indicate relative path of the CSS file

https://github.com/11ty/eleventy/issues/648#issuecomment-596718708

Add to .eleventy.js :

```javascript
  eleventyConfig.addFilter(
    "relative",
    (absoluteUrl, page) => {
      if (!absoluteUrl.startsWith('/')) {
        throw new Error('URL is already relative')
      }
      const relativeUrl = require("path").relative(page.url, absoluteUrl);
      return relativeUrl;
    }
  );
```

Note that the absolute ink works in the dev server, but then not when opening the static files.

### Slugify titles in permalinks

We can do this to ensure the permalink uses the title :

```javascript
permalink: "/{{ title | slugify }}/"
```

But then we need to make sure the links point to the correct URL ?

### How to Beautify generated HTML ???

We can use a transform https://www.11ty.dev/docs/config/#transforms

### Code colors

This is inspired by https://github.com/mirisuzanne/mia

Add to package.json as a devDependency :

```json
"devDependencies": {
    "@11ty/eleventy": "^2.0.0-canary.16",
    "@11ty/eleventy-plugin-syntaxhighlight": "^3.2.0"
}
```

Then `npm install`

Then @require it in the .eleventy.js file :

```javascript
const syntaxhighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
```

Then add it to the config :

```javascript
eleventyConfig.addPlugin(syntaxhighlight);
```

Download a theme CSS for PrismJS from https://github.com/PrismJS/prism-themes. I went for night OWL


### Add a Table of Contents plugin ???


## Working with structured data


### More than one layout : impossible

Seems it is not possible to output to more than one output file : https://github.com/11ty/eleventy/issues/2205

We could use a transform to grab the script tag and output it in another file ? https://www.11ty.dev/docs/config/#transforms

### Existing plugin

https://github.com/quasibit/eleventy-plugin-schema

See example in https://github.com/quasibit/eleventy-plugin-schema/blob/master/demo/post.nj

This works fine. Now we need a transform to extract it.
Any further transformation on the data would be made later on the dataset.

Original full front-matter data :

```
type: post
meta:
  site:
    name: Site title
    description: Site description
    url: https://example.com
    logo:
      src: https://example.com/images/logo.png
      width: 1200
      height: 630
  language: en-US
  url: https://example.com/page
  title: Post title
  description: Post description
  image:
    src: https://example.com/images/page.png
  author:
    name: First Last
  published: 2020-07-03T06:43:21.123Z
  modified: 2020-07-03T08:35:46.289Z
  section: Example
tags:
  - tag1
  - tag2
```


### Transform

We rely on a DOM parser : https://www.npmjs.com/package/node-html-parser --> fast


### Parse JSON-LD and merge in a single dataset

Use json-ld parser from https://github.com/digitalbazaar/jsonld.js.
Add it as dependency.
Require it in .eleventy.js

Use N3.store :
Add as a dependency : `npm --save install n3`



## Wordpress migration

???

## RSS Feed

See https://github.com/maximivanov/eleventy-structured-data-example/blob/master/feed/feed.njk
Iterate on collections and output the feed

```html
{% raw %}
---
# Metadata comes from _data/metadata.json
permalink: "{{ metadata.feed.path }}"
eleventyExcludeFromCollections: true
---
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>{{ metadata.title }}</title>
  <subtitle>{{ metadata.feed.subtitle }}</subtitle>
  {% set absoluteUrl %}{{ metadata.feed.path | url | absoluteUrl(metadata.url) }}{% endset %}
  <link href="{{ absoluteUrl }}" rel="self"/>
  <link href="{{ metadata.url }}"/>
  <updated>{{ collections.posts | rssLastUpdatedDate }}</updated>
  <id>{{ metadata.feed.id }}</id>
  <author>
    <name>{{ metadata.author.name }}</name>
    <email>{{ metadata.author.email }}</email>
  </author>
  {%- for post in collections.posts | reverse %}
  {% set absolutePostUrl %}{{ post.url | url | absoluteUrl(metadata.url) }}{% endset %}
  <entry>
    <title>{{ post.data.title }}</title>
    <link href="{{ absolutePostUrl }}"/>
    <updated>{{ post.date | rssDate }}</updated>
    <id>{{ absolutePostUrl }}</id>
    <content type="html">{{ post.templateContent | htmlToAbsoluteUrls(absolutePostUrl) }}</content>
  </entry>
  {%- endfor %}
</feed>
{% endraw %}
```


{% raw %}
```
eleventyComputed:
  meta:
    author:
      name: "{{ metadata.author.name }}"
    published: "{{ date | iso8601 }}"
    modified: "{% if updateDate %}{{ updateDate | iso8601 }}{% endif %}"
```
{% endraw %}


## Rendering markdown files inside Nunjuck templates

Use `renderFile` plugin : https://www.11ty.dev/docs/plugins/render/


# Internationalization 

## Installation 

Add to your configuration *.eleventy.js* file

```javascript
const { EleventyI18nPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    // any valid BCP 47-compatible language tag is supported
    defaultLanguage: "fr", // Required
  });
};
```

## Add plugin [eleventy-plugin-i18n](https://github.com/adamduncan/eleventy-plugin-i18n)

This plugin to assist with internationalization and dictionary translation.


# Installation

```sh
npm install eleventy-plugin-i18n --save

```

## Configuration

### Define language site directories

* Create directories at the site root for each language code (e.g. "fr" and "en")

```
├─ src
   └─ en      
   └─ fr
```

* Create directory data file

In each language site directory, create a local data file (e.g. fr/fr.json), include locale values.

```
├─ src
   └─ en
       └─ en.json
           {
              "locale": "en"
            }
   └─ fr
       └─ fr.json
            {
              "locale": "fr"
            }
```

* Add on eleventy configuration

Add 2 plugins eleventy-plugin-i18n and translation.

`const i18n = require('eleventy-plugin-i18n');` This is where we provide the translations and fallbackLocales as plugin options .

`const translations = require('./src/_data/i18n');` This object contains our dictionary translation for each respective language .

```javascript
// .eleventy.js
const i18n = require('eleventy-plugin-i18n');
const translations = require('./src/_data/i18n');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(i18n, {
    translations,
    fallbackLocales: {
      '*': 'fr'
    }
  });
};
```

- Create index.js file in the ./src/_data/i18n (translations)

This object contains our dictionary translation for each respective language .

Schema file: ` {  [key] : [local] : 'string' } `
e.g.:
```javascript
  module.exports = {
    Accueil: {
          'fr': 'Accueil',
          'en': 'Home'
        },
    Reference: {
      'fr': 'Nos références',
      'en': 'References'
    },
    Formations: {
      'fr': 'Nos formations',
      'en': 'Formations'
    },
    ........
  };
```


## Usage
For use the i18n translation, automatically determine the correct translation, no need to pass *locale* . 

Format: 

```
{ { 'Accueil' | i18n }}
```

e.g.
```
  <a href="/{{ locale }}/">{{'Accueil' | i18n }}</a> 
```

Example in the sparna.njk file:
```javascript
<header id="header">
  <div id="logo"><a href="{{ '/fr' }}" title = "Sparna"><img src="{{ '/assets/images/logo.png' | relative(page) }}" alt = "" /></a></div>
  <nav id = "menu">
    <div class="menu-menu-principal-container">
      <ul id="menu-menu-principal" class="nav-menu">
        <li id="menu-item-48" class="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-46 menu-item-48"><a href="/{{ locale }}/">{{'Accueil' | i18n }}</a></li>
        <li id="menu-item-26" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-26"><a href="/{{ locale }}/references">{{'Reference' | i18n }}</a></li>
        <li id="menu-item-22" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22"><a href="/{{ locale }}/formations">{{'Formations' | i18n }}</a></li>
        <li id="menu-item-10" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10"><a href="/{{ locale }}/qui-suis-je">{{'Qui' | i18n }}</a></li>
        <li id="menu-item-9" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9"><a href="/{{ locale }}/contact">Contact</a></li>
        <li id="menu-item-50" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-50"><a href="http://blog.sparna.fr" target="_blank">Blog</a></li>
        <li>
          <div class="menu-menu-principal-container">
            {{ languages[page.lang].availableText }}

            {% for link in page.url | locale_links %} {%-if not loop.first %}/{% endif %}
              <a href="{{ link.url }}" lang="{{ link.lang }}" hreflang="{{ link.lang }}"><img src="{{ '/assets/images/'}}{{ link.lang | upper }}{{'.png' }}" alt =""/></a>
            {% endfor %}
          </div>					
        </li>
      </ul>
    </div>			
  </nav>
</header>
```

### In each language site directory, add all theme for display in Sparna.fr 

Website Map:
```bash
sparna.fr
│   .eleventy.js
└───src
    ├───en
    │   │   contact.html
    │   │   en.json
    │   │   formations.html
    │   │   index.html
    │   │   qui-suis-je.html
    │   │   references.html
    │   │   
    │   ├───formations
    │   │       Autres formations web sémantique sur-mesure.md
    │   │       Formation web de données avancé techniques et outils pour le développement d\\'applications 2 jours.md
    │   │       Formation Web de données graphe de connaissances introduction pour une mise en oeuvre intelligente.md
    │   │       
    │   └───references
    │           eli-european-legislation-identifier.md
    │           gouvernement-du-luxembourg.md
    │           huma-num-nakala.md
    │           inra.md
    │           issn-profil-dapplication-rdf-et-versement-dans-wikidata.md
    │           ministere-de-la-culture-publication-de-thesaurus-skos-en-pdf.md
    │           office-des-publications-de-lunion-europeenne.md
    │           scolomfr-skos.md
    │           thesaurus-unesco.md
    │           unesco-iiep.md
    │           
    ├───fr
    │   │   contact.html
    │   │   formations.html
    │   │   fr.json
    │   │   index.html
    │   │   qui-suis-je.html
    │   │   references.html
    │   │   
    │   ├───formations
    │   │       Autres formations web sémantique sur-mesure.md
    │   │       Formation web de données avancé techniques et outils pour le développement d'applications 2 jours.md
    │   │       Formation Web de données graphe de connaissances introduction pour une mise en oeuvre intelligente.md
    │   │       
    │   └───references
    │           eli-european-legislation-identifier.md
    │           gouvernement-du-luxembourg.md
    │           huma-num-nakala.md
    │           inra.md
    │           issn-profil-dapplication-rdf-et-versement-dans-wikidata.md
    │           ministere-de-la-culture-publication-de-thesaurus-skos-en-pdf.md
    │           office-des-publications-de-lunion-europeenne.md
    │           scolomfr-skos.md
    │           thesaurus-unesco.md
    │           unesco-iiep.md
    │           
    └───_data
       └───i18n
              index.js
    
```


> ## Website Map Sparna.fr

This is website map for sparna.fr:

```
sparna.fr
│   .eleventy.js
│   .gitignore
│   package-lock.json
│   package.json
│   serve.sh
│   
├───.cache
├───.github 
├───dist    
├───node_modules           
└───src
    │   CNAME
    │   
    ├───11ty-notes
    ├───assets      
    ├───en          
    ├───fr      
    ├───_data
    │   └───i18n
    └───_layouts
```

## **Directories & files**

### File
* `.eleventy.js` Eleventy config file.
* `index.js` This file contains our dictionary of translations for each respective language.

### Directories

* `src` Main Directory
* `src\11ty-notes` Directory save all notes for how to developer Eleventy 11 for Sparna website.
* `src\assets` Directory for save css, javascript, image files.
* `src\en` Directory for save all document for display in Sparna.fr.
* `src\fr` Directory for save all document for display in Sparna.fr.
* `src\_data` Directory standard for save all file config.
* `src\_data\i18n` Directory for save index.js file .
* `src\_layout` Main directory for save template all.
