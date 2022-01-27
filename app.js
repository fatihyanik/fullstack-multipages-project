const express = require("express");
require("dotenv").config()
const path = require("path");

// import emailSender
const emailSender = require("./models/emailSender");

const app = express();
// set the port
const port = process.env.PORT || 3000;

// add middleware to get the data using POST request 
app.use(express.urlencoded({extended:false})); // false it wil queryString parser
app.use(express.json());

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

//callback solution
/* app.post('/contact', (req, res)=>{
  console.log(req.body);
  emailSender.sendEmail(req.body, (data) => {
    res.json(data)
  })
}) */

//promise solution
app.post('/contact', (req, res) => {
  console.log(req.body);
  emailSender.sendEmail(req.body).then((info) => {
    console.log(info);
      res.json({result: 'done'})
  }).catch(error => {
      res.json({result: 'error'})
  })
})
// listener
app.listen(port, () => {
  console.log(`node application is listening to port : ${port}`);
});
