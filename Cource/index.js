const express = require("express");
const student = require("./schema");
const db = require("./db");
const app = express();
app.use(express.json());

app.get("/students/", async (req, res) => {
  let data = await student.find();
  res.send(data);
}),
  app.get("/students/:id", async (req, res) => {
    let { id } = req.params.id;
    let data = await student.findById(id);

    res.send(data);
  }),

  app.post("/students/", async (req, res) => {
    console.log(rse.body); 
    res.send("done");
  }),
  app.post("/students/", async (req, res) => {
    let data = await student.create(res.body);
    res.send(data);
  }),
  app.patch("/:id/", async (req, res) => {
    let {id}= req.params
    let data = await student.findByIdAndUpdate(id,res.body);
    res.send(data);
  }),
  app.delete("/:id/", async (req, res) => {
    let {id}= req.params
    let data = await student.findByIdAndDelete(id);
    res.send(data);
  }),

  app.listen(8090, () => {
    console.log("listening on 8090");
    db()
  });
