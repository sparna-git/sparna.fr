const { EleventyRenderPlugin } = require("@11ty/eleventy");
const plugin_syntaxhighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const plugin_schema = require("@quasibit/eleventy-plugin-schema");


/* Internationalization i18n : Jorge */
const { EleventyI18nPlugin } = require("@11ty/eleventy");
const i18n = require('eleventy-plugin-i18n');
const translations = require('./src/_data/i18n');

/*
Thomas : this is to work with N3 triplestore when parsing schema.org metadata
const HTMLParser = require('node-html-parser');
const fs = require('fs');
const jsonld = require('jsonld');
const N3 = require('n3');
const { DataFactory } = N3;
const { namedNode, literal, defaultGraph, quad } = DataFactory;

// store as a global variable
const store = new N3.Store();
*/

module.exports = function(eleventyConfig) {
  
  // plugins
  eleventyConfig.addPlugin(plugin_syntaxhighlight);
  eleventyConfig.addPlugin(plugin_schema);
  // this is to be able to render markdown templates inside Nunjuck templates
  // see https://www.11ty.dev/docs/plugins/render/
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  // config plugins
  /*
  Thomas : this is to serialize all triples from header in a single output file
  eleventyConfig.on('eleventy.after', async ({ dir, results, runMode, outputMode }) => {
    const writer = new N3.Writer(
      { format: 'N-Quads' },
      { prefixes: { 
        schema: 'http://schema.org/'
        }
      }
    );
    
    for (const quad of store)
      writer.addQuad(quad);
    
    writer.end((error, result) => {
      fs.writeFile("dist/dataset.nq", result, err => {
          if (err) { console.error(err); }
      });
    });
  });
  */

  // filters
  // allows to make an absolute URL relative. Use it like this :
  // {{ '/assets/old-website/uploads/2014/09/illustration.jpg' | relative(page) }}
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

  eleventyConfig.addFilter("iso8601", (dateObj) => {
    return dateObj.toISOString();
  });

  // transforms
  /*
  Thomas : this is to extract JSON-LD header in a separate file
  eleventyConfig.addTransform("jsonld-extract", function(content) {

    // define a mapping of context URL => context doc
    let fileContent = fs.readFileSync("src/_data/schemaorg_jsonldcontext.json");
    let schemaorg_context = JSON.parse(fileContent);
    const CONTEXTS = {
      "https://schema.org": schemaorg_context,
      "http://schema.org": schemaorg_context
    };


    // grab the built-in Node.js doc loader
    const nodeDocumentLoader = jsonld.documentLoaders.node();

    // change the default document loader
    const customLoader = async (url, options) => {
      if(url in CONTEXTS) {
        return {
          contextUrl: null, // this is for a context via a link header
          document: CONTEXTS[url], // this is the actual document that was loaded
          documentUrl: url // this is the actual context URL after redirects
        };
      }
      // call the default documentLoader
      return nodeDocumentLoader(url);
    };
    jsonld.documentLoader = customLoader;


    // Prior to Eleventy 2.0: use this.outputPath instead
    if( this.page.outputPath && this.page.outputPath.endsWith(".html") ) {
      let jsonLdPath = this.page.outputPath.substring(0,this.page.outputPath.length-".html".length)+".jsonld";
  
      let dom = HTMLParser.parse(content);
      let jsonLdScripts = dom.querySelector('script[type="application/ld+json"]');

      if(jsonLdScripts) {
        let jsonldString = jsonLdScripts.text;

        // output it to other jsonld file        
        fs.writeFile(jsonLdPath, jsonldString, err => {
          if (err) { console.error(err); }
        });

        let jsonldObject = JSON.parse(jsonldString);

        jsonldObject["@graph"][1].id = this.page.url;

        let baseUrl = 'https://sparna.fr';
        // console.dir(jsonldObject, { depth:null });
        const nquads = jsonld.toRDF(jsonldObject, {format: 'application/n-quads', base:baseUrl}).then(
          (result) => {
            // console.dir(jsonldObject, {depth: null});
            // console.log(result);

            // parse the result and add it to store
            const parser = new N3.Parser();
            parser.parse(result, (error, quad, prefixes) => {
              // quad is null to indicate parsing is finished
              if (quad) {
                quad._graph = namedNode(baseUrl+this.page.url);
                // console.log(quad)
                store.add(quad);
              }
            });
          }
        );
        
      }

      return content;
    }

    return content;
  });
  */

  // internationalization 
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: 'fr', // Required
    errorMode: 'allow-fallback' // Opting out of "strict"
  });


  eleventyConfig.addPlugin(i18n, {
    translations,
    fallbackLocales: {
      '*': 'fr'
    },
  });

  // filter for collections
  eleventyConfig.addFilter('localeFilter', function(collection, locale) {
    if (!locale) return collection;
      const filtered = collection.filter(item => item.data.locale == locale)
      return filtered;
  });

  // pass-through
  eleventyConfig.addPassthroughCopy({ "static": "/" });

  // settings
  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    }
  }



};