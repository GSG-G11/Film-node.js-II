const publicHandler = require('./handler/publicHandler');
const dataHandler = require('./handler/dataHandler');

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    publicHandler(res, '/public/index.html', 200);
  } else if (endpoint.includes('public')) {
    publicHandler(res, endpoint, 200);
  } else if (endpoint.includes('title')) {
    publicHandler(res, 'src/filmsTitle.json', 200);
  } else if (endpoint.includes('search')) {
    const searchText = endpoint.split('?')[1];
    dataHandler(res, searchText);
  } else {
    publicHandler(res, '/public/html/error.html', 404);
  }
};

module.exports = router;
