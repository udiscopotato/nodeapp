const express = require("express");
const os = require("os");
var ip = require("ip");

const app = express();

app.get("/", (req, res) => {
  res.json({
    version: "v1",
    hostip: ip.address(),
    hostname: os.hostname(),
  });
});

app.listen(3000, () => {
  console.log("Server is Running...");
});