// 1.import mongoose
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sonagoji:sonagojii@cluster0.c0izfi2.mongodb.net/OpenBatchDB1?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Connected to db")
})
.catch((error)=>{
    console.log("error")
})