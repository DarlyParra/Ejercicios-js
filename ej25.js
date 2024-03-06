//Encontrar palabras que terminan en "s"

function terminanConS (array){
    let arrayN=[];
    let palabra='';
    for(let i in array){ //recorre un array 
        palabra=array[i].toLowerCase();
        if(palabra[palabra.length-1] === "s"){
            arrayN.push(palabra);
        }
    }
    return arrayN;
}
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]