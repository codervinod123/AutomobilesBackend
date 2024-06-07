const express=require("express");

const {PORT}=require("./config/serverEnv.js");

const {Admin} =require("./models/index.js") 

const automobileBackendService=()=>{
     
    const app=express();

      app.listen(PORT,async()=>{
          console.log("Server is started on port",PORT);
      })

}

automobileBackendService();