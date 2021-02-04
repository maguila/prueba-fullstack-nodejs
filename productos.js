const connection = require('./connections');
const fetch = require('node-fetch');
const { on } = require('process');


const mongoose = require('mongoose');
const { Schema } = mongoose;
const mySchema = new Schema({}, {strict: false});


const productoMyModel  = mongoose.model('products', mySchema); 


/*
productoMyModel.find(function(err, productos){
    if (err) return console.error(err);

    console.log(productos);
});
*/


/*
productoMyModel.find({id:158},function(err, productos){
    if (err) return console.error(err);

    productos.forEach(function(obj){
        obj.set('precioDescontado', obj.get('price')*0.5 );
        console.log(obj);
    });    

});
*/



productoMyModel.find({brand: { $regex: 'dsa' } },function(err, productos){
    if (err) return console.error(err);

    productos.forEach(function(obj){

        const esPalindromo = true;

        if(esPalindromo)        
            obj.set('precioDescontado', obj.get('price')*0.5 );

            
        console.log(obj);
    });    

});



/*
productoMyModel.find({price : {$gte:595572}},function(err, productos){
    if (err) return console.error(err);


    productos.forEach(function(obj){
        obj.set('precioDescontado', obj.get('price')*0.5 );
        console.log(obj);
    });


    //console.log(productos);
});

*/




/*

productoMyModel.find().cursor().map(function(doc){
    return doc;
}).
on('data', function(doc){

    console.log(doc);

});

*/