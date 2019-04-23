import express from 'express';

const server = express();

server.get('/', (_, res) => {
  res.send("Hello :)");
});

server.listen(3000, () => {
  console.log(`[SERVER] Running at localhost:3000`);
});

export { express as server };