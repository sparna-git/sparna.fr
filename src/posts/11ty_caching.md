---

---

# 11ty RSS feed integration

## Add dependency 

See https://www.mikestreety.co.uk/blog/creating-an-11ty-collection-from-json-api/ to understand.

We add the fetch 11ty plugin:

```json
"devDependencies": {
    "@11ty/eleventy-fetch": "^4.0.0"
  }
```

We add the rss-parser plugin

```json
"devDependencies": {
    "rss-parser": "^3.13.0"
  }
```

Then :

1. We call the RSS feed through the cache mechanism. This avoids calling the RSS feed everytime we hit enter while in development
2. We extract only the necessary attributes from the feed
3. We expose that as an array.

The file "blogPosts.js" in `_data` is exposed as a global `blogPosts` variable in the templates and layouts