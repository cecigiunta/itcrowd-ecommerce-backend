const mongoose = require("../bin/mongodb");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLenght: 3,       
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    //QUANTIY: {
    //    type: Number,
    //    required: true
    //},
    image_url: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("products", productSchema);