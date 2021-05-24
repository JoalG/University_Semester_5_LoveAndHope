const mongoose = require('mongoose');

const TraySchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    occasion: {
        type: String,
        required: true
    },
    price: {
        type: number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    products: {
        type: [String],
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Tray', TraySchema);