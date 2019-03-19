const {estudiante, obtenerPromedio} = require('./calculos');
const express = require('express')
const app = express()
//console.log(estudiante);

//fs es el componente que ya tienen Node por defecto para la ccreacion de archivos automaticos
const fs = require('fs');

/*console.log('El nombre del estudiante es ' + estudiante.nombre);
console.log('El promedio del estudiante es ' + obtenerPromedio(estudiante.notas.ingles, estudiante.notas.matematicas, estudiante.notas.programacion));


let {nombre, edad : anhos, notas: {matematicas, ingles, programacion}} = estudiante
console.log('El nombre del estudiante es ' + nombre);
console.log('El promedio del estudiante es ' + obtenerPromedio(ingles, matematicas, programacion));
console.log('La edad del estudiante es ' + anhos);*/

let crearArchivo = (estudiante) =>{
    console.log(estudiante);
    
    texto = 'El nombre del estudiante es ' + estudiante.nombre + '\n' + 
            'ha obtenido un promedio de ' + obtenerPromedio(estudiante.notas.matematicas, estudiante.notas.ingles, estudiante.notas.programacion)
   /* fs.writeFile('promedio.txt', texto, (err) => {
        if(err) throw (err);
        console.log('Se ha creado el archivo');
    })*/
 

}

crearArchivo (estudiante)

app.get('/', function (req, res) {
    res.send(texto)
  })
   
  app.listen(3000)