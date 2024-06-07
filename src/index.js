const express=require("express");
const {PORT}=require("./config/serverEnv.js");
const bodyParser = require("body-parser");


const automobileBackendService=async()=>{
     
    
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

      app.listen(PORT,async()=>{
          console.log("Server is started on port",PORT);
      })

}

automobileBackendService();