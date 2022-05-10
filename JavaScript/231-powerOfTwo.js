/* Checking if a number is a power of two. */
var isPowerOfTwo = function (n) {
    // base cases
    if (n == 1)
        return true;

    /* Checking if the number is even or not. */
    else if (n % 2 != 0 || n == 0)
        return false;

    // recursive function call
    return isPowerOfTwo(n / 2);
};

// Better Memory Distribution and Runtime Distribution

/* Using bitwise operators to check if the number is a power of two. */
var isPowerOfTwo = function (n) {
    return (n > 0) & (n & (n - 1)) === 0;
};

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(3))
console.log(isPowerOfTwo(536870912))
console.log(isPowerOfTwo(-2147483648))