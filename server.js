const bodyParser = require("body-parser");
const express = require("express");
const server = express();
const axios = require('axios');


const port = 3000;

//Static files

server.use(express.static("public"));
server.use(bodyParser.urlencoded({ extended: true }));

server.use("/css", express.static(__dirname + "/public/css"));
server.use("/js", express.static(__dirname + "/public/js"));
server.use("/img", express.static(__dirname + "/public/img"));

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

server.get("/waterconditions", (req, res) => {
  res.sendFile(__dirname + "/views/waterconditions.html");
});

server.get("/fishinmyarea", (req, res) => {
  res.sendFile(__dirname + "/views/fishinmyarea.html");
});

server.get("/castingtips", (req, res) => {
  res.sendFile(__dirname + "/views/castingtips.html");
});

server.get("/fishfound", (req, res) => {
  res.sendFile(__dirname + "/views/fishfound.html");
  
});

server.get("/clearwater", (req, res) => {
  res.sendFile(__dirname + "/views/clearwater.html");
});

server.get("/murkywater", (req, res) => {
  res.sendFile(__dirname + "/views/murkywater.html");
});

server.get("/greenwater", (req, res) => {
  res.sendFile(__dirname + "/views/greenwater.html");
});

server.get("/brownwater", (req, res) => {
  res.sendFile(__dirname + "/views/brownwater.html");
});

server.get('/fetch-data', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3001');
    const data = response.data;
    res.send(data);
  } catch (error) {
    res.status(500).send('Error fetching data.');
  }
});

async function getData()  {
  const url = 'http://localhost:3001/';
  try {
  
    const response = await axios.get(url);
    console.log('Response:', response.data);
    }catch(error) {
      console.error('Error:', error.message);
    }
  }
  
  

server.post("/Submit", (req, res) => {
  const waterColor = req.body["water-color"];

  switch (waterColor) {
    case "clear":
      res.redirect("/clearwater");
      break;

    case "murky":
      res.redirect("/murkywater");
      break;

    case "green":
      res.redirect("/greenwater");
      break;

    case "brown":
      res.redirect("/brownwater");
      break;

    default:
      res.redirect('/');
  }
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:${port}`);
});
