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

    preorder(node) {
        if (!node) {
            return;
        }
        console.log(node.value);
        this.preorder(node.left);
        this.preorder(node.right);
    }
    inorder(node) {
        if (!node) {
            return;
        }
        this.inorder(node.left);
        console.log(node.value);
        this.inorder(node.right);
    }
    postorder(node) {
        if (!node) {
            return;
        }
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.value);
    }

    levelOrder() {
        console.log("level order traversal:")
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
    }

    min(node) {
        if (!node.left) {
            return node.value;
        }
        else {
            return this.min(node.left);
        }
    }
    max(node) {
        if (!node.right) {
            return node.value;
        }
        else {
            return this.max(node.right);
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(node, value) {
        if (node === null) {
            return node;
        }
        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
        }
        else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
        }
        else {
            if (!node.left && !node.right) {
                return null;
            }
            if (!node.left) {
                return node.right;
            }
            else if (!node.right) {
                return node.left;
            }
            node.value = this.min(node.right);
            node.right = this.deleteNode(node.right, node.value)
        }
        return node;
    }

}


const bst = new BST();
// console.log(bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);


console.log(bst.search(bst.root, 50));
console.log(bst.search(bst.root, 5));

console.log("preorder");
bst.preorder(bst.root);
console.log("inorder");
bst.inorder(bst.root);
console.log("postorder");
bst.postorder(bst.root);

console.log("level order");
bst.levelOrder(bst.root);

console.log("min and max:")
console.log(bst.min(bst.root));
console.log(bst.max(bst.root));

bst.levelOrder();

// bst.delete(10); // node with two childs
bst.delete(5); // node with one childs
// bst.delete(3); // node with no chids

bst.levelOrder();