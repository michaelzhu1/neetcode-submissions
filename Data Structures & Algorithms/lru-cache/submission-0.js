class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity;
        this.cache = new Map()
        this.left = new Node(0,0);
        this.right = new Node(0,0);
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    remove(node) {
        const prevNode = node.prev;
        const nextNode = node.next;
        prevNode.next = node.next;
        nextNode.prev = prevNode;
    }

    insert(node) {
        const tailPrev = this.right.prev;
        tailPrev.next = node;
        this.right.prev = node;
        node.prev = tailPrev;
        node.next = this.right;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
            this.insert(this.cache.get(key));
            return this.cache.get(key).val;
        } else {
            return -1;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }
        const newNode = new Node(key, value);
        this.insert(newNode);
        this.cache.set(key, newNode);
        if (this.cache.size > this.cap) {
            this.cache.delete(this.left.next.key)
            this.remove(this.left.next);
        }
    }
}

class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}