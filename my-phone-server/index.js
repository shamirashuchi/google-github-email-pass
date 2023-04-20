//https://vscode.dev/profile/github/b10243de0f5b1e0d8dd9431931632f79
const express = require('express');
const app = express();
const port = 2000;

app.get('/', (req, res) => {
  res.send('My phones information comming  soon')
})

app.listen(port, () => {
  console.log(`My phones server running on port ${port}`)
})