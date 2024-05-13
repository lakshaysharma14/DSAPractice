// Approach(Prefix+Suffix) - 1 => T.C -> O(n) and S.C -> O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
  
    let prefix = new Array(n);
    let suffix = new Array(n);
    let op = new Array(n);
  
    prefix[0] = nums[0];
    suffix[n-1] = nums[n-1];
   
    // Ist Pass => Prefix Computation
    for(let i=1;i<n;i++){
      prefix[i] = prefix[i-1]*nums[i];
    }
  
    // IInd Pass => Suffix Computation
    for(let i=n-2;i>=0;i--){
      suffix[i] = suffix[i+1]*nums[i];
    }
  
    // IIIrd Pass => Computing Op Array
    for(let i=0;i<n;i++){
      if(i-1 < 0){
          op[i] = 1*suffix[i+1];
      }else if(i+1 == n){
          op[i] = prefix[i-1] *1;
      }else{
          op[i] = prefix[i-1]*suffix[i+1];
      }
    }
    return op;
};

// Approach(Prefix+Suffix) - 2 => T.C -> O(n) and S.C -> O(1)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let n = nums.length;
  let op = new Array(n);
  let prefix = 1;
  let suffix = 1;
 
  // # Ist Pass => Computing Prefix in O/P Array Without Including Number at index = i
  
  // # There is nothing before index 0 -> so we take 1
  op[0] = 1; 

  // # So at Index i O/p Array will contain prouct of number till 0 to i-1
  /*
    Eg: 
    i = 0; => 1(by default)
    i = 1  => product of number till i=0
    i = 2  => i0*i1;
    i = 3  => i0*i1*i2;

  */

  for(let i=1;i<n;i++){
    op[i] = prefix*nums[i-1];
    prefix = prefix*nums[i-1];
  }
  
  // IInd Pass => Computing Mult of Prefix * Suffix in O/P Array
  suffix = nums[n-1]; // So initial value will start always from last index of array 

  for(let i=n-2;i>=0;i--){
    op[i] = suffix * op[i];
    suffix = suffix * nums[i];
  }
  return op;
};