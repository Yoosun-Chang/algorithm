/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let m = mat.length;
    let n = mat[0].length;
    let rows = new Array(m).fill(0);
    let cols = new Array(n).fill(0);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1) {
                rows[i]++;
                cols[j]++;
            }
        }
    }

    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1 && rows[i] === 1 && cols[j] === 1) {
                res++;
            }
        }
    }

    return res;

};

