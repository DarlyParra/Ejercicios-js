
//Asteriscos//
function asteriscos(matrix) {
	let result = 0;
  
  for (let i = 0; i <matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
		for (let f = 0; f < matrix.length; f++){
			if(matrix[i][j][f] != '*'){
				result = result;
			} else {
				result = result + 1;}
			}
		}
	}
	return 'El número total de asteriscos es: ' + result;
}
// Example usage:
console.log(asteriscos([
  ['*', '', '*'],
  ['', '*', ''],
  ['*', '', '*']
]));
