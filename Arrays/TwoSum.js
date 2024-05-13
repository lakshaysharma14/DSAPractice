/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Approach 1 => S.C => O(n) T.C => O(nlogn) + O(n)

var twoSum = function(nums, target) {
    let sarr = [];
    let ans = [];

    // create new array of objects containing num,index
    sarr = nums.map((num,index) => {
        return {num,index};
    })
    // sort array => write comparator function based on what you are passing
    sarr = sarr.sort((a,b) => {
        return a.num - b.num;
    });    

    let i=0,j=sarr.length-1;

    while(i < j ) {
        if(sarr[i].num + sarr[j].num == target){
           ans.push(sarr[i].index);
           ans.push(sarr[j].index);
           break;
        }
        else if(sarr[i].num+sarr[j].num > target){
             j--;
        }
        else{
            i++;
        }
    }
    return ans;
};

// Approach 2 : Use hashmap