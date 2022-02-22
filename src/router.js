const fs = require('fs');
const path = require('path');

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    const filePath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(filePath, (error, file) => {
      if (error) {
        res.writeHead(500);
        res.end('SERVER ERROR!');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(file);
      }
    });
  } else {
    res.writeHead(404);
    res.end('nothing was found');
  }
};

module.exports = router;
