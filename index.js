
//5.Configuramos el dotenv sin meterlo en ninguna variable, solo config.

require("dotenv").config()

//8.Miramos si coge bien el enlace a BBDD
console.log(process.env.DB_URL);

//6.Nos traemos el PORT y lo metemos en una variable.

const PUERTO = process.env.PORT

//13. Nos traemos la BBDD declarando la ruta desde donde esta

const db = require("./src/utils/db.js");

//14. Despues la ejecutamos

db.connectDB()

//1. traigo la libreria express
const express = require("express")

//2. ejecuto la variable express y guardamos en server.
const server = express()

//4. Creamos una funcion para ejecutar el servidor, para que utilice la ruta para mostrar algo.

server.use("/", (req, res) =>{

    res.send("Funcionando")

})

//3. Creamos otra funcion que ejecute el servidor, en este caso para levantarlo, para que sea accesible. 
//7. Modificamos el 8000 y ponemos el nombre de la variable para que no muestre aqui el nº 

server.listen(PUERTO, ()=> {

console.log("El servidor funciona correctamente en http://localhost:" + PUERTO);

})