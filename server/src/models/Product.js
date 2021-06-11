const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    supplier: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', ProductSchema);