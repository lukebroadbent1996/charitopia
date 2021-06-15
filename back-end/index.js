const express = require('express')
const mysql = require('mysql')
const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'PASSWORD',
    database: 'charitopia'
})

app.get('/register', (req, res)=>{

    db.query(
        "INSERT INTO user-db (full-name, email, password, phone-num) VALUES (?,?,?,?)", 
        [fullname, email, password, phonenumber], 
        (err, results)=>{
            console.log(err)
    })

})

app.listen(3001, ()=>{
    console.log('Server running on port 3001')
})