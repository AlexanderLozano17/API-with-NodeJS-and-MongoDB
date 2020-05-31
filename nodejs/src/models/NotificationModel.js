const mongoose = require('mongoose');
const { Schema } = mongoose;

const notificationSchema = new Schema ({
    destinatario_id:        { type: String, require: true },
    nombres_destinatario:   { type: String, require: true },
    apellidos_destinatario: { type: String, require: true },
    codigo_destinatario:    { type: String, require: true },
    email_destinatario:     { type: String, require: true },
    usuario_remitente_id:   { type: String, require: true },
    usuario_remitente:      { type: String, require: true },
    asunto:                 { type: String, require: true },
    mensaje:                { type: String, require: true },
    tipo_notificacion:      { type: String, require: true },
    estado_notificacion:    { type: String, require: true },
    nivel_notificacion:     { type: String, require: true },
    tipo_destinatario:      { type: String, require: true },
},
{
    timestamps: true
});


module.exports = mongoose.model('notificaciones', notificationSchema);