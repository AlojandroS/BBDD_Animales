//16. Me traigo mongoose para referenciar una coleccion de mi bbdd

const mongoose = require("mongoose")

//17. Comenzamos la creacion del schema, indicamos parametros que debe seguir para crear una colecccion

const animalesSchema = new mongoose.Schema(
    {
        nombre:{type: String, require: true},
        foto:{type: String, require: true},
        peso:{type: Number, require: false}

    },
    {
        timeStamps: true,
        collection: "animales"
    }
)

//18. Creamos el modelo de mongo,con nombre de la coleccion y el nombre del Schema (const + nombre)

const Animales = mongoose.model("animales", animalesSchema)


//19.Exportamos la const

module.exports = Animales