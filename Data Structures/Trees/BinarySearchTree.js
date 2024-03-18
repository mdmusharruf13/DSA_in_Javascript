/**
 * A binary tree is a tree DS in which each node has atmost two children.
 * They are referred to as left child and right child.
 * 
 * BST operations:
 * insertion - To add a node to the tree.
 * search - To find a node given its value.
 * DFS & BFS - To visit all nodes in the tree.
 * Deletion - To remove a node from the tree.
 * 
 * Usage:
 * searching
 * sorting
 * to implement ADT such as lookup takles and priority queue.
 */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            }
            else {
                this.insertNode(root.left, newNode);
            }
        }
        else {
            if (root.right === null) {
                root.right = newNode;
            }
            else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false;
        }
        if (root.value === value) {
            return true;
        }
        else if (value < root.value) {
            return this.search(root.left, value);
        }
        else if (value > root.value) {
            return this.search(root.right, value);
        }
        else {
            return false;
        }
    }

}


const bst = new BST();
console.log(bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);

console.log(bst.search(bst.root, 50));
console.log(bst.search(bst.root, 5));