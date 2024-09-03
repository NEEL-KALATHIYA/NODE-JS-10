const express=require('express');


const app=express();

app.get('/', (req, res)=>{
    res.send("Hello World");
})
app.get('/New', (req, res)=>{
    res.send("New World");
})


app.listen(8091,()=>{
console.log("listening on port 8091");
})

