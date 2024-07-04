/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const reverse = (row,n) => {
    let p1=0;let p2 =n-1;
    while(p1 < p2){
        let t = row[p1];
        row[p1] = row[p2];
        row[p2] = t;
        p1++;
        p2--;
    }
}

var rotate = function(matrix) {
    let n = matrix.length;

    // Transpose Matrix     
    for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }

    // Reverse Rows
    for(let i=0;i<n;i++){
        reverse(matrix[i],n);
    }
};