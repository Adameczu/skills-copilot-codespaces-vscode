// Create web server
const http = require('http');
const hostname = 'localhost';  
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 
// Handle basic routing for comments
const comments = [
    { id: 1, text: "First comment!" },
    { id: 2, text: "Nice server." }
];

server.on('request', (req, res) => {
    if (req.url === '/comments' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(comments));
    }
});