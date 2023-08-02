function recursively(number) {
  if (!number) return 1;

  if (number === 2) {
    return 2;
  }

  return number * recursively(number - 1);
}

function itrativly(number) {
  if (!number) return 1;

  let ans = 1;

  if (number === 2) {
    return 2;
  }

  for (let i = 2; i <= number; i++) {
    ans = i * ans;
  }

  return ans;
}

// console.log(recursively(6), "recursively");
// console.log(itrativly(6), "itrativly");

function factorial(number) {
  if (number <= 2) return 2;

  return number * factorial(number - 1);
}

console.log(factorial(5), "");
