const express = require('express');
const router = express.Router();

const Task = require('../models/task');


router.post('/addbg', async (req, res)=>{
    const task = new Task(req.body);
    await task.save();
    res.redirect('/bacteriasbeg');
});

router.get('/actua/:id', async (req, res) =>{
    const { id } = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/');
});

router.get('/editarbg/:id', async (req,res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.render('./editarbacb', {
        tasks:task
    });
});
//edit formulario
router.post('/editarbg/:id', async (req, res)=> {
const { id } = req.params;
   await Task.updateOne({_id: id}, req.body);
   res.redirect('/bacteriasbeg');
});


router.get('/deletebg/:id', async (req, res) => {
    const { id } = req.params;
    await Task.remove({_id: id});
    res.redirect('/bacteriasbeg');

});



module.exports = router;