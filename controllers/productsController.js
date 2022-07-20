const productsModel = require('../models/productsModel');

module.exports = {

    getAll: async function (req, res, next) {
        try{
            const documents = await productsModel.find() 
            res.status(200).json(documents);
        } catch(error){
            next(error);
        }
    },

    getById: async function (req, res, next) {
        try{
            const documents = await productsModel.findById(req.params.id) 
            res.status(200).json(documents);
        }catch(error){
            next(error);
        }
    },

    create: async function (req, res, next) {
        try {
            const product = new productsModel({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image_url: req.body.image_url
            });
            const document = await product.save()  //guarda en BBDD
            res.json(document)
        } catch (error) {
            console.log(error);
            res.json({ message: 'Error al crear el producto' })
        }        
    },

    update: async function (req, res, next) {
        console.log(req.params.id, req.body);
        try {
            const document = await productsModel.updateOne({_id: req.params.id}, req.body)
            res.json(document)
        } catch (error) {
            next(error)
            console.log(error);
        }
        
    },

    delete: async function (req, res, next) {
        console.log(req.params);
        try {
            const document = await productsModel.deleteOne({_id: req.params.id})
            res.json(document)
        } catch (error) {
            next(error)
            console.log(error);
        }
    }
}