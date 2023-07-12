class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves;
        this.concat = concat;
    }

    getRoot(leaves = this.leaves) {
        //top layer base case
        if (leaves.length === 1) {
            return leaves[0];
        }

        // loop through each pair of nodes
        const combined = [];
        for (let i = 0; i < leaves.length; i += 2) {
            // check if there's either one or both nodes, then save
            if (leaves[i + 1]) {
                combined.push(this.concat(leaves[i], leaves[i + 1]));
            } else {
                combined.push(leaves[i]);
            }
        }
        // repeat recursively
        return this.getRoot(combined);
    }

    getProof(index, layer = this.leaves, proof = []) {
        // top layer base case
        if (layer.length === 1) return proof;

        const newLayer = []
        for (let i = 0; i < layer.length; i += 2) {
            //store each side of the branch
            let left = layer[i];
            let right = layer[i + 1];

            // if there's no right side then just take the left
            if (!right) {
                newLayer.push(left);
            } else {
                // store both for later
                newLayer.push(this.concat(left, right));

                // omit the node we are getting the proof for
                if (i === index || i === index - 1) {
                    let isLeft = !(index % 2);
                    proof.push({
                        data: isLeft ? right : left,
                        left: !isLeft
                    })
                }
            }
        }
        // repeat for the next layer up, recursively
        return this.getProof(Math.floor(index / 2), newLayer, proof);
    }
}

module.exports = MerkleTree;
