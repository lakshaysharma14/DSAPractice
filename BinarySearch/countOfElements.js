const countOfElements = (nums,ele,occurence) => {
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

console.log('No of Times 10 Appears in Following Array :[2,4,10,10,10,18,20]');
let totalOccurence =  countOfElements([2,4,10,10,10,18,20],10,'last') -  countOfElements([2,4,10,10,10,18,20],10,'first') + 1;
console.log(totalOccurence);