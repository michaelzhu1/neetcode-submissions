class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islands = 0;
        const ROWS = grid.length;
        const COLS = grid[0].length;
        
        const directions = [[-1, 0], [1, 0], [0, 1], [0, -1]];

        const bfs = (row, col) => {
            const queue = [];
            queue.push([row, col]);
            grid[row][col] = '0';
            while (queue.length) {
                const [row, col] = queue.shift();
                for (const [dr, dc] of directions) {
                    const nr = row + dr;
                    const nc = col + dc;
                    if (nr >= 0 && nc >= 0 && nr < ROWS && nc < COLS && grid[nr][nc] === '1') {
                        queue.push([nr, nc]);
                        grid[nr][nc] = '0';
                    }
                }
            }
        }

        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                if (grid[row][col] === '1') {
                    bfs(row, col);
                    islands++;
                }
            }
        }

        return islands;
    }
}
