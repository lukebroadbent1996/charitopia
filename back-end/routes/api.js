const express = require('express')
const router = express.Router();
const axios = require('axios')
const rateLimit = require('express-rate-limit')

//limits the amount of hits a ip can request
const limiter = rateLimit({
    windowMs: 30 * 1000, // 30 seconds
    max: 2 // limit each IP to only request 2 hits per windowMs per 30 seconds
  });

const baseURL = `https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}`

let cachedData;
let cachedTime;

router.get('/', limiter, async (req, res)=>{
    // in memory cache so refreshing wont count as a hit
    if (cachedTime && cachedTime > Date.now() - 30 * 1000){
        return res.json(cachedData);
    }
   try{
    const { data } = await axios.get(`${baseURL}`);

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