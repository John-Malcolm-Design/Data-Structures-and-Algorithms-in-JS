// RULE 2 = Drop the Constants

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
}

// What is the Big-O?
// 0(1 + n/2 + 100)

// Rule 2 = Drop the constants
// Even if we have two for loops to make
// 0(2n) = It Doesnt matter! as its still linear!!