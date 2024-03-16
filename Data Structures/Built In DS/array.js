/**
 * An array is a data structure that can hold a collection of values
 * Array can contain a mix of different data types. you can store string, booleans, numbers or even objects all in the same array
 * Array are resizable. You don't have to declare the size of an array before creating it.
 * Javascript arrays are zero-indexed and the insertion order is maintained.
 * Array are iterables. They can be used with a for of loop.
 */


const arr = [1, 2, 3, "mush", true, 'a'];

arr.push(10);
arr.unshift(20);
console.log(arr);

arr.shift();
arr.pop();
console.log(arr);

for (let item of arr) {
    console.log(item);
}

