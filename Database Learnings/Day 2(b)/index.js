const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname,'public')));


const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.log('Error connecting to MongoDB',err);
})

app.listen(8000,()=>{
    console.log('listening on 8000');
}); 