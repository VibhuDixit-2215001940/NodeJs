const express = require('express')
const app = express()

// app.get('/r/:subreddit',(req,res)=>{
//     // console.log(req.params);
//     let {subreddit} = req.params;
//     res.send(`Hello from /r/${subreddit}`)
// })
app.get('/ok',(req,res)=>{
    console.log(req.query);
    console.log(req.query.search);
    let {search} = req.query
    // res.send(search);//req.send(req.query.search) .....value
    res.send(req.query)//whole pair
})
app.listen(8000, ()=>{
    console.log("Server is running on port 8000")
})