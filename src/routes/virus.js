const express = require('express');
const router = express.Router();

const Task = require('../models/task');


router.post('/addv', async (req, res)=>{
    const task = new Task(req.body);
    await task.save();
    res.redirect('/virus');
});

router.get('/actua/:id', async (req, res) =>{
    const { id } = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/');
});

router.get('/editarv/:id', async (req,res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.render('./editarvirus', {
        tasks:task
    });
});
//edit formulario
router.post('/editarv/:id', async (req, res)=> {
const { id } = req.params;
   await Task.updateOne({_id: id}, req.body);
   res.redirect('/virus');
});


router.get('/deletev/:id', async (req, res) => {
    const { id } = req.params;
    await Task.remove({_id: id});
    res.redirect('/virus');

});



module.exports = router;