//20. traemos mongoose para subir datos a la bbdd

const mongoose = require("mongoose")


//21. Importamos el modelo de libro para utilizar el Schema

const Animales = require("../../api/animales/animales.model")

//22. traemos dotenv para la URL
require("dotenv").config()

//23. Declaramos la URL trayendola de .env
const DB_URL = process.env.DB_URL

//24. Declaramos la semilla que se va subir con datos

const animales = [
    {
        nombre: "perro",
        foto: "https://i0.wp.com/blog.mascotaysalud.com/wp-content/uploads/2019/05/CARA-ROTTWEILER.jpg?w=865&ssl=1",
        peso: 24
        
    },
    {
        nombre: "gato",
        foto: "https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        peso: 24
    },
    {
        nombre: "loro",
        foto: "https://media.istockphoto.com/id/500404999/es/foto/lora-nuca-amarilla-aislado-en-blanco.jpg?s=612x612&w=0&k=20&c=17wlPJp0sPQgidQOvGImPRMlPSiuDmdYBajBkRt6Zdo=",
        peso: 1
    },
    {
        nombre: "caballo",
        foto: "https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        peso: 24
    }
]

//25. quitamos WARNING
mongoose.set("strictQuery", true)

//26.Creamos la funcion para conectar, indicamos URL

mongoose.connect(DB_URL).then(async ()=> {

    const animales = await Animales.find()

    //27.Compruebo si hay datos

    if(animales.length){

        await Animales.collection.drop()
        console.log("Animales eliminados con exito");
    }
})

//28. Creamos una segunda funcion para insertar los datos que queramos, en este caso los declarados en const animales

.catch((error) => console.log("Error borrando datos de la BBDD", error))
.then(async ()=> {

 await Animales.insertMany(animales)
 console.log("Animales creados con EXITO")

})
.catch((error)=> console.log("Error subiendo ANIMALES",error))
.finally(()=> mongoose.disconnect())













// .catch((error)=> console.log("Error borrando los datos de la bbdd", error))

// .then(async ()=> {
//     //! inserto varios documentos en la coleccion libros gracias a mi modelo Libro
//     await Libro.insertMany(libros)
//     console.log("LIBROS CREADOS CON EXITO")
// })
// .catch((error)=> console.log("Error subiendo los libros a la base de datos", error))
// .finally(()=> mongoose.disconnect())