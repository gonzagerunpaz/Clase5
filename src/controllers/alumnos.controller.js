
const alumnos = require('../../data/alumnos.json')

const alumnosController =  ( _ , res )=>{
    res.status(200).json( alumnos )
}

const alumnoByDniController = ( req, res) => {
    const dni = req.params.dni
    const alumno = alumnos.find( a => a.dni == dni)
    if(alumno)
        res.status(200).json(alumno)
    else 
        res.status(404).json({mensaje : `El alumno con dni ${dni} no existe`})
}

const deleteAlumnoByDniController  = ( req, res) => {
    const dni = req.params.dni
    const indice = alumnos.findIndex( a => a.dni == dni)
    if(indice >= 0) {
        alumnos.splice(indice, 1)
        res.status(200).json({mensaje: `El alumno con dni ${dni} fue borrado exitosamente`})
    } else 
        res.status(404).json({mensaje : `El alumno con dni ${dni} no existe.`})
}


module.exports = { alumnosController, alumnoByDniController, deleteAlumnoByDniController }
