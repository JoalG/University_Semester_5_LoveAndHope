const mongoose = require('mongoose');

const FormSquema = mongoose.Schema({
    receiver_name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    tv_show: {
        type: String,
        required: true
    },
    sport: {
        type: String,
        required: true
    },
    movie: {
        type: String,
        required: true
    },
    song: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Form', FormSquema);