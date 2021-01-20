// RULE 4 - Drop non dominant terms
function printAllNumbersThenAllPairSums(numbers) {

    console.log('these are the numbers:');
    numbers.forEach(function(number) {
      console.log(number);
    });
  
    console.log('and these are their sums:');
    numbers.forEach(function(firstNumber) {
      numbers.forEach(function(secondNumber) {
        console.log(firstNumber + secondNumber);
      });
    });
  }
  
  printAllNumbersThenAllPairSums([1,2,3,4,5])

  // 0(n + n^2)
  // So in this case we can drop 0(n) 
  // 0(n^2)