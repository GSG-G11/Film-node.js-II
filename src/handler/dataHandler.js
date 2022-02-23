const https = require('https');

const dataHandler = (res, searchText) => {
  https.get(`https://yts.mx/api/v2/list_movies.json?limit=30&query_term=${searchText}`, (resp) => {
    let data = '';
    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      const { movies } = JSON.parse(data).data;
      res.end(JSON.stringify(movies));
    });
  }).on('error', (err) => {
    // eslint-disable-next-line no-console
    console.log(`Error: ${err.message} `);
  });
};
module.exports = dataHandler;
