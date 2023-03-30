const express = require('express')
const { alumnosRuta } = require('./routes/alumnos.route')
const { docentesRuta } = require('./routes/docentes.route')

const app = express()
const PORT = process.env.PORT || 3000

app.use(alumnosRuta)
app.use(docentesRuta)

app.listen(PORT, ()=>{
    console.log(`App Lista, ${PORT} es el puerto de escucha.`);
})