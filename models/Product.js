const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
        minlength: [3, 'Minimum name length is 6 characters'],
        maxlength: 50,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    price: {
        type: Number,
        required: true,
        min: 10000
    }
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;