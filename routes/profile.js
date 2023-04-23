const express = require("express");
const router = express.Router();
const axios = require("axios");
const axiosRetry = require("axios-retry");

router.get("/", async (req, res, next) => {
    // axiosRetry(axios, {
    //     retries: 3,
    //     onRetry : () => { console.error('Axios retry started at :' + new Date())}, 
    //     shouldResetTimeout: true,
    //     });
    try{
    const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1",{timeout : Number(5)});
        res.send(JSON.stringify(response.data))
  }catch(error){
    // if (axios.isAxiosError(error)) {
    //     const axiosError = error ;
    //     console.log(axiosError.message);
    //     console.log(axiosError.response);
    // }
    console.error("************************************************")
    console.error(error)
  }
 
})
module.exports = router;
