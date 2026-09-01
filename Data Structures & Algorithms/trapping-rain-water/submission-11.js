class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length
        let maxCount = 0;
        let left = 0;
        let rightArr = new Array(n)

        rightArr[n - 1] = height[n - 1];

        for(let i = n - 2; i>=0; i--){
            rightArr[i] = Math.max(rightArr[i+1], height[i])
        }

        for(let i = 1; i<height.length-1; i++){
            left = Math.max(left, height[i - 1]);

            let right = rightArr[i+1];

            const minHeight = Math.min(left,right) - height[i]

            if(minHeight > 0){
                maxCount += minHeight
            }
        }

        return maxCount;
    }
}