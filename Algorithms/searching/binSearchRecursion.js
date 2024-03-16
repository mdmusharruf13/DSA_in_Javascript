function binSearch(arr, start, end, target) {
    if (start > end) {
        return -1;
    }
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
        return mid;
    }
    if (target < arr[mid]) {
        return binSearch(arr, start, mid - 1, target);
    }
    else {
        return binSearch(arr, mid + 1, end, target);
    }
}

console.log(binSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 9, 9));