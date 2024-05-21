const express = require("express");
const app = express();

app.get('/api',(req,res)=>{
    res.json({users: ["userOne", "userTow", "userThree"], message: "done successfuly"})
})

app.listen(5000, ()=>{
    console.log("server is listening on port 5000....");
});