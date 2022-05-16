/**
 * If the number is divisible by 3, 
 * then divide it by 3 and check if the result is a power of 3. 
 * If it is, then the original number is a power of 3. 
 * If it isn't, then the original number isn't a power of 3
 * @param n - the number to check if it's a power of 3
 * @returns A boolean value
 */
const isPowerOfThree = (n) => {
    if(n <= 0){
        return false
    }
    if(n % 3 == 0){
        return isPowerOfThree(n/3)
    }if(n == 1){
        return true
    }
    return false
}

console.log(isPowerOfThree(1))
console.log(isPowerOfThree(27))
console.log(isPowerOfThree(0))
console.log(isPowerOfThree(9))
console.log(isPowerOfThree(45))