const { response } = require('express');
const express = require('express');
const { remove } = require('../models/User');
const router = express.Router();
const User = require('../models/User')




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



//POST (Insert)
//E: User
//S: User sin password
router.post('/', async(req, res) => {

    try {
        const findUser = await User.findOne({ username: req.body.username });
        if (findUser == null) {
            const user = new User({
                username: req.body.username,
                password: req.body.password,
                type: req.body.type

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