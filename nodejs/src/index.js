const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Initiliazations
const app = express();
const { mongoose } = require('./config/database');


// Settings
app.set('port',  process.env.PORT || 3000);


// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));


// Global Variables



// Routes
app.use('/api/auth', require('./routes/authRouter'))
app.use('/api/notification', require('./routes/notificationRouter')); 
app.use('/api/user', require('./routes/userRouter'))
app.use('/api/usco', require('./routes/apiSimulateRoutes'))


// Static Files (css)



// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server worker on port ' + app.get('port'));
});