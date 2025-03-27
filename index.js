const express=require('express');
const path=require('path');
const app=express();
const port= 8000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'home-page.html'));
});

app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname, 'register.html'));
});

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname, 'signup.html'));
});

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.listen(port);  //http://localhost:8000/