const reverse = (x) => {
    let reverseInt = Math.abs(x)
        .toString()
        .split('')
        .reverse()
        .join('')
    
    if(reverseInt > 2**31) {
        return 0
    };
    return (reverseInt * Math.sign(x))
}
console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(0))