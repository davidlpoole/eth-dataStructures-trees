/**
 * Verify a proof (that a particular leaf node exists within a merkle tree)
 * @param {Object[]} proof      - The proof from MerkleTree.getProof())
 * @param {string} proof.data   - The leaf node data.
 * @param {boolean} proof.left  - The side of the branch the node is on.
 * @param {string} node         - A leaf node we're trying to prove is within the merkle tree.
 * @param {string} root         - The valid Merkle Root from MerkleTree.getRoot()
 * @param {function} concat     - The method used to combine the leaf nodes.
 * @returns boolean             - Whether the proof is valid
 */
function verifyProof(proof, node, root, concat) {
    let data = node;

    for (let i = 0; i < proof.length; i++) {
        if (proof[i].left) {
            data = concat(proof[i].data, data)
        }
        else {
            data = concat(data, proof[i].data)
        }
    }
    return data === root;
}

module.exports = verifyProof;
