// Create web server
// server.js
const http = require('http');

// Creating a simple HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set the response header
    res.write('Hello, this is a basic web server in Node.js!'); // Response content
    res.end(); // End the response
});

const PORT = 3000; // Define the port

// Start the server and listen on the defined port
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
