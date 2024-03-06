//Número de aes (letra "a")

function numeroDeAes (str){
    let cont=0;
    for (let i in str) {
        if (str[i] === 'a'){
            cont+=1;
        }
    } return cont;
}

console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0