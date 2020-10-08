const express = require('express');

const app = express();
const path = require('path');

const router = express.Router();

router.get('/', function(req, res) {
  // eslint-disable-next-line no-path-concat
  res.sendFile(path.join(__dirname + '/dist/index.html'));
  // __dirname : It will resolve to your project folder.
});

// add the router
app.use('/', router);
app.listen(process.env.port || 8080);

// eslint-disable-next-line no-console
console.log('Running at Port 8080');
