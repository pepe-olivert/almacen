const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema ({

    user : {type : String, unique: true, required: true,maxlength:50},
    hash: { type: String, required: true },
    perfil: { type: String, default: 'Usuario' }
}, {timestamps: true});