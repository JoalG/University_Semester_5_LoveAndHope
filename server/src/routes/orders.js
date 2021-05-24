const { response } = require('express');
const express = require('express');
const { remove } = require('../models/Order');
const router = express.Router();
const Order = require('../models/Order')
const crypto = require('crypto');





//GET 
//E: 
//S: Todos los form
router.get('/', async(req, res) => {
    try {
        const order = await Order.find();
        res.json(order);
    } catch (error) {
        res.status(401).send('Ha ocurrido un error.');
    }

});



//GET de un user en especifico
//E: id
//S: Form sin password
router.get('/_id', async(req, res) => {
    try {
        const order = await Order.findOne({ _id: req.params.id });
        console.log(order);
        res.json(order);
    } catch (error) {
        res.status(401).send('Ha ocurrido un error.');
    }

});


//DELETE de un user
//E: username
//S: User 
router.delete('/', async(req, res) => {
    try {
        const findOrder = await Order.findOne({ _id: req.body._id });
        if (findOrder != null) {
            const removeOrder = await Order.findOneAndRemove({ _id: findOrder._id });
            res.json(removeOrder);
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

        const order = new Order({
            username: req.body.username,
            formId: req.body.formId,
            selected_products: req.body.selected_products,
            address: req.body.address,
            date: req.body.date,
            phone_number: req.body.phone_number,
            price: req.body.price,
            state: req.body.state
        });

        console.log(order);

        await order.save(function(err) {
            if (err) {
                res.status(401).send('Ha ocurrido un error 1.');
            } else {
                saveOrder = order.toObject();
                res.json(saveOrder);
            }
        }); //metodo de mongoose para guardar 

    } catch {
        res.status(401).send('Ha ocurrido un error 3.');
    }

});