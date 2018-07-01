const express = require('express')
const app = express()

app.get('/', function (req, res) {
  info = {
    'message': 'Hello here are the data of your browser',
    'user-agent': req.headers['user-agent']
  }
  res.send(JSON.stringify(info))
})

const port = process.env.PORT || 8080;
var server =  app.listen(port);
console.log(`Running on http://localhost:${port}`);
module.exports = server;
