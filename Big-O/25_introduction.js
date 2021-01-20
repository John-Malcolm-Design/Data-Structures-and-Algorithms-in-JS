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
        }
    }
    let t1 = performance.now();
    console.log('Call to find Nemo took ' + (t1-t0))
}

findNemo(large)
