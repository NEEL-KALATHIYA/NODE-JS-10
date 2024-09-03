const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose.connect("mongodb+srv://kalathiyaneel4:node@cluster0.j1pihbe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  console.log('DB connection established');
};

module.exports = dbConnect;