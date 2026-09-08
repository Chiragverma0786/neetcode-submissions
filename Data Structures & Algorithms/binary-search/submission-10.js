class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let i = 0;
        let j = nums.length - 1;
        while(i<=j){
            let center = Math.floor((i+j)/2);
            if(nums[center] == target){
                return center
            }else if(nums[center]<target){
                i = center+1
            }else{
                j=center-1
            }
        }
        return -1;
    }
}
