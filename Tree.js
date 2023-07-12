class Tree {
    constructor() {
        this.root = null;
    };

    hasNode(number) {
        if (!this.root) {
            return false;
        }
        if (this.root.data === number) {
            return true;
        }
        return this.searchNode(this.root, number)
    }

    searchNode(node, number) {
        if (node.data === number) {
            return true
        }
        if (node.data > number && node.left) {
            return this.searchNode(node.left, number)
        }
        if (node.data < number && node.right) {
            return this.searchNode(node.right, number)
        }
        return false
    }

    addNode(node) {
        if (!this.root) {
            this.root = node;
        } else {
            this.addRecursiveNode(this.root, node)
        }
    }

    addRecursiveNode(parent, child) {
        if (child.data > parent.data) {
            if (parent.right) {
                this.addRecursiveNode(parent.right, child)
            } else {
                parent.right = child;
            }

        } else if (child.data < parent.data) {
            if (parent.left) {
                this.addRecursiveNode(parent.left, child)
            } else {
                parent.left = child;
            }
        }
    }

}

module.exports = Tree;