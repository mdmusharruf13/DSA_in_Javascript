class Stack {
    constructor() {
        this.stack = [];
    }
    push(item) {
        this.stack.push(item);
        return true;
    }
    pop() {
        return this.stack.pop();
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    display() {
        console.log(this.stack.toString());
    }
    size() {
        return this.stack.length;
    }
    isEmpty() {
        return this.stack.length === 0;
    }
}

const stk = new Stack();
console.log(stk.push(98));
console.log(stk.push(20))

console.log("stack elements are: ");
stk.display();

stk.push(100);

console.log(stk.peek());

console.log(stk.stack); // this is not good(no encapsulation)
