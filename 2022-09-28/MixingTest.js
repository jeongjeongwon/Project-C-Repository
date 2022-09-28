const http = require('http')
const mysql = require('mysql')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express();
const port = 8000;

const con = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'kdt305',
  database : 'test'
})
//? 아래 HTML형식중 body에 들어갈 내용
const element = {
form : 
  `<form action="/", method="POST">
    name <input type="text" name="name"><br>
    title <input type="text" name="title"><br>
    content <input type="text" name="content"><br>
    <input type="submit">
  </form>`
}
//? HTML 본체
const main = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  ${element.form}
</body>
</html>
`

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/MixTest.js')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + '/MixTest.js'))
})

//? 서버에 출력하기 위한 코드
http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type" : "Text"})
  res.write(main);
  res.end
}).listen(port, () => {
  console.log(`server... http://localhost:${port}`)
})

//! 미완성 서버 실행시 html은 표시가 되는데 받은 내용을 아직 json형태로 웹페이지에 보이지 않는다