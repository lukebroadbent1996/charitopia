const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const { response } = require('express');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
    key: "userId",
    secret: "superdupertopsecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60*60*24*1000,
    } 
}))

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'PASSWORD',
    database: 'charitopia'
})

app.post('/register', (req, res)=>{

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

app.post('/login', (req, res)=>{

  const email = req.body.email
  const password = req.body.password

    db.query(
        "SELECT * FROM userdb WHERE email = ?", 
        email, 
        (err, results)=>{
            if (err){
                res.status(500).json({err})
            }
            
            if (results.length > 0){
                bcrypt.compare(password, results[0].password, (error, response)=>{
                    if (response){
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

app.listen(3001, ()=>{
    console.log('Server running on port 3001')
})