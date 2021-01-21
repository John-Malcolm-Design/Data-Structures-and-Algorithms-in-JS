// Create a function that reverses a string:
// 'Hi my name is John Malcolm' should be:
// 'mloclaM nhoJ si eman vM iH'

let str = 'Hi my name is John Malcolm';
let str2 = ''

function reverse(str){
    // check input
    // is empty
    // is too small to flip
    // is an incorrect type
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'please check the input'
    }

    let reverseStr = ''
    for (let index = str.length -1; index >= 0; index--) {
        console.log(str[index])
        reverseStr += str[index]
    }
    return reverseStr
}

function reverse2(str){
    return str.split('').reverse().join('')
}

const reverse3 = str => str.split('').reverse().join('')
const reverse4 = str => [...str].reverse().join('')

console.log(reverse(str))
console.log(reverse2(str))
console.log(reverse3(str))
console.log(reverse4(str))