/**
 * It loops through all the numbers from 1 to the number itself 
 * and checks if the square of the number is equal to the number itself
 * @param num - the number to check if it's a perfect square
 * @returns A function that takes in a number and returns true if the number is a perfect square and
 * false if it is not.
 */
const isPerfectSquare = (num) => {
    for(let i=1; i<=num; i++){
        if(i*i == num){
            return true
        }
    }
    return false
}

// Better Runtime Distribution
/**
 * If the square root of the number is an integer, return true, otherwise return false.
 * @param num - The number to check if it's a perfect square.
 * @returns A function that takes a number 
 * and returns true if the number is a perfect square 
 * and false if it is not.
 */
const isPerfectSquare = (num) => {
    if (Number.isInteger(num ** .5)) {
        return true
    } else {
        return false
    }
}

console.log(isPerfectSquare(16))
console.log(isPerfectSquare(14))