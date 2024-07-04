/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Dutch National Flag Algorithm

var sortColors = function(nums) {
    
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while(mid<=high){
        if(nums[mid] == 0){
            let temp = nums[low];
            nums[low] = nums[mid];
            nums[mid] = temp;
            low++;
            mid++;
        }else if(nums[mid] == 2){
            let temp = nums[high];
            nums[high] = nums[mid];
            nums[mid] = temp;
            high--;
        }else{
            mid++;
        }
    }
};