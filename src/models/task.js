const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskScheme = new Schema({
    medicamento: String,
    clasificacion: String,
    via: String,
    
    medicamentona: String,
    clasificacionna: String,
    viana: String,
    vida: String,

    usuario: String,
    cedula: String,
    apellidos: String,
    pregunta: String,

    nombres:String,
    numerocel:String,
    apellido:String,
    correo:String,
    problemassalud:String,

    nombrebac: String,
    familia: String,
    nombrecientifico:String,
    ataca:String,

    nombrebeg: String,
    familia: String,
    nombrecientifico:String,
    ataca:String,

    nombrehierva: String,
    familiahierva: String,
    ofrece: String,

    nombrevirus: String,
    familiavirus: String,
    nombrecientifico:String,
    ataca:String,
    concecuencia:String,

    nombreenfermedad: String,
    causante: String,
    contagioso:String,
    queataca:String,
    comoevitar:String,


    editar: {
        type: Boolean,
        default: false
    }
});


module.exports = mongoose.model('tasks',TaskScheme);