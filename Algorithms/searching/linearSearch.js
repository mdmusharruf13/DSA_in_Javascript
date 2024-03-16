function findIndex(arr, t) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === t) {
            return i;
        }
    }
    return -1;
}

console.log(findIndex([1, 5, 9, 3, 10], 10));