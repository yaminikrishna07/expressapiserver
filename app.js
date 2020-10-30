const express = require("express");
var app = express();

app.listen(1200,()=>{
  console.log("Server started");
});

//REST End Point
app.post("/api/:version/parse",(req,res)=>{
 var requestBody = req.body;
 var version  = req.params.version;
 if(version == "v1"){
   res.status(200);
   res.send({firstName: “JOHN0000”,lastName: “MICHAEL000”,clientId: “9994567"});
 }
 else if(version == "v2"){
   res.status(200);
   res.send({firstName: “JOHN”,lastName: “MICHAEL”,clientId: “999-4567"});
 }
 res.status(415);
 res.send({"message":"Invalid version parameter"});a
});




