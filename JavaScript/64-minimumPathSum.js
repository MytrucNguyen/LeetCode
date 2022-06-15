/**
 * We start at the top left corner of the grid and we keep track of the minimum path sum to each cell
 * in a table. 
 * 
 * The table is initialized with Infinity for each cell except for the top left corner which is
 * initialized with the value of the top left corner of the grid. 
 * 
 * We then iterate through the grid and for each cell, we update the minimum path sum to the cell below
 * and to the right of the current cell. 
 * 
 * We do this by comparing the minimum path sum to the current cell with the minimum path sum to the
 * cell below and to the right of the current cell plus the value of the current cell. 
 * 
 * We then return the minimum path sum to the bottom right corner of the grid.

 */
const minPathSum = (grid) => {
    let m = grid.length;
    let n = grid[0].length;
    let table = new Array(m).fill().map(() => new Array(n).fill(Infinity));
    table[0][0] = grid[0][0];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i < m - 1) {
                table[i + 1][j] = Math.min(table[i][j] + grid[i + 1][j], table[i + 1][j]);
            }
            if (j < n - 1) {
                table[i][j + 1] = Math.min(table[i][j] + grid[i][j + 1], table[i][j + 1]);
            }
        }
    }

    return table[m - 1][n - 1];
}

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))