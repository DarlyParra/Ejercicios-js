//Imprimir un arreglo

function imprimirArreglo (array){
    
    for (let i in array){
        console.log(array[i])
    }
}

console.log(imprimirArreglo([1, "Hola", 2, "Mundo"]))