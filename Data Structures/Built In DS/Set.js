/**
 * Set:
 * do not maintain insertion order.
 * are iterable, can be used with a for of loop
 */

const set = new Set([1, 2, 3]);
set.add(5);

console.log(set);
console.log(set.has(4));
console.log(set.size);

for (let item of set) {
    console.log(item);
}