const express = require('express');
const router = express.Router();

const Task = require('../models/task');


router.post('/adde', async (req, res)=>{
    const task = new Task(req.body);
    await task.save();
    res.redirect('/enfermedadesl');
});

router.get('/actua/:id', async (req, res) =>{
    const { id } = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/');
});

router.get('/editare/:id', async (req,res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.render('./editarenfl', {
        tasks:task
    });
});
//edit formulario
router.post('/editare/:id', async (req, res)=> {
const { id } = req.params;
   await Task.updateOne({_id: id}, req.body);
   res.redirect('/enfermedadesl');
});


router.get('/deletee/:id', async (req, res) => {
    const { id } = req.params;
    await Task.remove({_id: id});
    res.redirect('/enfermedadesl');

});



module.exports = router;