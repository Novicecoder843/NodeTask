const express = require("express");

const app = express();
// Creating the  server
app.use((req, res) => {
  // Setting CORS headers (allow all origins, methods, and headers)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept,authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
    res.end('Hello, World!');
});

// Start the server and listen at port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Onepoket Server is listening at port ${PORT}`);
});
