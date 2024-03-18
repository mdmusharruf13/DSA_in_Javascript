class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
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
            this.tail = node;
        }
        else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }
    removeFromFront() {
        if (this.isEmpty()) {
            return null;
        }
        const val = this.head.value;
        this.head = this.head.next;
        this.head.prev = null;
        this.size--;
        return val;
    }
    removeFromEnd() {
        if (this.isEmpty()) {
            return null;
        }
        const val = this.tail.value;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
        return val;
    }
    print() {
        if (this.isEmpty()) {
            console.log("list is empty");
        }
        else {
            let currNode = this.head;
            let list = "";
            while (currNode) {
                list += currNode.value + "->";
                currNode = currNode.next;
            }
            list += "null";
            console.log(list);
        }
    }
}


const list = new DLL();
list.append(98);
list.prepend(90);
list.append(50);
list.append(60);
list.append(20);
list.append(13);
list.print();

list.removeFromFront();
list.print();

list.removeFromEnd();
list.print();
