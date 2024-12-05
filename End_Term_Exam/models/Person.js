const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    age:{
        type: Number,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    DOB:{
        type: Date,
        required: true
    }
});

let Person = mongoose.model('Person',personSchema);
module.exports = Person;