import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("<h1>i tried this by my self only<h1/> ");
    console.log(req.rawHeaders);
});
app.get("/about",(req,res)=>{
    res.send("my name is kunal");
});

app.get("/contactMe",(req,res)=>{
    res.send("my contact number is 7999816165");
});

app.get("/address",(req,res)=>{
    res.send("bengaluru");
});

app.post("/register",(req,res)=>{
    res.sendStatus(201);

});

app.put("/user/kunal",(req,res)=>{
    res.sendStatus(200);
});
app.patch("/user/kunal",(req,res)=>{
    res.sendStatus(200);
});

app.delete("/user/kunal",(req,res)=>{
    res.sendStatus(200);
})
app.listen(port,()=>{
    console.log(`server started with port ${port}`);
});

