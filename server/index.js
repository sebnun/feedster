const express = require("express");
const { fetchNewsItems } = require("./utils");

const PORT = 5004;
const API_VERSION = "1";

const app = express();

// TODO: some feed items have a UUID as GUID, others use URL as GUID
// Can an item with an UUID appear with a GUID of an URL also?
// If so, they would not be globally unique

/* Example response
[
  {
    guid: "7131e4ba-ad02-4702-9730-4b2a7a0358a9",
    title: "Some title 1",
    link: "https://dn.se/1,
  },
  {
    guid: "https://dn.se/2",
    title: "Some title 2",
    link: "https://dn.se/2",
  },
]
*/

app.get(`/v${API_VERSION}/newsitems`, (req, res) => {
  fetchNewsItems()
    .then((values) => res.json(values))
    .catch(() => res.sendStatus(500));
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
