const express = require('express');
const router = express.Router();

const Task = require('../models/task');


router.post('/addb', async (req, res)=>{
    const task = new Task(req.body);
    await task.save();
    res.redirect('/bacteriasnoc');
});

router.get('/actua/:id', async (req, res) =>{
    const { id } = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/');
});

router.get('/editarb/:id', async (req,res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.render('./editarbacnoc', {
        tasks:task
    });
});
//edit formulario
router.post('/editarb/:id', async (req, res)=> {
const { id } = req.params;
   await Task.updateOne({_id: id}, req.body);
   res.redirect('/bacteriasnoc');
});


router.get('/deleteb/:id', async (req, res) => {
    const { id } = req.params;
    await Task.remove({_id: id});
    res.redirect('/bacteriasnoc');

});



module.exports = router;