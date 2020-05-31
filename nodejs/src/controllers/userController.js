const User = require('../models/PersonModel');
const UserCtrl = {};
const methodLocal = {};


UserCtrl.getUsers = async (req, res) => {
    const user = await User.find();
    
    if (user) {
        res.json(user);
    } else {
        res.json({
            user: [],
            status: 'No se encontraron resultados!'
        });
    }
};

UserCtrl.createUsers = async (req, res) => {
    const user = new User(req.body);
    await user.save(); 
    res.json({status: 'Usuario creado con éxito!'});
};


UserCtrl.getUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    
    if (user) {
        res.json(user);
    } else {
        res.json({
            user: [],
            status: 'No se encontraron resultados!'
        });
    }
    
};

UserCtrl.updateUser = async (req, res) => {
    const { id } = req.params;
    const user = methodLocal.setObjectUser(req.body);
    const userUdate = await User.findByIdAndUpdate(id, {$set: user}, {new: true});

    if (userUdate) {
        res.json({status: 'Datos actualizados con éxito!'});
    } else {
        res.json({status: 'No se ha logrado realizar la solicitud!'});
    }
    
};

UserCtrl.deleteUser = async (req, res) => {
    const { id } = req.params;
    const userDelete = await User.findByIdAndRemove(id);
    
    if (userDelete) {
        res.json({status: 'Dato eliminado con éxito!'});
    } else {
        res.json({status: 'No se ha logrado realizar la solicitud!'});
    }
};

// set data 
methodLocal.setObjectUser = (reqUser) => {
    var user = {
        nombres:                reqUser.nombres,
        apellidos:              reqUser.apellidos,
        password:               reqUser.password,
        email:                  reqUser.email,
        telefono:               reqUser.telefono,
        celular:                reqUser.celular,
        tipo_usuario:           reqUser.tipo_usuario,
        tipo_id:                reqUser.tipo_usuario,
        num_documento:          reqUser.num_documento,
        genero:                 reqUser.genero,
        codigo_universitario:   reqUser.codigo_universitario,
        sede_universitaria:     reqUser.sede_universitaria,
        facultad:               reqUser.facultad,
        programa_universitario: reqUser.programa_universitario,
        estado:                 reqUser.estado,
        role:                   reqUser.role
    }
    return user;
}

module.exports = UserCtrl;