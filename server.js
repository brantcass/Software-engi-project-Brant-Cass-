const express = require('express');
const server = express();
const port = 3000;


//Static files

server.use(express.static('public'));

server.use('/css', express.static(__dirname + '/public/css'));
server.use('/js', express.static(__dirname + '/public/js'));
server.use('/img', express.static(__dirname + '/public/img'));


server.get('/', (req, res) => {

   res.sendFile(__dirname + '/views/index.html');
  
 });  

server.get('/waterconditions', (req, res) => {
  res.sendFile(__dirname + '/views/waterconditions.html');
});

server.get('/fishinmyarea', (req, res) => {
  res.sendFile(__dirname + '/views/fishinmyarea.html');
});

server.get('/castingtips', (req, res) => {
  res.sendFile(__dirname + '/views/castingtips.html');
});

server.get('/fishfound', (req, res) => {
  res.sendFile(__dirname + '/views/fishfound.html');
});

server.listen(3000, () => {
    console.log(`Server running at http://localhost:${port}`);
  });