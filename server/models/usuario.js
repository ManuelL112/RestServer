const mongoose = require('mongoose')

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es nesesario']
    },
    email: {
        type: String,
        required: [true, 'El email es nesesario']
    },
    password: {
        type: String,
        required: [true, 'El contraseña es nesesario']
    },
    img: {
        type: String,
        required: [false, 'La imagen no es nesesario']
    },
    role: {
        default: 'USER_ROLE'
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model('Usuario', usuarioSchema);