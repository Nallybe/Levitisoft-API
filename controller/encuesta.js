const{response}= require('express')
const Encuesta = require('../models/encuesta')

const getEncuesta = async (req, res=response)=> {

    const encuesta = await Encuesta.find()//Consultar todos los documentos
    res.json({
        msg: 'GET API Encuesta',
        encuesta
    })
}

const postEncuesta = async (req,res) =>{
    //Desestructuración
    const {nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado} = req.body
    //Recibir parametros y desestructurarlos
    //Instanciar el objeto con los parametros y recibirlos
    const encuesta = new Encuesta({nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado})

    await encuesta.save()

    res.json({
        msg: 'POST API Encuesta',
        encuesta
    })


}

//Modificar todos los valores
const putEncuesta = async(req, res)=>{
    //Desestructuracion
    const { nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado } = req.body
    const encuesta = await Encuesta.findOneAndUpdate({nombreEncuesta: nombreEncuesta}, {fecha: fecha}, 
        {documentoEncuestado: documentoEncuestado}, {nombreEncuestado: nombreEncuestado}, {edad:edad}, 
        {genero: genero}, {empleado: empleado})

    res.json({
        msg: "PUT API Encuesta",
        encuesta
    })
}

//Modificaciones parciales
const patchEncuesta = async(req,res)=>{
    const { nombreEncuesta, fecha, documentoEncuestado, genero, empleado} = req.body
    const encuesta = await Encuesta.findOneAndUpdate({nombreEncuesta: nombreEncuesta}, {fecha: fecha}, 
        {documentoEncuestado: documentoEncuestado}, 
        {genero: genero}, {empleado: empleado})

    res.json({
        msg: "PATCH API Encuesta",
        encuesta
    })
}

//Eliminar
const deleteEncuesta = async(req, res) =>{
    const { nombreEncuestado } = req.query

    const encuesta = await Encuesta.findOneAndDelete({nombreEncuestado : nombreEncuestado})//ANTES DE LOS DOS PUNTOS ES PARAMETRO Y DESPUES DE LOS DOS PUNTOS ES LA VARIABLE

    res.json({
        msg: 'DELETE API Encuesta',
        encuesta
    })
}

module.exports = {
    getEncuesta,
    postEncuesta,
    putEncuesta,
    patchEncuesta,
    deleteEncuesta
}
