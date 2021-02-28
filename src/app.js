const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();





mongoose.connect('mongodb://localhost/tecnicae', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


.then(db => console.log('BASE DE DATOS CONECTADA BRO') )
.catch(err => console.log(err));

//importar rutas
const medicamentosnaRoutes = require('./routes/medicamentosna');
const indexRoutes = require('./routes/index');
const preguntasRoutes = require('./routes/preguntas');
const datosRoutes = require('./routes/datos');
const bacteriasnocRoutes = require('./routes/bacteriasnoc');
const bacteriasbegRoutes = require('./routes/bacteriasbeg');
const plantasbegRoutes = require('./routes/plantas');
const virusbegRoutes = require('./routes/virus');
const enfermedadeslbegRoutes = require('./routes/enfermedadesl');
const enfermedadesnbegRoutes = require('./routes/enfermedadesn');







app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

app.set('view engine','ejs');




app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//rutas
app.use('/', indexRoutes);
app.use('/', medicamentosnaRoutes);
app.use('/', preguntasRoutes);
app.use('/', datosRoutes);
app.use('/', bacteriasnocRoutes);
app.use('/', bacteriasbegRoutes);
app.use('/', plantasbegRoutes);
app.use('/', virusbegRoutes);
app.use('/', enfermedadeslbegRoutes);
app.use('/', enfermedadesnbegRoutes);








app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});