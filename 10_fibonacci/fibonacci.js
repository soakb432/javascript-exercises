const fibonacci = function(n) {
    let count;
    if (typeof n !== "number") {
        count = parseInt(n);
    } else {
        count = n;
    }
    
    if (count < 0) return "OOPS";
    if (count == 0) return 0;

    if (count == 1 || count == 2) {
        return 1;
    } else {
        return fibonacci(count - 1) + fibonacci(count - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
