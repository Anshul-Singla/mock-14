const express = require("express");
const dbconnect = require("./config");
const cors = require("cors");
const userRouter = require('./users/user.router')
const scoreRouter = require('./score/score.router')

let port = process.env.PORT || 8080;


const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>LIFE IS AWESOME...</h1>");
});
app.post("/word", (req, res) => {
    const {difficulty} = req.body;
    console.log('difficulty:', difficulty)

    let char = "abcdefghijklmnopqrstuvwxyz" , N=0 , result = '';
    if(difficulty==="high"){
        N=10
    }else if(difficulty === "medium"){
        N =8;
    }else{
        N=6
    }

    for(let i=0 ; i<N ; i++){
        result += char[Math.floor(Math.random() * char.length)];
        console.log('ressult:', result)
    }
    res.send({
        word:result
    })
});
app.use('/user' , userRouter);
app.use('/score' , scoreRouter);
 



app.listen(port, async () => {
  await dbconnect;
  console.log(`Listening on http://localhost:${port}`);
});
