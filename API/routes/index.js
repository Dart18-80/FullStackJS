const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers.js');

module.exports = function(){
    //Agregar nuevos Pacientes via POST
    router.post('/pacientes', 
        pacienteController.nuevoCliente
    );

    //Obtiene todos los registros de pacientes en la DB
    router.get('/pacientes',
        pacienteController.obtenerPacientes
    );

    //Obtiene un paciente en especifico
    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    );

    //Actualizar un registro con un ID especifico
    router.put('/pacientes/:id',
        pacienteController.actualizarPaciente
    );

    //Elimina un paciente por su id
    router.delete('/pacientes/:id',
        pacienteController.eliminarPaciente
    );

    return router;
}