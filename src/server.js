const http = require('http');
const router = require('./router');

const server = http.createServer(router);
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`SERVER IS WORKING ON PORT ${PORT}`);
});
