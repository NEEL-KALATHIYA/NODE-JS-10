const express = require("express");
const dbConnection = require("./config/db");
const productRoute = require("./routes/product.router");
const path = require("path");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "view/Form.html"));
});
app.use("/products", productRoute);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  dbConnection();
});