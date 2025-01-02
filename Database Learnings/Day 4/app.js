const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nobita')
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.log('Error connecting to MongoDB')
})
app.set('view-engine', 'ejs')

//SCHEMA (blue-print)
//Accepts a object.......Defines aapki keys kiss tareeke se store hogi 
const movie = new mongoose.Schema({
    name: String,
    year: Number,
    rating: Number,
    isWatched: Boolean
})

//MODEL (Js Class)
//Its a JS class that creates a interface helps to interact with the database
//mongoose.model returns a class which we store in Movie now this is also now a model that now can be usedto perform CRUD operations
const Movie = mongoose.model('Movie', movie);
//mongoose.model() --> takes two args collection(frst letter should be capital, and word should be singular) and schema(the var which you used to create the schema)
// console.log(Movie);//Model { Movie }
//-----------------------Explicitly saved(by making objects)------------------------
// let ironMan = Movie({//Create a new object using model which is equal to js
//     name: 'Iron Man',
//     year: 2008,
//     rating: 9.5,
//     isWatched: false
// })
// console.log(ironMan._id)
//Till here we just create our object only if u find it db.movies.find() then nothing will be visible as that object is only made in the server not saved to the database
// ironMan.save()
// let sholey = Movie({
//     name: 'Sholey',
//     year: 2007,
//     rating: 9.2,
//     isWatched: false
// })

// sholey.save()
//Now it will save explicitely in the databse

//-----------------------Direct Save--------------------------------
// Movie.create({
//     name: 'Avengers: Endgame',
//     year: 2019,
//     rating: 9.3,
//     isWatched: false
// })
//Automatically saved to our db
app.get('/movies', async (req, res) => {
    const movies = await Movie.find({});
    res.render('movies', { movies });
});
app.get('/', function(req, res){
    res.send('Raand');
});
app.listen(8000,()=>{
    console.log('listening server at 8000');
}) 