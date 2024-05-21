/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const findMinElementIndex = (nums,target) => {
    let n = nums.length;
    let start = 0;
    let end = n -1;

    while(start <= end){
        
        let mid = start + Math.floor((end - start)/2);
        let nextEle = Math.floor((mid + 1)%n);
        let prevEle = Math.floor((mid + n - 1)%n);

        // console.log("Start:",start);
        // console.log("End:",end);
        // console.log("Mid:",mid);
        // console.log("Next:",nextEle);
        // console.log("Prev:",prevEle);
        // console.log("\n");


        if(nums[mid] <= nums[prevEle] && nums[mid] <= nums[nextEle]){
            // this implies this is the min element
            
            return mid;
        }
        else if(nums[start] <= nums[mid] && nums[mid] <= nums[end]){ 
            // if array is sorted (2 5 6 8 )
            console.log("here");
            end = mid - 1;
        }
        else {
            // second half is sorted move to other end
            if(nums[mid] <= nums[end]){
                console.log("here 1\n");
                end = mid - 1;
            }
            else if(nums[start]<= nums[mid]){
                console.log("here 2\n");
                start = mid +1;
            }
        }
    }
}

const binarySearch = (nums,target,start,end) => {
    
    while(start<=end){
        
        let mid = start + Math.floor((end-start)/2);

        if(nums[mid] == target){
            return mid;
        }else if(nums[mid] < target){
            start = mid+1;
        }else {
            end = mid -1;
        }

    }
    return -1;
}

var search = function(nums, target) {
    const indexOfMinEle = findMinElementIndex(nums,target);
    
    if(nums[indexOfMinEle] == target)
        return indexOfMinEle;
    else{
        const leftSearchRes = binarySearch(nums,target,0,indexOfMinEle-1);
        const rightSearchRes = binarySearch(nums,target,indexOfMinEle+1,nums.length-1);
        
        if(leftSearchRes == -1 && rightSearchRes == -1)
            return -1;
        else if(leftSearchRes!= -1)
            return leftSearchRes;
        else
            return rightSearchRes;
    }
};