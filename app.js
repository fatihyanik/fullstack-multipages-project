const express = require("express");
const app = express();
const path = require("path");
//set the port
const port = process.env.PORT || 3000;
//set the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + "/public"));
//index
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
app.listen(port, () => {
  console.log(`node application is listening to port : ${port}`);
});
