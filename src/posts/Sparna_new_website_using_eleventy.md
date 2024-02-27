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