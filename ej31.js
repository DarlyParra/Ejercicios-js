
//Distancia entre dos strings

function different(str1, str2) {
    let result = 0;
    let length;
    
    if (str1 > str2){
        length = str1.length;
    }	else {
        length = str2.length;
    }
    

for (let i = 0; i < length; i++) {
    if (str1[i] === str2[i]) {
    result = result;
    } else {
    result = result + 1;
    }
}
return 'El número de caracteres diferentes es: '+ result;
}

// Example usage:
console.log(different('carro', 'correr')); //