var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');

/* Devuelve TODOS los productos */
router.get('/', productsController.getAll);

/* Devuelve un producto por ID */
router.get('/:id', productsController.getById);

/*Crear un producto*/
router.post('/', productsController.create);

/*Actualizar productos*/ 
router.put('/:id', productsController.update);

/*Eliminar productos*/
router.delete('/:id', productsController.delete);

module.exports = router;
