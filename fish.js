const http = require('node:http');

const hostname = 'localhost';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Large Mouth Bass: minumum length requirement is 14 inches; daily limit is 5 fish\n"+
  "Small Mouth Bass: minimum length requirement is 14 inches and the daily limit is 5 fish\n" +
  "Blue Gill: there is no minimum length requirement or daily limit");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 