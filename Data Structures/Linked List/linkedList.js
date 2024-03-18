class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        }
        else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = node;
        }
        this.size++;
    }

    print() {
        if (this.isEmpty()) {
            console.log("list is empty");
        }
        else {
            let val = "";
            let temp = this.head;
            while (temp !== null) {
                val += temp.value + " -> ";
                temp = temp.next;
            }
            val += "null";
            console.log(val);
            return;
        }

    }
}

const list = new LinkedList();
console.log("is list empty? ", list.isEmpty());

console.log("list size is: ", list.getSize());

// list.prepend(10);
// list.prepend(40);
// list.prepend(90);

// list.print();

list.print();

list.append(10);
list.print();

list.append(20);
list.append(7);
list.append(1);
list.append(5);
list.print();
