class CircularQueue {
    constructor(capacity) {
        this.q = new Array(capacity);
        this.rear = -1;
        this.front = -1;
        this.currentLength = 0;
        this.capacity = capacity;
    }

    isFull() {
        return this.currentLength === this.capacity;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    size() {
        return this.currentLength;
    }

    enqueue(item) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.q[this.rear] = item;
            this.currentLength += 1;
            if (this.front === -1) {
                this.front = this.rear;
            }
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.q[this.front];
        this.q[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength -= 1;
        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }
        return item;
    }

    peak() {
        if (this.isEmpty()) {
            return null;
        }
        return this.q[this.front];
    }

    print() {
        if (this.isEmpty()) {
            console.log("queue is empty");
            return;
        }
        let i;
        let str = "";
        for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
            str += this.q[i] + " ";
        }
        str += this.q[i];
        console.log(str);
    }
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.size());
queue.print();
console.log(queue.dequeue());
console.log(queue.peak());
console.log(queue.isFull());