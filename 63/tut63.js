// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World This ');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo selectors and more designing</title>
      <style>
          .container{
              border: 2px solid red;
              background-color: rgb(223, 245, 201);
              padding: 34px;
              margin: 34px auto;
              width: 666px;
  
          }
          a{
              text-decoration: none;
          }
          a:hover{
              color: rgb(188, 102, 26);
              background-color: rgb(239, 189, 228);
          }
          a:visited{
              background-color: rgb(225, 169, 169);
          }
          a:active{
              background-color: blueviolet;
          }
          .btn{
              font-family: Arial, Helvetica, sans-serif;
              font-weight: bold;
              background-color: rgb(145, 238, 172);
              padding: 6px;
              border: none;
              cursor: pointer;
              font-size: 13px;
              border-radius: 4px;
          }
          .btn:hover{
              color: rgb(71, 68, 64);
              background-color: rgb(235, 21, 157);
              border: 2px solid black;
          }
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h3>This is my heading</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, eius ipsa. Ullam consequatur nam maiores qui soluta, saepe debitis repudiandae cupiditate, nobis similique architecto iste nulla accusantium iusto laboriosam fuga aut repellat esse! Est?</p>
          <a href="https://google.com" class="btn">Read more</a>
          <button class="btn">Contact Us</button>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});