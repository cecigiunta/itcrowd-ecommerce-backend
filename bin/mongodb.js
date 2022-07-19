var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/itcrowd-ecommerce' , { useNewUrlParser: true }, function(error){
    if(error){
        throw error;
    }else{
        console.log('Conectado a Mongo DB');
    }
});

module.exports = mongoose;