// Approach - 1: T.C O(n2) S.C => O(n)+O(no of unique triplets ) 312/313 cases passed

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let n = nums.length;
    let tempset = new Set();
    
    for(let i=0;i<n;i++){
        let hashset = new Set();
        
        for(let j=i+1;j<n;j++){
            
            let third = -1*(nums[i]+nums[j]);
            if(third == -0)
                third = 0;
            
            if(hashset.has(third)){
                let temp = new Array(nums[i],nums[j],third);
                temp.sort((a,b) => a-b);
                tempset.add(JSON.stringify(temp)); // Imp =======> Before Adding in Set in JS we stringified the object because arrays will be compared baseds on ref even if values are same
            }

            hashset.add(nums[j]);
        }
    }   

    let ans = new Array();

    tempset.forEach((triplets)=>{
        const parsed = JSON.parse(triplets);// Imp =======> Before Returning answer we need to convert them back.
        ans.push(parsed);
    })
    
    return ans;
};

// Approach - 2 T.C.(On2) S.C> => O(n) => 313/313 Pased 

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = new Array();
    let n = nums.length;
    nums.sort((a,b) => a-b);
    for(let i=0;i<n;i++){

        if(i > 0 && nums[i] == nums[i-1])
            continue;

        let j = i+1;
        let k = n-1;

        while(j < k){
            let sum = nums[i] + nums[j] + nums[k];

            if(sum<0){
                j++;
            }else if(sum>0){
                k--;
            }else{
                let temp = [nums[i],nums[j],nums[k]];
                ans.push(temp);
                j++;
                k--;
                while(j<k && nums[j]==nums[j-1]) j++;
                while(j<k && nums[k]==nums[k+1]) k--;
            }
        }
    }

    return ans;
};