const express = require('express');
const app = express();

// app.use('/a',(req,res)=>{
//     res.send("<h1>Hello /a  </h1>")
// })
// app.use('/b',(req,res)=>{
//     res.send("<h1>Hello /b  </h1>")
// })
// app.use('/c',(req,res)=>{
//     res.send("<h1>Hello /c</h1>")
// })
// app.use('*',(req,res)=>{
//     res.send("<h1> abbe saale</h1>")
// })

app.get('/r/:subreddit',(req,res)=>{
    console.log(req.params);
    let {subreddit} = req.params;
    res.send(`Hello from /r/${subreddit}`)
})
app.listen(8000, ()=>{
    console.log("Server is running on port 8000")
})