const mongoose = require('mongoose');
const { Schema } = mongoose; 


const userSchema = new Schema ({
    
    email:      { type: String, require: true, unique: true },
    password:   { type: String, require: true, trim: true },
    token:      { type: String, require: true },
}, 
{
    timestamps: true
});

module.exports = mongoose.model('usuarios', userSchema);