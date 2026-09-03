class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let empSet = new Set()
        let UniqueSet = new Set([])
        for(let i = 0; i<nums.length; i++){
            empSet = new Set()
            for(let j = i+1; j<nums.length; j++){
                let k = -(nums[i]+nums[j])
                if(empSet.has(k)){
                    let sortedArr = [nums[i],nums[j],k]
                    sortedArr.sort((a,b) => a-b)
                    UniqueSet.add(sortedArr.join(","))
                }
                empSet.add(nums[j])
            }
        }

                return [...UniqueSet].map(item =>
            item.split(",").map(Number)
        );
        
    }
}
