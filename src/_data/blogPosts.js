const Parser = require('rss-parser');
const EleventyFetch = require("@11ty/eleventy-fetch");

// RSS feed URL
const RSS_FEED = 'http://blog.sparna.fr/feed/';

module.exports = async function() {

	try {
		// use a cache so that the RSS feed is not called everytime
		const feedString = await EleventyFetch(RSS_FEED, {
			duration: "4h", // save for 4 hours
			type: "text" 
		});

		// parse the feed into an object
		const parser = new Parser();
		let feed = await parser.parseString(feedString);

		// extract just the necessary information from the feed object
		// and expose it as an array
		let data = feed.items.map((item) => {
			return {
				title: item.title,
				link: item.link
			};
		});
		
		return data;

	} catch(e) {
		console.error(e)
		return {
			// my failure fallback data
		}
	}

};