const http = require('http');
const fs = require('fs');
const path = require('path');
const router = require('./router');

const server = http.createServer(router);
const PORT = process.env.port || 5000;
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`SERVER IS WORKING ON PORT ${PORT}`);
});
