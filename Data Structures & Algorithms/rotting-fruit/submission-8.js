class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let minutes = 0;
        const rottenFruits = [];
        let numOfFreshFruit = 0;
        // find the rotten fruit
        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] === 2) {
                    rottenFruits.push([row, col]);
                } else if (grid[row][col] === 1) {
                    numOfFreshFruit++;
                }
            }
        }
        if (numOfFreshFruit === 0) {
            return 0;
        }
        // for each of the rotten fruit in the queue, rot the neighboring fruit and push
        // their neighbors into the queue
        const directions = [[1,0], [-1, 0], [0, 1], [0, -1]];
        while (rottenFruits.length && numOfFreshFruit > 0) {
            const levelSize = rottenFruits.length;
            for (let i = 0; i < levelSize; i++) {
                const [or, oc] = rottenFruits.shift();
                for (const [r, c] of directions) {
                    const nr = or + r;
                    const nc = oc + c;
                    if (nr >= 0 && nc >= 0 && nr < grid.length && nc < grid[0].length && grid[nr][nc] === 1) {
                        // within the range of the grid and it is a fresh fruit
                        grid[nr][nc] = 2;
                        numOfFreshFruit--;
                        rottenFruits.push([nr, nc]);
                    }
                }
            }
            minutes++;  
        }
        return numOfFreshFruit !== 0 ? -1 : minutes;
    }
}
