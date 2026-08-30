class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let leftArr = [];
        let rightArr = [];
        let result = [];

        let leftProduct = 1;

        // Left products
        for (let i = 0; i < nums.length; i++) {
            leftArr[i] = leftProduct;
            leftProduct *= nums[i];
        }

        let rightProduct = 1;

        // Right products
        for (let i = nums.length - 1; i >= 0; i--) {
            rightArr[i] = rightProduct;
            rightProduct *= nums[i];
        }

        // Final answer
        for (let i = 0; i < nums.length; i++) {
            result[i] = leftArr[i] * rightArr[i];
        }

        return result;

    }
}
