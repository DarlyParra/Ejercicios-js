//Numeros a Palabras//////
function numerosAPalabras(array) {
    const palabras = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
  
    for(let i = 0; i < array.length; i++){ 
        let numero = array[i];
        if (numero >= 0 && numero <= 9) {
            array[i] = palabras[numero];
        } else {
            array[i] = 'N.E';
            
        }
    }
    return array;
  }
  
  // código de prueba
console.log(numerosAPalabras([9, 1, 15, 3, 4])); // 

  