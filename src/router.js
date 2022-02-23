const publicHandler = require('./handler/publicHandler');
const dataHandler = require('./handler/dataHandler');

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    publicHandler(res, '/public/index.html');
  } else if (endpoint.includes('public')) {
    publicHandler(res, endpoint);
  } else if (endpoint.includes('title')) {
    publicHandler(res, 'src/filmsTitle.json');
  } else if (endpoint.includes('search')) {
    const searchText = endpoint.split('?')[1];
    dataHandler(res, searchText);
  } else {
    res.writeHead(404);
    res.end('nothing was found');
  }
};

module.exports = router;
