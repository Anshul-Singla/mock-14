const express = require("express");
const Score = require("./score.model");


const app = express.Router();


app.get('/' , async (req , res) => {
  let scores =await Score.find({}).sort({score:-1});
  console.log('scores:', scores)
    res.send(scores)
});
app.post("/", async (req, res) => {
  const {name , score} = req.body;
  
  let newScore = await Score.create({name , score})
  console.log('new:', newScore);
  res.send("score has benn posted");


});

module.exports = app;
