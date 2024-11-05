import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("<h1>i tried this by my self only<h1/> ");
    console.log(req.rawHeaders);
})
app.get("/about",(req,res)=>{
    res.send("my name is kunal");
})

app.listen(port,()=>{
    console.log(`server started with port ${port}`);
})