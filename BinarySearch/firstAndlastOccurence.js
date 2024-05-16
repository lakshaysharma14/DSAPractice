
const firstAndLastOccurence = (nums,ele,occurence) => {
    let start = 0;
    let end = nums.length - 1;
    let result = -1;

    while(start <= end){
        let mid = start + Math.floor((end-start)/2);
        
        if(nums[mid] == ele){
            if(occurence === 'first'){
                end = mid - 1; // Search in complete left array for first occurence
            }else if(occurence === 'last'){
                start = mid +1; // Search in complete right array for last occurence
            }
            result = mid;
        }
        else if(nums[mid] > ele)
            end = mid - 1;
        else
            start = mid + 1;
    }

    return result;
}

console.log("First Occurence at Index:",firstAndLastOccurence([2,4,10,10,10,18,27],10,'first'));
console.log("Last Occurence at Index:", firstAndLastOccurence([2,4,10,10,10,18,27],10,'last'));