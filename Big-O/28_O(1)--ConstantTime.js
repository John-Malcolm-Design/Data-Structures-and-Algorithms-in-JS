const boxes = [0,1,2,3,4,5]

function logFirstBox(array){
    console.log(array[0], array[1]) //0(1)
}

logFirstBox(boxes)

/* This function is Constant Time
it does not matter how boxes we have, 
the time will always be the same.
*/

// Another example
function funChallenge(input){
    let a = 10; //0(1)
    a = 50 + 3; // 0(1)

    for (let i = 0; i < input.length; i++){ //0(n)
        anotherFunction(); //0(n)
        let stranger = true; //0(n)
        a++; //0(n)
    }
    return a; // 0(1)
}

// And our BIG-0 Notation is (3+4n)
// Which is simplified to // 0(n) - We will find out why soon!