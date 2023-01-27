const mongoose = require("mongoose");

const dbConnect = mongoose.connect('mongodb+srv://mock:14@cluster0.dqtxtte.mongodb.net/wordGame').then(_ => console.log('db connected'));
module.exports = dbConnect