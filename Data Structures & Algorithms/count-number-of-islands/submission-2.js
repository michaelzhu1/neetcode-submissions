class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islands = 0;
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ]
        const dfs = (r, c) => {
            const stack = [[r, c]];
            while (stack.length > 0) {
                const [r, c] = stack.pop();
                if (r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === '0') {
                    continue;
                }
                grid[r][c] = '0';
                for (const [dr, dc] of directions) {
                    stack.push([r + dr, c + dc]);
                }
            }
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === '1') {
                    dfs(r, c);
                    islands++;
                }
            }
        }
        return islands;
    }
}
