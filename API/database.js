const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/veterinaria',{
    useNewUrlParser: true,
}).then(db => console.log('Db esta conectada'))
    .catch(err => console.error(err));