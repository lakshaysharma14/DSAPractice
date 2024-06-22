/**
 * @param {number} numRows
 * @return {number[][]}
 */

var genRow = (row) => {
    
    let temprow = [[1]]; // First Element is Always 1
    let ans = 1;

    for(let i=1;i<row;i++){
        ans = ans * (row-i);
        ans = ans/i;
        temprow.push(ans);
    }

    return temprow;
}

var generate = function(numRows) {
    let ans = [[1]];
    for(let i=2;i<=numRows;i++){ // starting from row 2
        let tempRow = genRow(i);
        ans.push(tempRow);
    }
    return ans;
};