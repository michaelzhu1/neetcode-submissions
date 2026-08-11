class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        const inDegree = new Array(n + 1).fill(0);
        const outDegree = new Array(n + 1).fill(0);
        for (const [outgoing, incoming] of trust) {
            inDegree[outgoing]++;
            outDegree[incoming]++;
        }
        console.log(inDegree)
        console.log(outDegree)
        for (let i = 1; i < inDegree.length; i++) {
            if (outDegree[i] === n - 1 && inDegree[i] === 0) {
                return i;
            }
        }
        return -1;
    }
}
