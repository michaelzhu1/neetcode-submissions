class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (this.keyStore.has(key)) {
            const existingVal = this.keyStore.get(key);
            for (let i = 0; i < existingVal.length; i++) {
                if (existingVal[i][1] > timestamp) {
                    existingVal.splice(i, 0, [value,timestamp]);
                    break;
                } else {
                    existingVal.push([value, timestamp]);
                    break;
                }
            }
        } else {
            this.keyStore.set(key, [[value, timestamp]])    
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let result = "";
        if (this.keyStore.has(key)) {
            const valArray = this.keyStore.get(key);
            let left = 0;
            let right = valArray.length - 1;
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                const midArrayTimestamp = valArray[mid][1];
                if (midArrayTimestamp <= timestamp) {
                    left = mid + 1;
                    result = valArray[mid][0];
                } else {
                    right = mid - 1;
                }
            }
        } else {
            return "";
        }
        return result;
    }
}
