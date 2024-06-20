/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// Problem - https://leetcode.com/problems/set-matrix-zeroes/
var setZeroes = function(matrix) {

    let colcheck = 1;

    let n = matrix.length; // rows
    let m = matrix[0].length; // cols
    
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){   
            if(matrix[i][j] == 0){
                matrix[i][0] = 0 ; // marking row
                if(j!=0)
                    matrix[0][j] = 0; // marking col
                else
                    colcheck = 0; // mark for 1st column
            }
        }
    }

    // Step -1 Resetting Matrix Leaving First Row First Column
    for(let i=1;i<n;i++){
        for(let j=1;j<m;j++){
            if(matrix[i][0] == 0 || matrix[0][j] == 0){
                matrix[i][j] = 0;
            }
        }
    }

    // Step -2 Restting First Row
    if(matrix[0][0] == 0){
        for(let j = 0;j<m;j++){
            matrix[0][j] = 0;
        }
    }

    // Step - 3 Resetting First Col
    if(colcheck == 0){
        for(let i = 0;i<n;i++){
            matrix[i][0] = 0;
        }
    }
};