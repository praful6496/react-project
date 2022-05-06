const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app= express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user:  'root',
    password:'mysql123',
    database:'db-web',
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/api/insert',(req,res)=>{
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
  
    const sqlInsert = "INSERT INTO form_field (name, email,message) VALUES (?,?,?)"
    db.query(sqlInsert,[name, email,message], (err,result)=>{
        res.send(err);
    });
    
})

  
app.get('/api/get', function (req, res) {  
    db.query("SELECT * FROM team_expert", function (err, result, fields) {
        res.send(result);
    });
}) 


app.listen(3001,()=>{
    console.log('running port 3001');
})
