import server from './app';

const PORT = 80;

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});


