function factorialRecur(n) {
    if (n === 1 || n === 0) {
        return 1;
    }
    return n * factorialRecur(n - 1);
}

console.log(factorialRecur(5));
console.log(factorialRecur(4));