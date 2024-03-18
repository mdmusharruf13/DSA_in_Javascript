/**
 * A hash table, also known as hash map, is a data structure that is used to store key-value pairs.
 * Given a key, you can associate a value with athat key for very fast lookup.
 * Javascript's object is a special implementation of the hash table data structure. However, Object class adds its own keys. Keys that you input may conflict and overwrite the inherited default properties.
 * Maps which were introduced in 2015 allow you to store key-value pairs.
 * Writing ur own hash table imple is a very pop JSivq.
 * 
 * we store the key value pairs in a fix sized array
 * Array have a numeric index
 * How do we go from using a string as an index to number as an index?
 * A hashing function accepts the string key, converts it into a hash code using a defined logic and then maps it into a numeric index that is within the bounds of the array.
 * using the index, store the value
 * The same hasing function is reused to retireve the value given a key:
 * - set to store a key-value pair
 * - get to retrieve a value given its key
 * - remove to delete a key value pair
 * 
 * 
 * Applications:
 * hash tables are typically implemented where constants time lookup and insertion are required.
 * ex: database indexing, caches
 */

class hashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        let index = this.hash(key);
        this.table[index] = value;
    }

    get(key) {
        let index = this.hash(key);
        return this.table[index];
    }

    remove(key) {
        let index = this.hash(key);
        this.table[index] = undefined;
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(this.table[i]);
            }
        }
    }
}

const table = new hashTable(20);
table.set("name", "musharruf");
table.set("age", 21);
table.display();

console.log(table.get("name"));
table.remove("name");
table.display();