const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    formId: {
        type: String,
        required: true
    },
    selected_products: {
        type: [String],
        required: true
    },
    address: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Order', OrderSchema);