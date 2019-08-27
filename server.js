const express = require("express");
const path = require("path");

const port = process.env.PORT || 8080;
const app = express();

app.all(/.*/, (req, res, next) => {
  const host = req.header("host");
  if (host.match(/^www\..*/i)) {
    next();
  } else {
    res.redirect(301, "http://www." + host + req.url);
  }
});

app.use(express.static(`${__dirname}/dist`));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(`App is listening on ${port}`);
