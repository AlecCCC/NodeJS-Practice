const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }

    res.setHeader("Content-Type", 'text/html')
    res.write('<html>')
    res.write('<head><title>My first html</title><head>')
    res.write('<body>Body Element Gang Weed</body>')
    res.write('</html>')
    res.end();
});

server.listen(3000);