function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(5))
console.log(isPrime(4))
console.log(isPrime(21))
console.log(isPrime(23))

// // second approact
// function prime(n) {
//     if (n < 2) return false;

//     for (let i = 2; i < Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(prime(5))
// console.log(prime(4))
// console.log(prime(21))
// console.log(prime(23))

// O(sqrt(n));