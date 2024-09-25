const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/random',(req,res)=>{
    let x = Math.floor( Math.random()*100 );
    res.render('random',{x});
    });
app.listen(8000,()=>{
    console.log('listening on 8000');
});