const mongoose = require('mongoose');
var crypto = require('crypto');
const jwt = require('jsonwebtoken');


const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    e_mail: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

UserSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

UserSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      _id: this._id,
      e_mail: this.e_mail,
      name: this.name,
      phone_number: this.phone_number,
      username: this.username,
      exp: parseInt(expiry.getTime() / 1000),
    }, "secretkey"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

user = {
    "_id": "60aaefe9abe1393860f2d0cb",
    "username": "JoalG",
    "salt": "433a153e8304f6ef9bfa7f7c48d9eb5b",
    "hash": "084b0b5274cd398dea2df1c46f0f5c2e67738bc19109c2142cdf31ad3f600863724071907c2339d494f70870eb9583586cf364c53350d6733ef5b0f403291ca5",
    "name": "Jose Gamboa",
    "e_mail": "joalgamro2010@gmail.com",
    "phone_number": "61322699",
    "createdDate": "2021-05-24T00:14:34.086Z",
    "__v": 0
}



module.exports = mongoose.model('User', UserSchema);