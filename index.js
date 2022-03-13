const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end(`<h1>works</h1>`);
  }
  if (req.url === '/about') {
    res.end(`<h3>About</h3>`);
  }
  res.end(`
    <h1>Ooops!</h1>
    <a href="/">go back </a>

    `);
});
server.listen(5000);
