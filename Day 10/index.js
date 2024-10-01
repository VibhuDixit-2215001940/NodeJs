const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const {v4:uuid} = require('uuid');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));//middleware for form data in express
// app.use(express.json());//middleware for form data in JSON format

let arr = [
    {
        // id : 0
        id:uuid(),//returns an id i.e. a string
        username : "Vibhu",
        comment: "lelo podeena ahhh ahhh "
    },
    {
        // id : 1,
        id:uuid(),
        username : "Shivam",
        comment: "Aha tamatar bade majedaar "
    },{
        // id : 2,
        id:uuid(),
        username : "Madhav",
        comment: "Asla ham bhi rakhte hai pahalwaann "
    },{
        // id : 3,
        id:uuid(),
        username : "Vansh",
        comment: "Tum dono ki maaki u .... "
    },
]
//root
app.get('/',(req,res)=>{
    res.send('Saale blog page par ja ');
});
//Task-1 Display all the blogs!
app.get('/blog',(req,res)=>{
    res.render('index',{arr});
})
//Task -2 Create a form to create a blog
app.get('/blog/new',(req,res)=>{
    res.render('new');//jab aap render karte ho toh . na dena padta kyunki usme path default pata hai
});

//Task -3 actually add blog in db
app.post('/blog',(req,res)=>{
    let {username,comment} = req.body;
    let newBlog = {
        id : uuid,
        username,
        comment
    }
    arr.push(newBlog);
    res.redirect('/blog');
});

//Task -4 Show a single blog
app.get('/blog/:id',(req,res)=>{
    let {id} = req.params;
    let blog = arr.find(b=>b.id == id);
    if(!blog){
        return res.send('Blog not found');
    }
    res.render('show',{blog});
});
//Task -5 show edit form
app.get('/blog/:id/edit',(req,res)=>{
    let {id} = req.params;
    let foundcomment = arr.find(b=>b.id == id);
    res.render('edit',{foundcomment})
});
// Task 6 Actually editting the blog
app.patch('/blog/:id',(req,res)=>{
    let {id} = req.params;
    let {username,comment} = req.body;
    let foundcomment = arr.find(b=>b.id == id);
    if(!foundcomment){
        return res.send('Blog not found');
    }
    foundcomment.username = username;
    foundcomment.comment = comment;
    res.redirect('/blog');
}); 
//Task 7 - delete the blog

app.delete('/blog/:id', (req, res) => {
    let { id } = req.params;
    arr = arr.filter(b => b.id != id);
    res.redirect('/blog');
});

app.listen(8000,()=>{
    console.log('listening on 8000');
});