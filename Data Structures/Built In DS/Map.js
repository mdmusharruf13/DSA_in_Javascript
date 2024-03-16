/**
 * Map:
 * A map is an unordered collection of keu-value pairs. Both keys and values can be of any data type.
 * To retrieve a value, you can use the corresponding key
 * Maps are iterable. they can be used with for of loop.
 * 
 *  Object vs Map
 * obj are unordered whereas maps are ordered.
 * keys in obj can only be string or symbol type whereas in map, they can be of any type.
 * An obj has prototype and my contain a few default keys which may collide with your own keys if you're not careful. A map on other hand does not contain any keys by default.
 * obj are not iterable whereas map does.
 * Apart from storing data, you can attach functionality to an object where as maps are restricted to just storing data.
 */

const map = new Map([['a', 1], ['b', 2]]);
let c = 'd';

map.set(c, 13);

for (const [key, val] of map) {
    console.log(`${key}, ${val}`);
}

console.log(map.has('d'));
map.delete(c);

console.log(map);

console.log(map.size);
map.clear();
console.log(map);