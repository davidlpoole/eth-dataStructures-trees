class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves;
        this.concat = concat;
    }
    getRoot(leaves = this.leaves) {
        if (leaves.length === 1) {
            return leaves[0];
        }
        const combined = [];
        for (let i = 0; i < leaves.length; i = i + 2) {
            if (leaves[i + 1]) {
                combined.push(this.concat(leaves[i], leaves[i + 1]));
            } else {
                combined.push(leaves[i]);
            }
        }
        return this.getRoot(combined);
    }
}

module.exports = MerkleTree;
