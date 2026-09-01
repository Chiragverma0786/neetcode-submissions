class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0){
            return 0;
        }

        var MaxCount = 0;
        const setArr = new Set(nums)

        for(let num of setArr){
            if(!setArr.has(num-1)){
                let count = 1;
                let currentNum = num;

                while(setArr.has(currentNum + 1)){
                    count++;
                    currentNum = currentNum + 1
                }

                MaxCount = Math.max(MaxCount, count)
            }
        }

        return MaxCount;
    }
}
