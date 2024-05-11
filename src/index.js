const express=require("express");


const automobileBackendService=()=>{
       
      const PORT=3000;
      const app=express();

      app.listen(PORT,()=>{
          console.log("Server is started on port",PORT)
      })

}

automobileBackendService();