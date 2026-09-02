class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left=0;
        let right=heights.length-1;
        let max=0;
        while(left<right){
            let h=Math.min(heights[left],heights[right]);
            let w=right-left;
            let cont=h*w;
            max=Math.max(max,cont);

            if(heights[left]<heights[right]){
                left++;
            }
            else{
                right--;
            }
        }
        return max;
    }
}
