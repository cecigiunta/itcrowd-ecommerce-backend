module.exports = {

    getAll: function (req, res, next) {
        const products = [{
            id: 1,
            name: 'Producto 1',
            description: 'First description',
            price: 100,
            image_url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
        },
        {
            id: 2,
            name: 'Producto 2',
            description: 'Second description',
            price: 100,
            image_url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
        },
    ];
        console.log(res.json(products));
        res.json(products);
    },

    getById: function (req, res, next) {
        console.log(req.params);
        const producto = {
            id: 1,
            nombre: 'Producto 1',
            precio: 100
        }
        res.json(producto)
    },

    create: function (req, res, next) {
        console.log(req.body);
        res.json(req.body)
    },
    
    update: function (req, res, next) {
        console.log(req.params.id, req.body);
        res.json(req.body)
    },

    delete: function (req, res, next) {
        console.log(req.params);
        const producto = {
            id: 1,
            nombre: 'Producto 1',
            precio: 100
        }
        res.json(producto)
    }


}