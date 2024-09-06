/* TP2 - Primer servidor NODE.JS

Crear un pequeño servicio en Node.js que cumpla con las
siguientes especificaciones:
Dado el siguiente array de datos: */

const fs = require('fs');
const array = [2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false]

function filtrar(array,condicion){
    const tiposValidos = ["string","number","boolean"]
    
    if(!tiposValidos.includes(condicion)){
        return "La condición no existe o no es válida"
    }

    const resultado = array.filter((dato,index,self) =>
        typeof dato === condicion && self.indexOf(dato) === index
    )

    resultado.sort((a, b) => {
        if (typeof a === "string" && typeof b === "string") {
            return a.localeCompare(b); // Comparación de strings
        } else {
            return a - b; // Comparación de números
        }
    });

    if(resultado.length === 0){
        return  "No hay datos que cumplan con la condición"
    }else{
        const contenido = resultado.join('\n')
        fs.writeFile('doc.txt', contenido, (error) => {
            if(error){
                console.log("Error al escribir en el archivo:", error);
            }else{
                console.log("El archivo se escribió correctamente.");
            }
        });
    }

    return resultado
}


const nuevoArray = filtrar(array,"string")






