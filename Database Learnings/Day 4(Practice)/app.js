const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/vibhu')
.then(()=>{
    console.log('Connected to MongoDB')
})
.catch((err)=>{
    console.error('Jhantu')
})

app.set('view engine', 'ejs')
//SCHEMA
const vibhu = new mongoose.Schema({
    name: String,
    age: Number
})
const Vibhu = mongoose.model('Vibhu', vibhu)
Vibhu.create({
    name: 'Vibhu',
    age: 25
})
Vibhu.create({
    name: 'Kavi',
    age: 15
})
app.get('/',function(req,res){
    res.send('Raand')
})
app.listen(8000,()=>{
    console.log('Server is running on port 8000')
})