const https = require('https');
const path = require('path');
const fs = require('fs');

const publicHandler = require('./handler/publicHandler');

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    publicHandler(res, '/public/index.html');
  } else if (endpoint.includes('public')) {
    publicHandler(res, endpoint);
  } else if (endpoint.includes('search')) {
    // eslint-disable-next-line no-console
    https.get('https://yts.mx/api/v2/list_movies.json?limit=30', (resp) => {
      let data = '';
      // A chunk of data has been received.
      resp.on('data', (chunk) => {
        data += chunk;
      });
      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        const films = JSON.parse(data);
        const filePath = path.join(__dirname, 'filmsInfo.json');
        fs.writeFile(filePath, JSON.stringify(films), (error) => {
        // eslint-disable-next-line no-console
          console.log(error);
        });
      });
    }).on('error', (err) => {
      // eslint-disable-next-line no-console
      console.log(`Error: ${err.message} `);
    });
    res.writeHead(302, { location: '/' });
    res.end();
  } else {
    res.writeHead(404);
    res.end('nothing was found');
  }
};

module.exports = router;
