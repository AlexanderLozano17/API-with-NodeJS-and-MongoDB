const  Notification = require('../models/notificationModel');
const Mailer = require('./emailController');
const NotificationCtrl = {};
const methodLocal = {};


NotificationCtrl.getNotifications = async (req, res) => {
   const notification = await Notification.find();
   res.json(notification);
};

/*
NotificationCtrl.createNotification = async (req, res) => {    
   const notification = new Notification(req.body);
    await notification.save();
    res.json({status: 'notificación creada con éxito!'});
    console.log(req.body);
};
*/
/*
NotificationCtrl.createNotification = async (req, res) => {    
    const notification = new Notification(req.body);
    await notification.save(function(err) {
        if(err){
            res.json({statusNotification: 'Ocurrio un error al crear la notificación!'});
        } else {
            // Send email
           let response = Mailer.sendMail(req.body);
           res.json({status: 'notificación creada con éxito!'});
        }
    });     
 };
*/
// modificada para emails
NotificationCtrl.createNotification = async (req, res) => {    
    const notification = new Notification(req.body);
    // Send email
    let response = Mailer.sendMail(req.body);
    await notification.save();
     res.json({status: 'notificación creada con éxito!'});
 };


NotificationCtrl.getNotification = async (req, res) => {
    const notification = await Notification.findById(req.params.id);
    res.json(notification);
};


NotificationCtrl.updateNotification = async (req, res) => {
    const { id } = req.params;
    const dataNotification = methodLocal.setObjectNotification(req.body);
    const notification = await Notification.findByIdAndUpdate(id, {$set: dataNotification}, {new: true});
    console.log(notification._id);
    res.json({status: 'Notificación Actualizada con éxito!' });
};


NotificationCtrl.deleteNotification = async (req, res) => {
    await Notification.findByIdAndRemove(req.params.id);
    res.json({status: 'Eliminado con éxito!'});
};


NotificationCtrl.sendNotification = async (req, res) => {
    res.json({name: 'Alexander'});
};


NotificationCtrl.canceldNotification = async (req, res) => {
    res.json({name: 'Alexander'});
};

// set data 
methodLocal.setObjectNotification = (reqNotification) => {
    var notification = {
        destinatario_id:        reqNotification.destinatario_id,
        nombres_destinatario:   reqNotification.nombres_destinatario,
        apellidos_destinatario: reqNotification.apellidos_destinatario,
        codigo_destinatario:    reqNotification.codigo_destinatario,
        email_destinatario:     reqNotification.email_destinatario,
        usuario_remitente_id:   reqNotification.usuario_remitente_id,
        usuario_remitente:      reqNotification.usuario_remitente,
        asunto:                 reqNotification.asunto,
        mensaje:                reqNotification.mensaje,
        tipo_notificacion:      reqNotification.tipo_notificacion,
        estado_notificacion:    reqNotification.estado_notificacion,
        nivel_notificacion:     reqNotification.nivel_notificacion,
        tipo_destinatario:      reqNotification.tipo_destinatario,
        fecha_creado:           reqNotification.fecha_creado,
        fecha_actualizado:      reqNotification.fecha_actualizado,
        fecha_programado:       reqNotification.fecha_programado,
        fecha_ejecutado:        reqNotification.fecha_ejecutado,
    }
    return notification;
}

module.exports = NotificationCtrl;