const express = require("express");
const path = require("path");
const app = express();
const webpack = require("webpack");
const wpMiddleWare = require("webpack-dev-middleware");
const config = require("./webpack.config.js");
const compiler = webpack(config);
const dir = path.join(__dirname, "/");
const routes = require("./routes/index");

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  wpMiddleWare(compiler, {
    publicPath: config.output.publicPath
  })
);
routes(app);

app.get("*", function(req, res) {
  res.sendFile(path.join(dir, "build/index.html"));
});

// Serve the files on port 3000.
app.listen(3000, function(err) {
  if (err) {
    console.log(err);
  }
  console.log("Example app listening on port 3000!\n");
});
