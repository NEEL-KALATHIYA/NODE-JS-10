const mongoose = require('mongoose');

const db = async()=>{
    await mongoose.connect("mongodb+srv://kalathiyaneel4:nk18072005@cluster01.vrhny.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01")
    console.log("connected");
    
}

module.exports = db;