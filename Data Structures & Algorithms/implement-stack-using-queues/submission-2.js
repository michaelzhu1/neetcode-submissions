class MyStack {
    constructor() {
        this.queue = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queue.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        const len = this.queue.length;
        for (let i = 0; i < len - 1; i++) {
            this.queue.push(this.queue.shift());
        }
        return this.queue.shift()
    }

    /**
     * @return {number}
     */
    top() {
        const len = this.queue.length;
        for (let i = 0; i < len - 1; i++) {
            this.queue.push(this.queue.shift());
        }
        const result = this.queue[0];
        this.queue.push(this.queue.shift())
        return result;
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.queue.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
