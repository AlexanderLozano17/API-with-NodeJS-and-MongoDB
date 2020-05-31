// Generate connection development or producction 
enviromentCtrl = {};

enviromentCtrl.enviromentsDataBaseRemote = {
    'mongoDB': 'bpusDB',
    'userDB': 'bpus',
    'passwordDB': 'bpus123456',
};

enviromentCtrl.enviromentsDataBaseLocal = {
    'server': 'localhost',
    'mongoDB': 'bpusDB',
    'userDB': '',
    'passwordDB': '',
};

enviromentCtrl.enviromentsDataEmail = {
    'MAIL_DRIVE': 'smtp',
    'MAIL_HOST': 'smtp-mail.outlook.com',
    'MAIL_FROM_ADDRESS': 'alexanderlozano950@outlook.com',
    'MAIL_PASSWORD': 'Lex.1102',
    'MAIL_FROM_NAME': 'BPUS',
    'PORT': 587,
};

enviromentCtrl.getConnection = (flat) => {
    let dataConnection = {};
    dataConnection.url = 'mongodb://' + enviromentCtrl.enviromentsDataBaseLocal.server + '/' + enviromentCtrl.enviromentsDataBaseLocal.mongoDB;
    dataConnection.messageConnection = 'DB is connected mongoDB Localhost';
    if (flat == 'prod') {
        dataConnection.url ='mongodb+srv://' + enviromentCtrl.enviromentsDataBaseRemote.userDB +':'+ enviromentCtrl.enviromentsDataBaseRemote.passwordDB + '@cluster0-mulwb.mongodb.net/' + enviromentCtrl.enviromentsDataBaseRemote.mongoDB + '?retryWrites=true&w=majority';
        dataConnection.messageConnection = 'DB is connected mongoDB cluster';
    }
    return dataConnection;
};


module.exports = enviromentCtrl;