const express = require('express');//returns a function
const app = express();//it returns an entier object
// console.log(app)

app.listen(8080, function(){
    console.log('Server is running on port 8080')
    // console.log(this) //returns the current context, here it's the app object
})