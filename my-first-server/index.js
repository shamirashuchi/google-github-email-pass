const express = require('express');
const app = express();//app toiri hbe
const port = 5000;//server er 5000 port e run hbe

app.get('/', (req, res) => {
    res.send('Hello from my first ever server')
  })

  app.get('/data', (req, res) => {
    res.send('More data comming soon')
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })