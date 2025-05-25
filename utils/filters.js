const { DateTime } = require('luxon')

module.exports = {
    readableDate: function (date, format, locale = "fr") {
        // default to Europe/Vienna Timezone
        const dt = DateTime.fromJSDate(date, { zone: 'UTC+2' })
        if (!format) {
            format =
                dt.hour + dt.minute > 0 ? 'dd LLL yyyy - HH:mm' : 'dd LLL yyyy'
        }
        return dt.toFormat(format, { locale: locale })
    },

    dateToFormat: function (date, format) {
        return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat(
            String(format)
        )
    },

    dateToISO: function (date) {
        return DateTime.fromJSDate(date, { zone: 'utc' }).toISO({
            includeOffset: true,
            suppressMilliseconds: true
        })
    },

    dateFromISO: function (timestamp) {
        return DateTime.fromISO(timestamp, { zone: 'utc' }).toJSDate()
    },

    excludePost: function (allPosts, currentPost) {
        return allPosts.filter(
            (post) => post.inputPath !== currentPost.inputPath
        )
    },

    iso8601: function (dateObj) {
        return dateObj.toISOString();
    },

    // allows to make an absolute URL relative. Use it like this :
    // {{ '/assets/old-website/uploads/2014/09/illustration.jpg' | relative(page) }}
    relative: function(absoluteUrl, page) {
      if (!absoluteUrl.startsWith('/')) {
        throw new Error('URL is already relative '+absoluteUrl)
      }
      const relativeUrl = require("path").relative(page.url, absoluteUrl);
      return relativeUrl;
    },

    localeFilter: function(collection, locale) {
    if (!locale) return collection;
      const filtered = collection.filter(item => item.data.locale == locale)
      return filtered;
    },

    extractFirstImage: function(content) {
      const match = content.match(/!\[.*?\]\((.*?)\)/);
      if (match && match[1]) {
        return match[1];
      }
      return null;
    },

    filterByAuthor: function(collection, author) {
      if (!author) return collection;
        const filtered = collection.filter(item => item.data.author == author)
        return filtered;
    }
}
