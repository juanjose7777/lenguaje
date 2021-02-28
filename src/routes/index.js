const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req, res) => {
    const task = await Task.find();
    res.render('index',{
        tasks: task
    });
});

router.get('/paginaprincipal', async (req, res) => {
    const task = await Task.find();
    res.render('paginaprincipal',{
        tasks: task
    });
});

router.get('/enfermedadesl', async (req, res) => {
    const task = await Task.find();
    res.render('enfermedadesl',{
        tasks: task
    });
});

router.get('/enfermedadesn', async (req, res) => {
    const task = await Task.find();
    res.render('enfermedadesn',{
        tasks: task
    });
});

router.get('/virus', async (req, res) => {
    const task = await Task.find();
    res.render('virus',{
        tasks: task
    });
});

router.get('/plantas', async (req, res) => {
    const task = await Task.find();
    res.render('plantas',{
        tasks: task
    });
});

router.get('/bacteriasbeg', async (req, res) => {
    const task = await Task.find();
    res.render('bacteriasbeg',{
        tasks: task
    });
});

router.get('/bacteriasnoc', async (req, res) => {
    const task = await Task.find();
    res.render('bacteriasnoc',{
        tasks: task
    });
});

router.get('/datos', async (req, res) => {
    const task = await Task.find();
    res.render('datos',{
        tasks: task
    });
});

router.get('/preguntas', async (req, res) => {
    const task = await Task.find();
    res.render('preguntas',{
        tasks: task
    });
});

router.get('/contenido', async (req, res) => {
    const task = await Task.find();
    res.render('contenido',{
        tasks: task
    });
});

router.get('/medicamentosna', async (req, res) => {
    const task = await Task.find();
    res.render('medicamentosna',{
        tasks: task
    });
});
//////////////////////index.ejs///////////////////////////

router.post('/add', async (req, res)=>{
    const task = new Task(req.body);
    await task.save();
    res.redirect('/');
});

router.get('/actua/:id', async (req, res) =>{
    const { id } = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/');
});

router.get('/editar/:id', async (req,res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.render('./editar', {
        tasks:task
    });
});
//edit formulario
router.post('/editar/:id', async (req, res)=> {
const { id } = req.params;
   await Task.updateOne({_id: id}, req.body);
   res.redirect('/');
});


router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Task.remove({_id: id});
    res.redirect('/');

});


module.exports = router;