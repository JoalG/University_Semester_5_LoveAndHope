const { response } = require('express');
const express = require('express');
const { remove } = require('../models/Product');
const router = express.Router();
const Product = require('../models/Product');
const crypto = require('crypto');




//GET 
//E: 
//S: Todos los form
router.get('/', async(req, res) => {
    try {
        const product = await Product.find();
        res.json(product);
    } catch (error) {
        res.status(401).send('Ha ocurrido un error.');
    }

});



//GET de un user en especifico
//E: id
//S: Form sin password
router.get('/code', async(req, res) => {
    try {
        const product = await Product.findOne({ code: req.params.code });
        console.log(product);
        res.json(product);
    } catch (error) {
        res.status(401).send('Ha ocurrido un error.');
    }

});


//DELETE de un user
//E: username
//S: User 
router.delete('/', async(req, res) => {
    try {
        const findProduct = await Product.findOne({ code: req.body.code });
        if (findProduct != null) {
            const removeProduct = await Order.findOneAndRemove({ _id: findProduct._id });
            res.json(removeProduct);
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

        const product = new Product({
            name: req.body.name,
            supplier: req.body.supplier,
            type: req.body.type,
            detail: req.body.detail,
            amount: req.body.amount,
            price: req.body.price,
            img: req.body.img,
        });

        console.log(product);

        await product.save(function(err) {
            if (err) {
                res.status(401).send('Ha ocurrido un error 1.');
            } else {
                saveProduct = product.toObject();
                res.json(saveProduct);
            }
        }); //metodo de mongoose para guardar 

    } catch {
        res.status(401).send('Ha ocurrido un error 3.');
    }

});