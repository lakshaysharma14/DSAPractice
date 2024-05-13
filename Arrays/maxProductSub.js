/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let n = nums.length; 
    let pref = 1;
    let suff = 1;
    let mxprod = -100000;
    
    for(let i=0;i<n;i++){
      pref = pref * nums[i];
      suff = suff * nums[n-i-1];
  
      mxprod = Math.max(mxprod,Math.max(pref,suff));
  
      if(pref == 0) pref = 1;
      if(suff == 0) suff = 1;
    }
  
    return mxprod;
  };