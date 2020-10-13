const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const router = express.Router();


const BaseAPI = require('./app/BaseAPI');

let crawler = new BaseAPI();


let jsonParser = bodyParser.json()


router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

router.post('/crawl', jsonParser, async function(req, res) {
  const result = await crawler.getPageContent(req.body);
  res.send(result);
});

// add the router
app.use('/', router);
app.listen(process.env.port || 8080);

// eslint-disable-next-line no-console
console.log('Running at Port 8080');
