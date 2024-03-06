// Número de asteriscos en un arreglo

function numAsteriscos(array){
    let cont=0;
    for (let i = 0; i< array.length; i++){
        if (array[i]=='*'){
            cont+=1;
        }else{
            cont=cont;
        }
    } return 'El número de asteriscos en el arreglo es: '+cont;

}

console.log(numAsteriscos(['', '*', '', '*'])) // 2
