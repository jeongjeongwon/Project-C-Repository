const express = require("express")
const app = express()
const mysql = require("mysql")
const path = require("path")
// express, mysql, path

const apple = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'kdt305',
    database : 'test'
})
// mysql, 연동  ^^^^^고정

app.use(express.json())
app.use(express.urlencoded({extended:true}))
// body paser 선언


// 이거 문제였다(아닌듯)
// 경로문제인줄 알았지만 아니였다
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + "/index.html"))
})

// html의 input을 통해 입력된 데이터 DB에 저장하는 코드
// sql을 통해 저장하겠다는 선언
// input을 통해 입력된 데이터를 req.body를 통해 출력후 그 데이터를 DB에 저장
app.post('/', (req, res)=>{
  const sql = "insert into login set ?"
  apple.query(sql, req.body, (err, row, field) => {
    if(err) throw err;
    console.log(row)
    res.send("완료")
  })
})

app.listen(5000, () => {
    console.log(`http://localhost:5000`)
})