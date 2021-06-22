const express = require('express')
const router = express.Router();
const axios = require('axios')
const rateLimit = require('express-rate-limit')
const slowDown = require('express-slow-down')

const getApi = require('./apifetch')


//limits the amount of hits a ip can request
const limiter = rateLimit({
    windowMs: 30 * 1000, // 30 seconds
    max: 10 // limit each IP to only request 10 hits per windowMs per 30 seconds
  });

const speedLimiter = slowDown({
  windowMs: 30 * 1000, 
  delayAfter: 1,
  delayMs: 500 // begin adding 500ms of delay per request above 100:
  // request # 101 is delayed by  500ms
  // request # 102 is delayed by 1000ms
  // request # 103 is delayed by 1500ms
  
});

let cachedData;
let cachedTime;

router.post('/', limiter, speedLimiter, async (req, res)=>{
  
  // in memory cache so refreshing wont count as a hit
    if (cachedTime && cachedTime > Date.now() - 30 * 1000){
        return res.json(cachedData);
    }
   try{
    let search = req.body.search
    const data = await getApi(search);

    cachedData = data
    cachedTime = Date.now()
    data.cachedTime = cachedTime
    console.log(cachedTime)
    return res.json(data)
    
   }catch (err) {
    console.log(err)
   }

})

module.exports = router;