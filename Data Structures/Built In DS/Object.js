/**
 * An object is an unordered collection of key-value pairs. The key must either be a string or symbol data type where as the value can be of any data type.
 * 
 * To retrieve a value, you can use the corresponding key. This can be achieved using dot notation or bracket notation.
 * 
 * An object is not an iterable, you cannot use it with a for of loop.
 */

const obj = {
    name: "mush",
    age: 23,
    myName: function () {
        console.log(this.name);
    }
};

obj.hobby = "cricket";

console.log(obj.name);
console.log(obj['age']);

console.log(obj);
delete obj.hobby;
console.log(obj);

obj.myName();
