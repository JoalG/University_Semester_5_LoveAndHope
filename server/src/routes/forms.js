const { response } = require('express');
const express = require('express');
const { remove } = require('../models/Form');
const router = express.Router();
const Form = require('../models/Form')
const crypto = require('crypto');





//GET 
//E: 
//S: Todos los form
router.get('/', async(req, res) => {
    try {
        const form = await Form.find();
        res.json(form);
    } catch (error) {
        res.status(401).send('Ha ocurrido un error.');
    }

});



//GET de un user en especifico
//E: id
//S: Form sin password
router.get('/_id', async(req, res) => {
    try {
        const form = await User.findOne({ _id: req.params.id });
        console.log(form);
        res.json(form);
    } catch (error) {
        res.status(401).send('Ha ocurrido un error.');
    }

});


//DELETE de un user
//E: username
//S: User 
router.delete('/', async(req, res) => {
    try {
        const findForm = await Form.findOne({ _id: req.body._id });
        if (findForm != null) {
            const removeForm = await Form.findOneAndRemove({ _id: findForm._id });
            res.json(removeForm);
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

        const form = new Form({
            receiver_name: req.body.receiver_name,
            color: req.body.color,
            age: req.body.age,
            tv_show: req.body.tv_show,
            sports: req.body.sports,
            movies: req.body.movies,
            music: req.body.music,
            profession: req.body.profession
        });

        console.log(form);

        await form.save(function(err) {
            if (err) {
                res.status(401).send('Ha ocurrido un error 1.');
            } else {
                saveForm = form.toObject();
                res.json(saveForm);
            }
        }); //metodo de mongoose para guardar 

    } catch {
        res.status(401).send('Ha ocurrido un error 3.');
    }

});


module.exports = router;