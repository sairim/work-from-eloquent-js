// this is just a solution to exercise 12.1 -- it won't run on its own!

topScope.array = (...values) => values;

topScope.length = array => array.length;

topScope.element = (array, i) => array[i];

// this is just a solution to exercise 12.3 -- it won't run on its own!

function skipSpace(string) {
    const skip = string.match(/^(\s|#.*)*/);
    return string.slice(skip[0].length);
}

// this is just a solution to exercise 12.4 -- it won't run on its own!

specialForms.set = (args, env) => {
    if (args.length != 2 || args[0].type != 'word') {
        throw new SyntaxError('Improper use of set');
    } 

    const varName = args[0].name;
    const value = evaluate(args[1], env);

    for (let scope = env; scope; scope = Object.getPrototypeOf(scope)) {
        if (Object.prototype.hasOwnProperty.call(scope, varName)) {
            scope[varName] = value;
            return value;
        }
    }

    throw new ReferenceError(`Variable ${varName} is not defined`);
}