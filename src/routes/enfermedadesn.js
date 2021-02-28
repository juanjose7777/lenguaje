const express = require('express');
const router = express.Router();

const Task = require('../models/task');


router.post('/adden', async (req, res)=>{
    const task = new Task(req.body);
    await task.save();
    res.redirect('/enfermedadesn');
});

router.get('/actua/:id', async (req, res) =>{
    const { id } = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/');
});

router.get('/editaren/:id', async (req,res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.render('./editarenfn', {
        tasks:task
    });
});
//edit formulario
router.post('/editaren/:id', async (req, res)=> {
const { id } = req.params;
   await Task.updateOne({_id: id}, req.body);
   res.redirect('/enfermedadesn');
});


router.get('/deleteen/:id', async (req, res) => {
    const { id } = req.params;
    await Task.remove({_id: id});
    res.redirect('/enfermedadesn');

});



module.exports = router;