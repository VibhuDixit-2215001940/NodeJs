// const express = require('express');//returns a function
// const app = express();//it returns an entier object
// // console.log(app)

// app.listen(8080, function(){
//     console.log('Server is running on port 8080')
//     // console.log(this) //returns the current context, here it's the app object
// }

const express = require('express');
const app = express(); 
//without path i.e. for all incoming requests
// app.use((req,res)=>{
//     console.log(req);
//     // console.log(res);
//     console.log("You made a request!!")
//     res.send("<h1>Hello this is done by res.send()!!</h1>")
// })

app.use('/ok',(req,res)=>{
    res.send('<h1>Hello this is done by res.send</h1>');
})
app.listen(8080, function(){
    console.log('Server is running on port 8080')
});