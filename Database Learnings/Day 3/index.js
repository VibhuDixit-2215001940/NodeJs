const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nobita')
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.log('Error connecting', err);
})

//Sabse pahale schema banega(blueprint)
const movieSchema = new mongoose.Schema({
    name : String,
    rating : Number,
    year : Number,
    isWatched : Boolean,
});
//Then model banega(Js class)
const Movie = mongoose.model('Movie', movieSchema);