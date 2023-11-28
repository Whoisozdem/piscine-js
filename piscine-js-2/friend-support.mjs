import { createServer } from 'http';
import { readFile } from 'fs/promises';

const PORT = 5000;

console.log(`Server is listening on port: ${PORT}`);

const server = createServer((req, res) => {
  const url = req.url.split('/');
  const guests = url[1];

  res.setHeader('Content-Type', 'application/json');

  const filePath = `guests/${guests}.json`;

  readFile(filePath, 'utf-8')
    .then((data) => {
      const guestdata = JSON.parse(data);
      res.statusCode = 200;
      res.end(JSON.stringify(guestdata));
    })
    .catch((error) => {
      if (error.code === 'ENOENT') {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'guest not found' }));
      } else {
        console.error(`Server failed: ${error.message}`);
        res.statusCode = 500;
        res.end(JSON.stringify({ error: 'server failed' }));
      }
    });
});

server.listen(PORT);


