const Parser = require("rss-parser");

const parser = new Parser();

// n unique feed items from list of feeds sorted chronologically
exports.fetchNewsItems = async () => {
  const { FEEDS, ITEM_LIMIT } = require("./model");
  const promises = FEEDS.map((feed) => parser.parseURL(feed));

  return Promise.all(promises).then((feedObjects) =>
    feedObjects
      .map((feedObject) => feedObject.items)
      .flat()
      .reduce((acc, curr) => {
        // As per the RSS spec, guid should be globally unique
        if (!acc.find((feedItem) => feedItem.guid === curr.guid)) {
          acc.push(curr);
        }
        return acc;
      }, [])
      .sort((a, b) => -a.isoDate.localeCompare(b.isoDate))
      .splice(0, ITEM_LIMIT)
      .map((feedItem) => {
        return {
          guid: feedItem.guid,
          title: feedItem.title,
          link: feedItem.link,
        };
      })
  );
};
