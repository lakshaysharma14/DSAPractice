const largestElement = (arr) => {
    let largestElement = Number.MIN_VALUE;

    for(let i=0;i<arr.length;i++){
        if(largestElement<arr[i])
            largestElement = arr[i];
    }
}

console.log("Largest Element:",largestElement([1,8,7,56,90]));