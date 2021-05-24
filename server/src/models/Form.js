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
        type: String,
        required: true
    },
    tv_show: {
        type: String,
        required: true
    },
    sports: {
        type: String,
        required: true
    },
    movies: {
        type: String,
        required: true
    },
    music: {
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