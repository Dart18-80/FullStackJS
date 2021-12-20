//Cuando se crea un nuevo cliente 
exports.nuevoCliente = (req, res, next) =>{
    //Todo: insertar en la base de datos
    

    res.json({mensaje: 'El cliente se agrego correctamente'});
}