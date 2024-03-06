//Encontrar palabras que empiecen por "a"

let empiezanConA =(array)=>{
    let arrayN=[];
    let mateo='';
    for(let i in array){ //recorre un array 
        mateo=array[i].toLowerCase();
        
        if (mateo[0] === "a"){ //mateo[0] para acceder a la primera letra de la palabra
            arrayN.push(mateo);
        }
    }
    return arrayN;
}
console.log(empiezanConA(["aruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]