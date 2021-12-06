const sumAll = function(...args) {
    if (args[0] < 0 || args[1] < 0 || 
        typeof args[0] !== "number" || typeof args[1] !== "number") {
            return "ERROR";
    }

    args.sort((a, b) => {
        return a - b;
    })

    let min = args[0];
    let max = args[1];
    return max * ((max + 1) / 2) - (((min - 1) * min) / 2);
}

// Do not edit below this line
module.exports = sumAll;
