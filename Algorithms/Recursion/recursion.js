// Example ls -R = Look inside all the sub folders

// Function to produce stack overflow
function inception(){
    debugger; // For google chrome
    inception();
} 

// Recursive functions have two paths
// 1. Recrusive Case: Call the function again and run it
// 2. Base case: Stop calling the function 
// there is nothing more to do

let counter = 0;
function inception(){
    // debugger;
    if(counter > 3){
        return 'done';
    }
    counter++
    inception();
}

inception()

// Why did we not return a value here?
// Because we need to "bubble up" the return value
let counter = 0;
function inception(){
    // debugger;
    if(counter > 3){
        return 'done';
    }
    counter++
    return inception();
}

inception()

/* Three rules for recursion:
    1. Identify base case
    2. Identify recursive case
    3. Get closer and closer and return when needed
*/