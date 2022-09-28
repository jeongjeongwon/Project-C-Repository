const http = require('http')
const express = require('express')
const app = express()
const port = 5000

const element = {
  header : "<header> this is header </header><br>",
  body : "<body> this is body </body><br>",
  footer : "<footer> this is footer </footer><br>",
  form : `
  <form>
    <input type="text" name="username" placeholder="username" /><br>
    <input type="text" name="password" placeholder="password" /><br>
  </form>
  <button type="submit" form="log-in-form">click!</button><br>
  `
}

//? 기존 클레스룸에서 수정된 장소
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
  ${element.header}
  ${element.form}
  ${element.body}
  ${element.footer}
</body>
</html>
`

//? 동작을 확인하기 위해 서버를 여는 코드
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type' : 'text/html'});
  res.write(main);
  res.end();
}).listen(port, () => {
  console.log(`server... http://localhost:${port}`)
})