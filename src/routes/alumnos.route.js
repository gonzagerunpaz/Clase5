const express = require('express')
const { alumnosController, alumnoByDniController, deleteAlumnoByDniController } = require('../controllers/alumnos.controller')

const router = express.Router()

router.get('/alumnos', alumnosController)
/*Paso el dni por path parameter */ 
router.get('/alumnos/:dni', alumnoByDniController)

router.delete('/alumnos/:dni', deleteAlumnoByDniController)

module.exports = { alumnosRuta: router }