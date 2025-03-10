const express = require("express");
const dbConnect = require("./db");
const User = require("./schema");
const isValid = require("./middleware/isValidate");

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  let data = await User.find();
  res.send(data);
});

app.post("/", isValid, async (req, res) => {
  let user = await User.create(req.body);
  res.send(user);
});

app.patch("/:id", async (req, res) => {
  let { id } = req.params;
  let data = await User.findByIdAndUpdate(id, req.body);
  res.send(data);
});

app.delete("/:id", async (req, res) => {
  let { id } = req.params;
  let data = await User.findByIdAndDelete(id);
  res.send(data);
});

app.listen(11111, () => {
  console.log("Server is running on port 11111");
  dbConnect();
});