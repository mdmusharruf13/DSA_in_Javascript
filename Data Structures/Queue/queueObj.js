class Queue {
    constructor() {
        this.q = {};
        this.front = 0;
        this.rear = 0;
    }

    enqueue(element) {
        this.q[this.rear] = element;
        this.rear += 1;
    }

    dequeue() {
        const deleteVal = this.q[this.front];
        delete this.q[this.front];
        this.front += 1;
        return deleteVal;
    }

    peek() {
        return this.q[this.front];
    }

    size() {
        return this.rear - this.front;
    }

    print() {
        console.log(this.q)
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(50);
queue.enqueue(12);
queue.enqueue(90);
queue.enqueue(45);

queue.print();

queue.dequeue();

queue.print();

console.log(queue.size);