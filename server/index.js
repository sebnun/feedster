const express = require("express")
const app = express()

const PORT = 5000
const API_VERSION = "1"

const mock = [
  {
    id: "someguid",
    title: "Some title",
    url: "some url",
  },
  {
    id: "someguid2",
    title: "Some title2",
    url: "some url3",
  },
];

app.get(`/v${API_VERSION}/newsitems`, (req, res) => {
  res.json(mock)
})

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
