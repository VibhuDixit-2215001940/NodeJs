const express = require('express');
const router = express.Router();
const Person = require('../models/Person')

router.get('/person',async (req,res)=>{
    const persons = await Person.find({});
    res.render('Person/index.ejs',{persons})
})
router.get('/person/:id',async (req,res)=>{
    const persons = await Person.findById(req.params.id);
    if(!persons){
        return res.status(404).send('Person not found')
    }
    res.render('Person/show.ejs',{persons})
})
router.get('/create',(req,res)=>{
    res.render('Person/create.ejs')
})
router.get('/person/:id/edit', async (req, res) => {
    const person = await Person.findById(req.params.id);
    if (!person) {
        return res.status(404).send('Person not found');
    }
    res.render('Person/edit.ejs', { person });
});
router.post('/person/:id/edit', async (req, res) => {
    const { age, email, DOB } = req.body;
    const person = await Person.findByIdAndUpdate(req.params.id, {age, email, DOB }, { new: true });
    if (!person) {
        return res.status(404).send('Person not found');
    }
    res.redirect(`/person/${person._id}`);
});
router.post('/create',async(req,res)=>{
    const {name,age,email,DOB} = req.body;
    const persons = new Person({name,age,email,DOB});
    await persons.save()
    res.redirect('/person')
})
router.post('/person/:id/delete',async(req,res)=>{
    const persons = await Person.findByIdAndDelete(req.params.id);
    res.redirect('/person')
    })
module.exports = router;