function factorial(n) {
    let fact = 1;
    while (n !== 0) {
        fact *= n;
        n--;
    }
    return fact;
}
console.log(factorial(4));
console.log(factorial(5));