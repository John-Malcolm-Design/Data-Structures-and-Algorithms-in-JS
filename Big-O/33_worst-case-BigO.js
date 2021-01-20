// RULE 1 = Worst Case

// We could add a break statement like so 
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100).fill('nemo');

// How can we measure the Big-O (runtime or effecincy)
function findNemo(array){
    // In the browser we can use performance.now()
    let t0 = performance.now();
    for(let i = 0; i< array.length; i++){
        if (array[i] === 'nemo'){
            console.log('Found Nemo!')
            break;
        }
    }
    let t1 = performance.now();
    console.log('Call to find Nemo took ' + (t1-t0))
}

findNemo(large)

// Although this solution is better its not 
// reproducible, we need to think worst case.
// Nemo could be the last one in the array.
// We can only think about Worst case for Big-O!!
