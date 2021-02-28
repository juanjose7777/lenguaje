const express = require('express');
const router = express.Router();

const Task = require('../models/task');


router.post('/addp', async (req, res)=>{
    const task = new Task(req.body);
    await task.save();
    res.redirect('/preguntas');
});

router.get('/actua/:id', async (req, res) =>{
    const { id } = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/');
});

router.get('/editarp/:id', async (req,res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.render('./editarpreguntas', {
        tasks:task
    });
});
//edit formulario
router.post('/editarp/:id', async (req, res)=> {
const { id } = req.params;
   await Task.updateOne({_id: id}, req.body);
   res.redirect('/preguntas');
});


router.get('/deletep/:id', async (req, res) => {
    const { id } = req.params;
    await Task.remove({_id: id});
    res.redirect('/preguntas');

});



module.exports = router;