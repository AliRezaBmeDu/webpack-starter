const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');

const app = express();
const port = 5500; // You can adjust the port number as desired

// Webpack compilation
const compiler = webpack(config);

// Use webpack-dev-middleware
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

// Serve static files from the 'src' folder (optional)
app.use(express.static('src'));

// Route all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

console.log(`Click to see the server http://localhost:${port}`)