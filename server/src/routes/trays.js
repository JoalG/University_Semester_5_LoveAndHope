const { response } = require('express');
const express = require('express');
const { remove } = require('../models/Tray');
const router = express.Router();
const Product = require('../models/Tray');
const crypto = require('crypto');




//GET 
//E: 
//S: Todos los form
router.get('/', async(req, res) => {
    try {
        const tray = await Tray.find();
        res.json(tray);
    } catch (error) {
        res.status(401).send('Ha ocurrido un error.');
    }

});



//GET de un user en especifico
//E: id
//S: Form sin password
router.get('/_id', async(req, res) => {
    try {
        const tray = await Tray.findOne({ _id: req.params._id });
        console.log(tray);
        res.json(tray);
    } catch (error) {
        res.status(401).send('Ha ocurrido un error.');
    }

});


//DELETE de un user
//E: username
//S: User 
router.delete('/', async(req, res) => {
    try {
        const findTray = await Tray.findOne({ _id: req.body._id });
        if (findTray != null) {
            const removerTay = await Order.findOneAndRemove({ _id: findTray._id });
            res.json(removeTray);
        } else {
            res.status(401).send('Error. Este username no está en la base de datos');
        }

    } catch (error) {
        res.status(401).send('Ha ocurrido un error.');
    }

});


/* //PATCH (Update)
//E: {username,user}
//S: El user actualizado sin password
router.patch('/', async(req, res) => {
    try {
        findUser = await User.findOne({ username: req.body.username });
        findNewUser = await User.findOne({ username: req.body.user.username });

        if (findUser != null && ((req.body.username == req.body.user.username) || (findNewUser == null))) {
            const updatedUser = await User.update({ _id: findUser._id }, req.body.user);
            findUser = await User.findOne({ username: req.body.user.username }, { password: 0 });

            res.json(findUser);
        } else {
            res.status(401).send('Error. Este username no está en la base de datos');
        }

    } catch (error) {
        res.status(401).send('Ha ocurrido un error.');
    }

}); */


//POST (Insert)
//E: User
//S: User sin password
router.post('/', async(req, res) => {

    try {

        const tray = new Tray({
            name: req.body.name,
            occasion: req.body.occasion,
            price: req.body.price,
            img: req.body.img,
            products: req.body.products
        });

        console.log(tray);

        await tray.save(function(err) {
            if (err) {
                res.status(401).send('Ha ocurrido un error 1.');
            } else {
                saveTray = tray.toObject();
                res.json(saveTray);
            }
        }); //metodo de mongoose para guardar 

    } catch {
        res.status(401).send('Ha ocurrido un error 3.');
    }

});