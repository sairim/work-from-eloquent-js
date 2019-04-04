/* my solution
function deepEqual(a, b) {
	// check for null, which is considered an object
	if (a == null || b == null) {
		return false;
	}

	if (typeof a === 'object' && typeof b === 'object') {
		let aKeys = Object.keys(a);
		let bKeys = Object.keys(b);
		
		if (bKeys.length !== aKeys.length) {
			return false;
		}
		for (let key of aKeys) {
			if (!bKeys.includes(key)) {
				return false;
			}
			if (!deepEqual(a[key], b[key])) {
				return false;
			}
		}
		return true;
	}

	return a === b;
}
*/

function deepEqual(a, b) {
	  if (a === b) return true;
	  
	  if (a == null || typeof a != "object" ||
			      b == null || typeof b != "object") return false;

	  let keysA = Object.keys(a), keysB = Object.keys(b);

	  if (keysA.length != keysB.length) return false;

	  for (let key of keysA) {
			    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
			  }

	  return true;
}
