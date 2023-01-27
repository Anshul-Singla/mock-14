const express = require("express");
const User = require("./user.model");


const app = express.Router();


app.get('/' , (req , res) => {
    res.send("LIFE IS AWESOME... && welcome to users")
});
app.post("/", async (req, res) => {
  const { name , difficulty } = req.body;
  console.log('req.body:', req.body)
  const user = await User.findOne({name});
  if(user){
    return res.send({
      message:`welcome ${name}`
    })
  }else{
    await User.create({name , difficulty});
  
     return res.send({
       message:`welcome ${name}`
     })

  }



});

module.exports = app;
