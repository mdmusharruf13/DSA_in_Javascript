function fib(n1, n2, nth) {
    console.log("started");
    let n3 = n1 + n2;

    console.log(n1);
    console.log(n2);

    while (nth - 2 > 0) {
        console.log(n3);

        n1 = n2;
        n2 = n3;
        n3 = n1 + n2;
        nth--;
    }

    console.log("completed");
}

fib(0, 1, 2);
fib(0, 1, 3);
fib(0, 1, 7);


// other approach
function fibonacci(n) {
    const fibo = [0, 1];
    for (let i = 2; i < n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(7))