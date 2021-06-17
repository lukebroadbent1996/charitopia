const express = require('express');
const bcrypt = require('bcrypt');
const mysql = require('mysql');
const router = express.Router();
const cors = require('cors');

require('dotenv').config()

router.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

const db = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database, 
    port: process.env.port, 

})

router.get('/login',(req, res)=>{
    if (req.session.user){
        res.send({ loggedIn: true, user: req.session.user })
    }else{
        res.send({ loggedIn: false })
    }
})

router.post('/login',(req, res)=>{

    const email = req.body.email
    const password = req.body.password
   
  
      db.query(
          "SELECT * FROM userdb WHERE email = ?", 
          email, 
          (err, results)=>{
              if (err){
                  res.status(500).json({err})
                  return
              }
              if (results.length > 0){
                  bcrypt.compare(password, results[0].password, (error, response)=>{
                      if (response){
                          req.session.user = results
                        //   console.log(req.session.user)
                          res.send(results)
                      }else{
                          res.send({message: "Wrong email/password combination"})
                      }
                  })
              }else{
                  res.send({message: "User does not exist"})
              }
      })
  })

  module.exports = router