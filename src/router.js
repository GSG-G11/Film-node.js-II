const publicHandler = require('./handler/publicHandler');

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    publicHandler(res, '/public/index.html');
  } else if (endpoint.includes('public')) {
    publicHandler(res, endpoint);
  } else {
    res.writeHead(404);
    res.end('nothing was found');
  }
};

module.exports = router;
