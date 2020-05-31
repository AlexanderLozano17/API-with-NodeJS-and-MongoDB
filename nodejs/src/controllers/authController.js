const user = require('../models/PersonModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userCtr = {};


userCtr.registerCount = (req, res) => {
    const { headerToken } = req.body.token;
    // verify exist token
    if (headerToken) {
        const token = headerToken.split(" ");
        const newUser = {
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
            token: token
          }
    } else {
        res.json({
            status: '', 
            message: ''
        });
    }


    
};


userCtr.login = (req, res) => {
    res.send('login');
};


userCtr.setPassword = (req, res) => {
    res.send('setear contraseña');
};


userCtr.protectApi = (req, res) => {
    res.send('Api protejidas');
};

module.exports = userCtr;