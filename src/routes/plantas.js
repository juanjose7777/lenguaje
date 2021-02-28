const express = require('express');
const router = express.Router();

const Task = require('../models/task');


router.post('/addpl', async (req, res)=>{
    const task = new Task(req.body);
    await task.save();
    res.redirect('/plantas');
});

router.get('/actua/:id', async (req, res) =>{
    const { id } = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/');
});

router.get('/editarpl/:id', async (req,res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.render('./editarplantas', {
        tasks:task
    });
});
//edit formulario
router.post('/editarpl/:id', async (req, res)=> {
const { id } = req.params;
   await Task.updateOne({_id: id}, req.body);
   res.redirect('/plantas');
});


router.get('/deletepl/:id', async (req, res) => {
    const { id } = req.params;
    await Task.remove({_id: id});
    res.redirect('/plantas');

});



module.exports = router;