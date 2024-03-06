//Imprimir una matriz
function imprimirMatriz(matrix) {
    let num=0;
  for (let i = 0; i <matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
		num=matrix[i][j];
        console.log(num);
	}
    
} 
}
console.log(imprimirMatriz([
    [1, 2, 4],
    [4, 5, 6],
    [7, 8, 9]
]))