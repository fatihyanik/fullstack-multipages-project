const express = require("express");
require("dotenv").config()
const path = require("path");

const app = express();
// set the port
const port = process.env.PORT || 3000;
// set public folder
app.use(express.static(path.join(__dirname, "public")));
// set ejs as view engine
app.set("view engine", "ejs");
// set view folder path
app.set("views", path.join(__dirname, "views"));
// index
app.get("/", (req, res) => {
  res.render("index");
});
//about
app.get("/about", (req, res) => {
  res.render("about");
});
//contact
app.get("/contact", (req, res) => {
  res.render("contact");
});
//photo detail
app.get("/photo-detail", (req, res) => {
  res.render("photo-detail");
});
//video detail
app.get("/video-detail", (req, res) => {
  res.render("video-detail");
});
//videos
app.get("/videos", (req, res) => {
  res.render("videos");
});

// listener
app.listen(port, () => {
  console.log(`node application is listening to port : ${port}`);
});
