const mongoose = require('mongoose');
const { Schema } = mongoose;


const typeTemplateSchema = new Schema ({
    plantillas:         { type: String, require: true },
    codigo:             { type: String, require: true },
    usuario_id:         { type: String, require: true },
    usuario:            { type: String, require: true },
    descripcion:        { type: String, require: true },
    estado:             { type: String, default: 'A' },
},
{
    timestamps: true
});

module.exports = mongoose.model('TypeTemplate', typeTemplateSchema);