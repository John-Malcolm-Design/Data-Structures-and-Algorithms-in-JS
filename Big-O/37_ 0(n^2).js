// Before we discuss rule 4 we need to discuss
// 0(n^2)
const boxes = [a,b,c,d,e]

function logAllPairsofArray(array){
    // Nested loops for the same array
    array.forEach(element => {
        array.forEach(pair => {
            console.log(element, pair)
        });
    });
} 

logAllPairsofArray(boxes)

// Nested loops are
// 0(n) * 0(n) = 0(n^2)
// This is also called quadratic time
// This is horrible - a lot of interview questions are 
// about changing quadratic time into 
// something more reasonable