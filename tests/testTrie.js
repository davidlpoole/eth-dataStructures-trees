const {assert} = require('chai');
const Trie = require('../trie/Trie');
const TrieNode = require('../trie/TrieNode');

describe('Trie contains', () => {
    describe('with a single word', () => {
        let trie;
        beforeEach(() => {
            trie = new Trie();
            trie.insert('hey');
        });

        it('should properly detect words that are contained', () => {
            assert(trie.contains('hey'), "Expected the trie to contain `hey`!");
        });

        it('should properly detect words that are not contained', () => {
            assert(!trie.contains('hello'), "Expected the trie to not contain `hello`!");
            assert(!trie.contains('he'), "Expected the trie to not contain `he`!");
            assert(!trie.contains('hi'), "Expected the trie to not contain `hi`!");
            assert(!trie.contains('heya'), "Expected the trie to not contain `heya`!");
        });
    });
});

describe('Trie insert', () => {
    describe('with a single word', () => {
        let trie;
        beforeEach(() => {
            trie = new Trie();
            trie.insert('hey');
        });

        it('should connect the root to the first letter', () => {
            const firstNode = trie.root.children['h'];
            assert.equal(firstNode.key, 'h', 'expected the `key` of the first node to be `h`');
            assert(firstNode.children['e'], 'expected the `children` of the first node to have a connection to the next letter');
            assert.equal(firstNode.isWord, false, 'expected the `isWord` of the first node to be `false`');
        });

        it('should connect the root to the second letter', () => {
            const firstNode = trie.root.children['h'];
            const secondNode = firstNode.children['e'];
            assert.equal(secondNode.key, 'e', 'expected the `key` of the first node to be `e`');
            assert(secondNode.children['y'], 'expected the `children` of the second node to have a connection to the next letter');
            assert.equal(secondNode.isWord, false, 'expected the `isWord` of the second node to be `false`');
        });

        it('should connect the root to the third letter', () => {
            const firstNode = trie.root.children['h'];
            const secondNode = firstNode.children['e'];
            const thirdNode = secondNode.children['y'];
            assert.equal(thirdNode.key, 'y', 'expected the `key` of the first node to be `y`');
            assert.equal(Object.keys(thirdNode.children).length, 0, 'expected to have no `children` for the final node');
            assert.equal(thirdNode.isWord, true, 'expected the `isWord` of the final node to be `true`');
        });
    });

    describe('with three words', () => {
        let trie;
        let words = ['helipad', 'hello', 'hermit'];
        beforeEach(() => {
            trie = new Trie();
            words.forEach(word => trie.insert(word));
        });

        words.forEach((word) => {
            describe(`for ${word}`, () => {
                it('should connect to the final letter', () => {
                    const finalNode = word.split("").reduce((node, letter) => node.children[letter], trie.root);
                    assert(finalNode);
                    assert.equal(finalNode.isWord, true, "expected the final node `isWord` to be set to true");
                });
            });
        });
    });
});