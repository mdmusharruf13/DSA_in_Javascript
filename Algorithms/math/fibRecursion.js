function fibonacciSeq(n1, n2, n) {
    if (n === 0) {
        console.log(n1)
        return;
    }
    console.log(n1);
    fibonacciSeq(n2, n1 + n2, --n);
}

fibonacciSeq(0, 1, 5);
fibonacciSeq(0, 1, 6);