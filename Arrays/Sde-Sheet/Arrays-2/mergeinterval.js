/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    intervals.sort((a,b)=>{
        if(a[0]!=b[0])
            return a[0] - b[0];
        else
            return a[1] - b[1];
    })

    const n = intervals.length;
    
    let ans = [ [intervals[0][0],intervals[0][1]] ];
    
    let prvstart = ans[0][0];
    let prvend = ans[0][1];

    for(let i=1;i<n;i++){
        
        let currstart = intervals[i][0];
        let currend = intervals[i][1];

        if(currstart <= prvend){
            // Merge The Interval 
            let lastele = ans.pop();
            lastele[0] = Math.min(ltele[0],currstart);
            lastele[1] = Math.max(ltele[1],currend);
            
            prvstart = lastele[0];
            prvend = lastele[1];
            
            ans.push(lastele);
        }else {
            // Simply Push the Interval
            prvstart = intervals[i][0];
            prvend = intervals[i][1];
            ans.push([prvstart,prvend])
        } 
    }
    return ans;
};