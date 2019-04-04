/* my solution
let size = 16;

let string;

for (let i = 0; i < size; i++) {
	i % 2 === 0 ? string = ' ' : string = '#';
	for (let k = 0; k < size - 1; k++) {
		string[k] === ' ' ? string += '#' : string += ' ';
	}
	console.log(string);
}
*/

let size = 8;

let board = '';

for (let y = 0; y < size; y++) {
	for (let x = 0; x < size; x++) {
		if ((x + y) % 2 == 0) {
			board += ' ';
		} else {
			board += '#';
		}
	}
	board += '\n';
}

console.log(board);
