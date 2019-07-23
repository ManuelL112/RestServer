require("./config/config")
const express = require('express')
    // Using Node.js `require()`
const mongoose = require('mongoose');


const app = express()
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function(req, res) {
    res.json('get Usuario')
})

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre == undefined && body.edad == undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El monbre y edad es necesario'
        })
    } else if (body.nombre == undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El monbre es necesario'
        })

    } else if (body.edad == undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'La edad es necesaria'
        })
    } else {
        res.json({
            Persona: body
        })
    }

    res.json(
        body
    )
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

mongoose.connect('mongodb://localhost:27017/cafe', { useNewUrlParser: true });


app.listen(process.env.PORT, () => {
    console.log(`Escuchando peticiones en el puerto ${process.env.PORT}`)
})