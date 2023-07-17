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



server.listen(3000, () => {
    console.log(`Server running at http://localhost:${port}`);
  });