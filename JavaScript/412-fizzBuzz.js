/**
 * The function takes in a number, n, 
 * and returns an array of numbers from 1 to n, 
 * with the numbers divisible by 3 replaced with "Fizz", 
 * the numbers divisible by 5 replaced with "Buzz", 
 * and the numbers divisible by both 3 and 5 replaced with "FizzBuzz".
 * @param n - the number of elements in the array
 * @returns An array of strings.
 */

const fizzBuzz = (n) => {
    let FIZZARRY = []
    for(let i=1; i<=n; i++){
        if(i % 15 == 0){
            FIZZARRY.push("FizzBuzz")
        }
        else if(i % 3 == 0){
            FIZZARRY.push("Fizz")
        }
        else if(i % 5 == 0){
            FIZZARRY.push("Buzz")
        }
        else{
            let stringNum = i.toString()
            FIZZARRY.push(stringNum)
        }
    }
    return FIZZARRY
} 

console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))