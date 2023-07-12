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
            const combine = this.concat(leaves[i], leaves[i+1]);
            combined.push(combine);
        }
        return this.getRoot(combined)
    }
}

module.exports = MerkleTree;
