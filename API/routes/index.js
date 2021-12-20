const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers.js');

module.exports = function(){
    //Agregar nuevos Pacientes via POST
    router.post('/pacientes', 
        pacienteController.nuevoCliente
    )

    return router;
}