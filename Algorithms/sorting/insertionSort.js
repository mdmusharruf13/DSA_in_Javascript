function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let num = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > num) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = num;
    }
    console.log(arr);
}

let arr = [-6, 20, 8, -2, 4];
console.log(arr);
insertionSort(arr);



