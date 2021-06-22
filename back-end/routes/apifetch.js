const fetch = require('node-fetch')

require('dotenv').config();

const getApi = async (search)=>{
    let baseURL = await fetch(`https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.API_KEY}&app_key=${process.env.API_ID}&search=${search}&categoryID=1`)
    return await baseURL.json()
  }

module.exports = getApi