const express = require('express');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const mysql = require('mysql');
const cors = require('cors');
const router = express.Router();

router.use(express.json());

require('dotenv').config()

const db = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database, 
    port: process.env.port
})

router.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

router.post('/register', (req, res)=>{

    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
  
      bcrypt.hash(password, saltRounds, (err, hash)=>{
  
          if (err){
              console.log(err)
          }
  
          db.query(
              "INSERT INTO userdb (name, email, password) VALUES (?,?,?)", 
              [name, email, hash], 
              (err, results)=>{
                   if (err){
                       res.status(500).json({err})
                   }else{
                      res.status(201).json({results})
                  }
              })
      })
  
  })

module.exports = router;