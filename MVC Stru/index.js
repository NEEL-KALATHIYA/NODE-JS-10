const express = require("express")
const dbConnect = require("./config/db")
const userRouter = require("./routes/user.route")
const app = express()
app.use(express.json())
app.get("/", (req, res) => {
    res.send("working ")
})

app.use("/user",userRouter)

app.listen(11111, () => {
    console.log("listening port 11111");
   dbConnect()
})