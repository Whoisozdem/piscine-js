import http from 'http';
import { writeFile } from 'fs/promises';
import { Buffer } from 'node:buffer';

const host = 'localhost';
const port = 5000;
const pathGuests = 'guests';
const bestFriends = ['Caleb_Squires', 'Tyrique_Dalton', 'Rahima_Young'];

const guestData = (req, res) => {
  const statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const guestFile = `${req.url.slice(1)}.json`;

  const errHandler = (statusCode, message) => {
    const bodyRes = JSON.stringify({ error: message });
    res
      .writeHead(statusCode, {
        'Content-Length': Buffer.byteLength(bodyRes),
      })
      .end(bodyRes);
  };

  const baseAuthorization = req.headers['authorization'];

  if (!baseAuthorization) {
    errHandler(401, 'No credentials found');
    return;
  }

  const credentials = Buffer.from(baseAuthorization.slice(6), 'base64')
    .toString()
    .split(':');

  if (
    !bestFriends.includes(credentials[0]) ||
    credentials[1] !== 'abracadabra'
  ) {
    errHandler(401, 'Authorization Required');
    return;
  }

  const bodyReq = req.headers['body'];

  writeFile(`${pathGuests}/${guestFile}`, bodyReq)
    .then(() => {
      const bodyRes = bodyReq;
      res
        .writeHead(statusCode, {
          'Content-Length': Buffer.byteLength(bodyRes),
        })
        .end(bodyRes);
    })
    .catch((err) => errHandler(500, err.message));
};

const server = http.createServer(guestData);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
