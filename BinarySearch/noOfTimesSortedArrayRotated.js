const sortedRotatedArray = (nums) => {
    // To find no of times a sorted array is rotated we need to find the index of its min element
    // in sorted array index of min element = 0 ; signifying that array is rotated 0 times.

    let n = nums.length;
    let start = 0;
    let end = n -1;

    while(start <= end){
        
        let mid = start + Math.floor((end - start)/2);
        let nextEle = Math.floor((mid + 1)%n);
        let prevEle = Math.floor((mid + n - 1)%n);

        console.log("Mid:",mid);
        console.log("Next:",nextEle);
        console.log("Prev:",prevEle);


        if(nums[mid] <= prevEle && nums[mid] <= nextEle){
            // this implies this is the min element
            return mid;
        }
        else if(nums[start] <= nums [mid] && nums[mid] <= nums[end]){ 
            // if array is sorted (2 5 6 8 )
            end = mid - 1;
        }
        else {
            // second half is sorted move to other end
            if(nums[mid] <= nums[end])
                end = mid - 1;
            else if(nums[start]<= nums[mid])
                start = mid +1;
        }
    }
}

console.log("no of times sorted array rotated is:");
console.log(sortedRotatedArray([11,12,15,18,2,5,6,8]));
