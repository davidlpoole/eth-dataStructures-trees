const TrieNode = require('./TrieNode');

class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    insert(word) {
        let node = this.root;
        [...word].forEach((letter, index) => {
            node = node.children[letter] = new TrieNode(letter);
            if (index === word.length - 1) {
                node.isWord = true;
            }
        })
    }
}

module.exports = Trie;