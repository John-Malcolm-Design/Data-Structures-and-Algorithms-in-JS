// Write two functions that finds the factorial of any number.
// One should use recursive, the other should
// just use a for loop

function findFactorialRecursive(number) { // 0(n)
  if (number === 2) {
    return 2
  }
  return number * findFactorialRecursive(number-1);
}
findFactorialRecursive(5);

function findFactorialIterative(number) { // 0(n)
    let ans = 1
    while (number > 1) {
        ans = ans * number;
        number--;
    }
    return ans;
}

findFactorialIterative(5);
