const express = require('express');
const router = express.Router();

const Task = require('../models/task');


router.post('/addd', async (req, res)=>{
    const task = new Task(req.body);
    await task.save();
    res.redirect('/datos');
});

router.get('/actua/:id', async (req, res) =>{
    const { id } = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/');
});

router.get('/editard/:id', async (req,res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.render('./editardatos', {
        tasks:task
    });
});
//edit formulario
router.post('/editard/:id', async (req, res)=> {
const { id } = req.params;
   await Task.updateOne({_id: id}, req.body);
   res.redirect('/datos');
});


router.get('/deleted/:id', async (req, res) => {
    const { id } = req.params;
    await Task.remove({_id: id});
    res.redirect('/datos');

});



module.exports = router;