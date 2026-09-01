class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        // then for every position, find out what position can be reached by both pacific and atlantic coast
        // but the water can only flow to higher neighbors
        // the intersection of positions that can be reached are the result
        const ROWS = heights.length;
        const COLS = heights[0].length;
        const directions = [[0,1],[0,-1],[1,0],[-1,0]];
        
        const pacificCoast = [];
        const atlanticCoast = [];
        const pacificVisited = new Set();
        const atlanticVisited = new Set();
        
        // get all the positions of both pacific coast and atlantic coast
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                if (row === 0 || col === 0) {
                    pacificCoast.push([row, col]);
                    pacificVisited.add(`${row},${col}`);
                } 
                if (row === ROWS - 1 || col === COLS - 1) {
                    atlanticCoast.push([row, col]);
                    atlanticVisited.add(`${row},${col}`);
                }
            }
        }

        while (pacificCoast.length) {
            const [r, c] = pacificCoast.shift();
            for (const [dr, dc] of directions) {
                const nr = dr + r;
                const nc = dc + c;
                if (!pacificVisited.has(`${nr},${nc}`) && nr >= 0 && nc >= 0 && nr < ROWS && nc < COLS && heights[nr][nc] >= heights[r][c]) {
                    pacificCoast.push([nr, nc]);
                    pacificVisited.add(`${nr},${nc}`)
                }
            }
        }
        while (atlanticCoast.length) {
            const [r, c] = atlanticCoast.shift();
            for (const [dr, dc] of directions) {
                const nr = dr + r;
                const nc = dc + c;
                if (!atlanticVisited.has(`${nr},${nc}`) && nr >= 0 && nc >= 0 && nr < ROWS && nc < COLS && heights[nr][nc] >= heights[r][c]) {
                    atlanticCoast.push([nr, nc]);
                    atlanticVisited.add(`${nr},${nc}`);
                }
            }
        }
        const result = [];
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                if (pacificVisited.has(`${row},${col}`) && atlanticVisited.has(`${row},${col}`)) {
                    result.push([row, col]);
                }
            }
        }
        return result;
    }
}
