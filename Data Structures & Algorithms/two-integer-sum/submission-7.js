class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const data = new Map()
        for(let i = 0; i<nums.length; i++){
            let reminder = target - nums[i]
            if(data.has(reminder)){
                return [data.get(reminder),i]
            }else{
                data.set(nums[i], i)
            }
        }
    }
}
