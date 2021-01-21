function findSmallestMissing(A) {
  // Convert Array to Obj
  let mapA = {};
  A.forEach((element) => {
      if(element > 0 || typeof element === 'integer'){
        mapA[element] = true;
      }
  });

  console.log(mapA)

  // Starting at 1, increment and
  let i = 1;
  let found = true;

  // While we have matches keep looping
  while (found === true) {
    if (mapA[i]) {
      i++;
    } else {
      found = false;
      return i;
    }
  }
}

console.log(findSmallestMissing(['hello', -300, 200, 1, 3, 6, 4, 1, 2]));
