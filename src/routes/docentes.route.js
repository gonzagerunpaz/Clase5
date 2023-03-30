const express = require('express')

const route = express.Router()

route.get('/docentes', ( req, res)=> {
    res.status(200).json({mensaje: "Lo doncentes no esta implementado aun"})
})

module.exports = {docentesRuta:  route }