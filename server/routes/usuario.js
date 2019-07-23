const express = require('express');


const app = express();
const Usuario = require('../models/usuario');

app.get('/usuario', function(req, res) {
    res.json('get Usuario')
})

app.post('/usuario', function(req, res) {

    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre
    })

    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            usuarioDB
        })
    })



})

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    })
})

app.delete('/usuario', function(req, res) {
    res.json('get Usuario')
})

module.exports = app;