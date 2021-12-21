const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

//Crear el servidor 
const app = express();

//Habilitar Cors
app.use(cors());

//Conectar a mongodb 
require('./database');

//Habilitar el body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Habilitar Routing 
app.use('/',routes());

//Puerto y arranca el servidor 
app.listen(4000, ()=>{
    console.log('El servidor Funcionando');
})