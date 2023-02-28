//9.Nos traemos libreria mongoose para conectar con BBDD

const mongoose = require("mongoose")

//10. Guardamos en una variable el link de la BBDD

const LINK_BBDD = process.env.DB_URL

//11. Creamos la funcion async con las funciones relacionadas a la BBDD

const connectDB = async ()=> {
  try{
      mongoose.set("strictQuery",true)
      //15. Object destructuring para que nos muestre el host junto al console.log
      const db = await mongoose.connect(LINK_BBDD);

      const { host } = db.connection;

console.log("Conectando con exito en el host" + host);

   } catch (error) {
      
    console.log("no me puedo conectar a la BBDD, comprueba este error ->", error);
   }
}

//12.Declaramos el export para poder exportar la funcion

module.exports = { connectDB }