const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/user',(req,res)=>{
    let {username,userage} = req.query;
    res.send(`Request aa gai hai sir ${username} ji saale ${userage}!!`)
});
app.post('/user',(req,res)=>{
    let {username,userage} = req.body;
    res.send(`Request aa gai hai sir ${username} ji saale ${userage}!!`)
})
app.listen(8000,()=>{
    console.log('listening on 8000');
});