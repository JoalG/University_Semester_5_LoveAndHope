const { response } = require('express');
const express = require('express');
const { remove } = require('../models/User');
const router = express.Router();
const User = require('../models/User')
const crypto = require('crypto')




//GET 
//E: 
//S: Todos los users 
router.get('/', async(req, res) => {
    try {
        const user = await User.find();

        res.json(user);
    } catch (error) {
        res.status(401).send('Ha ocurrido un error.');
    }

});



//GET 
//E: 
//S: Get List 
router.get('/list', async(req, res) => {
    try {
        const user = await User.find();
        resultado = []
        user.forEach(element => {
            resultado.push(element.username);
        });


        res.json(resultado);
    } catch (error) {
        res.status(401).send('Ha ocurrido un error.');
    }

});


//GET de un user en especifico
//E: username 
//S: User sin password
router.get('/:username', async(req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        console.log(user);
        res.json(user);
    } catch (error) {
        res.status(401).send('Ha ocurrido un error.');
    }

});




//DELETE de un user
//E: username
//S: User 
router.delete('/', async(req, res) => {
    try {
        const findUser = await User.findOne({ username: req.body.username });
        if (findUser != null) {
            const removeUser = await User.findOneAndRemove({ _id: findUser._id });
            res.json(removeUser);
        } else {
            res.status(401).send('Error. Este username no está en la base de datos');
        }

    } catch (error) {
        res.status(401).send('Ha ocurrido un error.');
    }

});




//POST (Insert)
//E: User
//S: User sin password
router.post('/', async(req, res) => {

    try {
        const findUser = await User.findOne({ username: req.body.username });
        if (findUser == null) {

            let salt = crypto.randomBytes(16).toString('hex');
            let hash = crypto.pbkdf2Sync(req.body.password, salt, 1000, 64, 'sha512').toString('hex');

            const user = new User({
                username: req.body.username,
                password: req.body.password,
                salt: salt,
                hash: hash

            });

            await user.save(function(err) {
                if (err) {
                    res.status(401).send('Ha ocurrido un error.');
                } else {
                    saveUser = user.toObject();
                    delete saveUser.password;
                    res.json(saveUser);
                }
            }); //metodo de mongoose para guardar 

        } else {
            res.status(401).send('Ha ocurrido un error.');
        }

    } catch {
        res.status(401).send('Ha ocurrido un error.');
    }


});



module.exports = router;