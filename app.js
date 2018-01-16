// Import libraries.
var http = require('http');
var process = require('process');

// Create http server with default request handler.
var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Red Hat!');
});

// Handle SIGTERM by initiating graceful server shutdown.
process.on('SIGTERM', () => {
  console.log('Initiating shut down. No new HTTP connections will be accepted.');
  server.close(() => {
    console.log('All HTTP connections closed. Shutting down now.');
  });
});

// Start the server on port 8080
server.listen(8080);

