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

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return;
        }
        if (index === 0) {
            this.prepend(value);
        }
        else {
            const node = new Node(value);
            let currIdx = 0;
            let currNode = this.head;
            while (currNode.next != null) {
                if (currIdx === index - 1) {
                    break;
                }
                currIdx++;
                currNode = currNode.next;
            }
            node.next = currNode.next;
            currNode.next = node;
            this.size++;
        }
    }

    removeFrom(index) {
        if (index >= this.size || index < 0) {
            return;
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        }
        else {
            let currNode = this.head;
            let i;
            for (i = 0; i < index - 1; i++) {
                currNode = currNode.next;
            }
            removedNode = currNode.next;
            currNode.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        }
        else {
            let prev = this.head;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if (prev.next) {
                let removedNode = prev.next;
                prev.next = removedNode.next;
                this.size--;
                return value;
            }
            return null;
        }
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

list.prepend(10);
list.prepend(40);
list.prepend(90);

list.print();

list.append(20);
list.print();

list.append(7);
list.append(5);
list.print();

list.insert(98, 3);
list.print();

list.insert(99, 0);
list.print();

list.removeFrom(1);
list.print();
list.removeFrom(5);
list.print();

list.removeValue(5);
list.print();
