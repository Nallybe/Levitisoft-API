const {Schema, model} = require('mongoose')

const RolesSchema = Schema ({
    idRol:{
        type: Number
    },
    nombre:{
        type: String
    },
    estado:{
        type: String
    }
})

module.exports = model('roles' , RolesSchema)