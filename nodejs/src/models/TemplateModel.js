const mongoose = require('mongoose');
const { Schema } = mongoose;

const templateSchema = new Schema ({
    plantilla:          { type: String, require: true },
    tipo_plantilla:     { type: String, require: true },
    codigo:             { type: String, require: true, trim:true  },
    contenido:          { type: String, require: true },
    descripcion:        { type: String, require: true },
    estado:             { type: String, require: true },
    usuario_id:         { type: String, require: true },
    usuario:            { type: String, require: true },
},
{
    timestamps: true
});


module.exports = mongoose.model('Template', templateSchema);