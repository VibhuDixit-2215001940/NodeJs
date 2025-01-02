const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const personRoutes = require('./routes/person')

mongoose.connect('mongodb://127.0.0.1:27017/persons')
.then(function(){
    console.log("Connected to MongoDb")
})
.catch(function(err){
    console.log(err);
})


app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.redirect('/person')
})
app.use(personRoutes)
app.get('*',(req,res)=>{
    res.send("Bhai galat jagah ja rahe ho tum!!")
})
app.listen(8000,()=>{
    console.log("Listening on port 8000")
})