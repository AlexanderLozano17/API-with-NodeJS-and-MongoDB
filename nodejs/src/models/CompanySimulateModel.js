const mongoose = require('mongoose');
const { Schema } = mongoose;

const companySchema = Schema({
    tipo_documento: {type: String, require:true},
    nit:            {type: String, require:true, trim:true, unique: true},
    razon_social:   {type: String, require:true},
    email:          {type: String, require:true, trim:true, unique: true},
});

module.exports = mongoose.model('empresa', companySchema);