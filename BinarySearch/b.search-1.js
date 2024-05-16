const binarySearch = (arr,ele) => {
    let start = 0;
    let end = arr.length - 1;

    if(start === end)
        return arr[0] == ele;

    while(start < end){
        let mid = start + Math.floor((end-start)/2);

        if(arr[mid] == ele)
            return mid;

        else if(arr[mid] > ele)
            end = mid - 1;
        
        else
            start = mid + 1;
    }
    return -1;
}

console.log("B.Search:",binarySearch([1,2,3,4,5,6,7],3));