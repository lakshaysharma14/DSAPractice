//User function Template for javascript


/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution{
    print2largest(arr,n){
        let lar = arr[0];
        let slar = -1;
        
        for(let i=0;i<n;i++){
            if(lar<arr[i]){
                slar = lar;
                lar = arr[i];
            }
                
            if(arr[i]>slar && arr[i]!=lar)
                slar = arr[i];
        }
        return slar;
    }
}