const express = require('express')
const mysql = require('mysql')
const app = express()

app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'PASSWORD',
    database: 'charitopia'
})

app.post('/register', (req, res)=>{

  const fullname = req.body.fullname
  const email = req.body.email
  const password = req.body.password

    db.query(
        "INSERT INTO userdb (name, email, password) VALUES (?,?,?)", 
        [fullname, email, password], 
        (err, results)=>{
            if (err){
                res.status(500).json({err})
            }else{
                res.status(201).json({results})
            }
    })

})

app.post('/login', (req, res)=>{

  const email = req.body.email
  const password = req.body.password

    db.query(
        "SELECT * FROM userdb WHERE email = ? AND password = ?", 
        [email, password], 
        (err, results)=>{
            if (err){
                res.status(500).json({err})
            }
            
            if (results){
                res.send(results)
            }else{
                res.send({message: "Wrong email/password combination"})
            }
    })
})

app.listen(3001, ()=>{
    console.log('Server running on port 3001')
})