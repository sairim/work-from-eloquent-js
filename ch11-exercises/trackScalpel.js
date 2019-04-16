async function locateScalpel(nest) {
    let currentNest = nest.name;
    for (;;) {
        const nextNest = await anyStorage(nest, currentNest, 'scalpel');
        if (nextNest === currentNest) {
            return currentNest;
        }
        currentNest = nextNest;
    }   
}
  
function locateScalpel2(nest) {
    function recurse(currentNest) {
        return anyStorage(nest, currentNest, 'scalpel').then(nextNest => {
            if (nextNest === currentNest) {
                return currentNest;
            }
            return recurse(nextNest);	
        })
    }
    return recurse(nest.name);
}

