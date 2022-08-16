// jshint esversion:6

const { response } = require("express");
const express = require("express");
const app = express();

app.get("/", function (request, response) {
  response.send("<h1>Hello World!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me on: karanchandekar431@gmail.com");
});

app.get("/about", function (req, res) {
  res.send(
    "Hey there! I am Karan, I am a web developer who love to design websites with pure html, css and javascript."
  );
});

app.get("/hobbies", function (req, res) {
  res.send("<ul><li>Eat</li><li>Sleep</li><li>Code</li></ul>");
});

app.get("/skills", function (req, res) {
  res.send("<ul><li>HTML</li><li>CSS</li><li>Javascript</li></ul>");
});

app.listen(3000, function () {
  console.log("Server started at port 3000.");
});
