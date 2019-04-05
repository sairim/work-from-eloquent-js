// use the reduce method in combination with the concat method to flatten
// an array of arrays into a single array that has all the elem's of the orig

function flattening(arr) {
	arr.reduce((newArr, curr) => {
		return newArr.concat(curr);
	}, [])
}
