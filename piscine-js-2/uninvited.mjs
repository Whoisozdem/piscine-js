import { createServer } from 'http';
import { writeFile } from 'fs/promises';
import { join } from 'path';

const PORT = 5000;
const guest = './guests';

const server = createServer(async (req, res) => {
  if (req.method === 'POST' && req.url.startsWith('/')) {
    try {
      const guestname = req.url.slice(1);
      const jsonfile = [];
      
      req.on('data', (chunk) => jsonfile.push(chunk));
      
      req.on('end', async () => {
        const guestdata = Buffer.concat(jsonfile).toString();
        const filePath = join(guest, `${guestname}.json`);

        try {
          await writeFile(filePath, guestdata, { flag: 'w' });
          res.writeHead(201, { 'Content-Type': 'application/json' });
          res.end(guestdata);
        } catch (err) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'server failed' }));
        }
      });
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid' }));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Error' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
