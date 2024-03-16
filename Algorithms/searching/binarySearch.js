function binSearch(arr, t) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === t) {
            return mid;
        }
        else if (t < arr[mid]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return -1;
}

console.log(binSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));

