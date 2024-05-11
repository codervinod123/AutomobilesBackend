const express=require("express");

const {PORT}=require("./config/serverEnv.js")


const automobileBackendService=()=>{
     
    const app=express();

      app.listen(PORT,()=>{
          console.log("Server is started on port",PORT)
      })

}

automobileBackendService();