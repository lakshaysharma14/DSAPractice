/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0;
    let msum = nums[0];

    for(let i=0;i<nums.length;i++){
        sum = sum + nums[i];

        if(sum > msum)
            msum=sum;
        if(sum < 0)
            sum = 0;
    }
    return msum;
};