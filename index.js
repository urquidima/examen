//importamos las dependencias
const express= require('express')
const hbs =require ('hbs')
const mongoose =require('mongoose')
//creamos una constante para el valor de puerto
const PUERTO = process.env.PORT || 3000

//emplear nuestras rutas
let pintoresRouter = require('./routes/pintor')

//sitio web y hbs
const app= express()
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname+ '/views/partials')
app.use(express.static(__dirname+'/public'))

//vamos a decirle a express la ruta a emplear
app.use('/', pintoresRouter)

/*la conexion con mongodb*/
mongoose.Promise= global.Promise
const cadena='mongodb+srv://emelyurquidi:123123drink@cluster0-jnd0d.gcp.mongodb.net/examennode?retryWrites=true&w=majority'
mongoose.connect(cadena,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('conexion establecida ee')
    })
    .catch(err=> console.log(err));

/*arrancar el servidor web*/
app.listen(PUERTO, ()=>{
    console.log('escuchando el puerto de emely...')
})


