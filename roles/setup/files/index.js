const http = require('http')
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello, Welcome to Ansible world!')
});

server.listen(3000)
