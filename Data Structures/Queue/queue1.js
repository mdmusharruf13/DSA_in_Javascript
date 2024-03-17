// operations
// enqueue(), dequeue(), peek(), isEmpty(), size(), print()

class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(element) {
        this.queue.push(element);
        return true;
    }
    dequeue() {
        return this.queue.shift();
    }
    peek() {
        return this.isEmpty() ? null : this.queue[0];
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    size() {
        return this.queue.length;
    }
    display() {
        console.log(this.queue.toString());
    }
}

const q = new Queue();
console.log(q.isEmpty());
console.log(q.enqueue(5))
console.log(q.enqueue(7))
console.log(q.enqueue(2))
console.log(q.enqueue(4))
console.log(q.enqueue(12))
console.log(q.size());
console.log(q.enqueue(98));

q.display();
console.log(q.peek());
console.log(q.dequeue());
q.display();

// console.log(q.queue);