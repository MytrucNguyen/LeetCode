/**
 * It takes an array of strings, 
 * and returns the value of x after all the operations have been performed.
 */
const finalValueAfterOperations = (operations) => {
    let x = 0
    for(let i = 0; i < operations.length; i++){
        if(operations[i] === "--X"){
            --x
        }
        if(operations[i] === "X--"){
            x--
        }
        if(operations[i] === "++X"){
            ++x
        }
        if(operations[i] === "X++"){
            x++
        }
    }
    return x
}

console.log(finalValueAfterOperations(["--X","X++","X++"]))