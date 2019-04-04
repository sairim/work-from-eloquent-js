function reverseArray(array) {
	let reversedArray = [];
	for (let value of array) {
		reversedArray.unshift(value);
	}
	return reversedArray;
}

function reverseArrayInPlace(array) {
	for (let i = 0; i < Math.floor(array.length / 2); i++) {
		let swapVal = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length -1 - i] = swapVal;
	}
	return array;
}

console.log(`reverseArray: ${reverseArray([5, 4, 3, 2, 1])}`);
console.log(`reverseArrayInPlace: ${reverseArrayInPlace([5, 4, 3, 2, 1])}`);
