class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const data = new Set(nums)

        return data.size !== nums.length;
    }
}
