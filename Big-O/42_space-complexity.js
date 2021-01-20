function boooo(array){
    for (let index = 0; index < array.length; index++) {
        console.log('booooo!')
    } 
}

boooo([1,2,3,4,5]) // 0(1)

// What is the space complexity of this function?

/* We ignore inputs for space complexity. We only care 
about space we add within the funciton.
We only really create one variable which is the i=0
*/

// Another example
function arrayOfHiNTimes(n){
    let hiArray = []
    for (let index = 0; index < n; index++) {
        hiArray[index] = 'hi'
    }
    return hiArray
}

console.log(arrayOfHiNTimes(6))

// In this example we created variables like before, 
// but we also created data structures: a new array

// This means arrayOfHiNTimes(6) = 0(n)

// N.B - Sometimes there is a trade off between saving time 
// and saving space!