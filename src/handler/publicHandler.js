const fs = require('fs');
const path = require('path');

const contentType = {
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.html': 'text/html',
  '.jpg': 'image/jpg',
  '.png': 'image/png',
  '.json': 'application/json',
  '.ico': 'text/plain',
};

const publicHandler = (res, url) => {
  const extention = path.extname(url);
  const filePath = path.join(__dirname, '..', '..', url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      res.writeHead(500);
      res.end('SERVER ERROR!');
    } else {
      res.writeHead(200, { 'Content-Type': contentType[extention] });
      res.end(file);
    }
  });
};

module.exports = publicHandler;
