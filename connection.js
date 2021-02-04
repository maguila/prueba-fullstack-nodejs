const mongoose = require('mongoose');

const uri      = 'mongodb://localhost/tradingDB';
const config   = { useNewUrlParser: true, useUnifiedTopology: true };
const db       = mongoose.connection;

mongoose.connect(uri,config).catch(err => console.log(er) );

db.on('open', function(){
    console.log('bienvenido ..' + uri)
})

db.on('error', err =>{
    console.log('error en la conexion...')
})

exports.mongoose = mongoose;

