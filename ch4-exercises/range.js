function range(start, end, step = 1) {
	let arr = [];
	if (step < 0) {
		for (let i = start; i >= end; i += step) {
			arr.push(i);
		}
	} else {
		for (let i = start; i <= end; i +=step) {
			arr.push(i);
		}
	}
	return arr;
}

/* my solution for sum 
function sum(array) {
	let count = 0;
	for (let i = 0; i < array.length; i++) {
		count += array[i];
	}
	return count;
}*/

// author's solution for sum
function sum(array) {
	let total = 0;
	for (let value of array) {
		total += value;
	}
	return total;
}
