const mongoose = require("../bin/mongodb");

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image_url: String
});