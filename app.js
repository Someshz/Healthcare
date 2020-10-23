const express=require('express');
const mongoose=require('mongoose');
const url="mongodb://localhost/hospitalinfo"
const userinfo=require('./routers/hospitalinfo');
const cors=require('cors');

const app=express(url);
mongoose.connect(url);
app.use(cors());

const con=mongoose.connection;

con.on('open',()=>
{
    console.log("connected");
})

app.use(express.json());
app.use('/user',userinfo);
app.listen(9000,()=>
{
    console.log("server started...");
})