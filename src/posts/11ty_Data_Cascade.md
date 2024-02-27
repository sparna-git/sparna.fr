---

---

# Understanding 11ty data cascade

Official doc with order : https://www.11ty.dev/docs/data-cascade/

From highest priority to lowest priority

## 1. Computed Data

https://www.11ty.dev/docs/data-computed/

> At the end of the Data Cascade you may want to inject Data properties into your data object that are based on other data values. To do that you can use the new `eleventyComputed` feature.

```javascript
// Filename posts/posts.11tydata.js

module.exports = {
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title,
      parent: data => data.parent
    }
  }
};
```

This can be set in a Global Data File (lowest priority in data cascade, see below)


```javascript
// Filename _data/eleventyComputed.js

module.exports = {
  eleventyNavigation: {
    key: data => data.title,
    parent: data => data.parent
  }
};
```

## 2. Front Matter Data in Template

https://www.11ty.dev/docs/data-frontmatter/

## 3. Template data files

https://www.11ty.dev/docs/data-template-dir/

While you can provide global data files to supply data to all of your templates, you may want some of your data to be available locally only to one specific template or to a directory of templates. For that use, we also search for JSON and JavaScript Data Files in specific places in your directory structure.

For example, consider a template located at posts/subdir/my-first-blog-post.md. Eleventy will look for data in the following places (starting with highest priority, local data keys override global data):

- Content Template Front Matter Data
  - merged with any Layout Front Matter Data
- Template Data File (data is only applied to `posts/subdir/my-first-blog-post.md`)
  - `posts/subdir/my-first-blog-post.11tydata.js` JavaScript Data Files
  - `posts/subdir/my-first-blog-post.11tydata.json`
  - `posts/subdir/my-first-blog-post.json`
- Directory Data File (data applies to all templates in `posts/subdir/*`)
  - `posts/subdir/subdir.11tydata.js` JavaScript Data Files
  - `posts/subdir/subdir.11tydata.json`
  - `posts/subdir/subdir.json
- Parent Directory Data File (data applies to all templates in `posts/**/*`, including subdirectories)
  - `posts/posts.11tydata.js` JavaScript Data Files
  - `posts/posts.11tydata.json`
  - `posts/posts.json`
- Global Data Files in `_data/*` (`.js` or `.json` files) available to all templates.

## 4. Directory data files

Same as above

## 5. Front matter data in layouts

## 6. Confiuration API Global data

https://www.11ty.dev/docs/data-global-custom/

(same as a global data file, but through the config API)

> In addition to Global Data Files global data can be added to the Eleventy config object using the `addGlobalData` method. This is especially useful for plugins.
> The first value of addGlobalData is the key that will be available to your templates and the second value is the value of the value returned to the template.

```javascript
module.exports = function (eleventyConfig) {
  // Values can be static:
  eleventyConfig.addGlobalData("myStatic", "static");
  // functions:
  eleventyConfig.addGlobalData("myFunction", () => new Date());
  // or a promise:
  eleventyConfig.addGlobalData(
    "myFunctionPromise",
    () => {
      return new Promise((resolve) => {
        setTimeout(resolve, 100, "foo");
      })
    }
  );
  // or async:
  eleventyConfig.addGlobalData(
    "myAsyncFunction",
    async () => {
      return Promise.resolve("hi");
    }
  );
};
```

## 7. Global data file

https://www.11ty.dev/docs/data-global/

> Global data is data that is exposed to every template in an Eleventy project.

> One way to create global data is through global data files: JSON and JavaScript files placed inside of the global data folder. The global data folder is placed inside the project's input directory (set by the dir.input configuration option), and the name of the global data folder is set by the dir.data configuration option (`_data` by default). All `*.json` and `module.exports` values from `*.js` files in this directory will be added into a global data object available to all templates.

For example to set a default layout:

```javascript
// filename _data/layout.js
module.exports = "default.njk"
```

Works for JSON as well, and **the structure of the directories is mapped to the structure of the data in the cascade**