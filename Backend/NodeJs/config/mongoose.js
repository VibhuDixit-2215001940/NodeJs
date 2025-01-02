const mongoose = require('mongoose')
const debuglog = require('debug')('development:mongooseconfig')
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')  

const db = mongoose.connection;
db.on('error', err => debuglog(err))
db.on('open',()=>{
    debuglog('Connected to MongoDB')
})