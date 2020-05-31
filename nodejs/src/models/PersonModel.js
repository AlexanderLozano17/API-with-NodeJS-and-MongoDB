const mongoose = require('mongoose');
const { Schema } = mongoose;

const PersonSchema = Schema ({
    usuario_id:             { type: String, require: true},
    codigo_estudiantil:     { type: String, require: true, unique: true },
    correo_estudiantil:     { type: String, require: true, unique: true },
    tipo_documento:         { type: String, require: true },
    num_documento:          { type: String, require: true, unique: true, trim:true },
    nombre:                 { type: String, require: true },
    genero:                 { type: String, require: true, trim:true},
    telefono:               { type: String, require: false, trim:true },
    celular:                { type: String, require: true, trim:true },
    sede_universitaria:     { type: String, require: true },
    facultad:               { type: String, require: true },
    programa_universitario: { type: String, require: true },
    estado_estudiantil:     { type: String, require: true },
    semestre_actual:        { type: String, require: true, trim:true  },
    promedio_carrera:       { type: String, require: true, trim:true },
    role_id:                { type: String, require: true },
    role:                   { type: String, require: true }
},
{
    timestamps: true
});

module.exports = mongoose.model('persona', PersonSchema);