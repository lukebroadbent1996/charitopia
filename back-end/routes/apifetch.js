const { response, request } = require('express');
const fetch = require('node-fetch')

require('dotenv').config();

const getApi = async (search)=>{
    try{
      
      if (req.body.search){
        let baseURL = await fetch(`https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}&search=${search}&categoryID=1`)
        return await baseURL.json()
      }
      else if (!req.body.search){
        let baseURL = await fetch(`https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}&search=Animals&rated=true&sort=RATING%3ADESC`)
        return await baseURL.json()
      }else{
        console.log(err)
      }
    }catch (err){
  console.log(err)
    }
}

module.exports = getApi;