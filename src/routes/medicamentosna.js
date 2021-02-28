const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/addr', async (req, res) => {
    const task = await Task.find();
    res.render('medicamentosna',{
        tasks: task
    });
});

router.post('/addr', async (req, res)=>{
    const task = new Task(req.body);
    await task.save();
    res.redirect('/medicamentosna');
});

router.get('/actua/:id', async (req, res) =>{
    const { id } = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/');
});

router.get('/editarr/:id', async (req,res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.render('./editarmedna', {
        tasks:task
    });
});
//edit formulario
router.post('/editarr/:id', async (req, res)=> {
const { id } = req.params;
   await Task.updateOne({_id: id}, req.body);
   res.redirect('/medicamentosna');
});


router.get('/deleter/:id', async (req, res) => {
    const { id } = req.params;
    await Task.remove({_id: id});
    res.redirect('/medicamentosna');

});



module.exports = router;