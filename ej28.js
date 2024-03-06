//Traducir palabras a números

function palabrasANumeros(array){
    const num = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    const num2 = [0, 1 ,2 ,3, 4, 5, 6, 7, 8, 9]
    for (let i=0; i<array.length; i++){
        let palabra = array[i];
        let bandera=false;
        for (let j=0; j<num.length; j++){
            if (palabra == num[j]) {
               array[i]=num2[j];
               bandera=true; 
                //este i itera por todo num y si encuentra el valor entonces la bandera se vuelve true
            } //lo que hace la bandera es que me indica si el valor en letras esta en num y sino pues colocara el -1
        }if (!bandera){
            array[i]=-1;
        }
        
    }
    return array;

    
}
console.log(palabrasANumeros(["dos", "unfo", "dos", "tres", "what?", "cuatro"])) // [0, 1, 2, 3, -1, 4]