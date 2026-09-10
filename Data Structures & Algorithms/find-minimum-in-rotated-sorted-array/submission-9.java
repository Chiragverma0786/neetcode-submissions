class Solution {
    public int findMin(int[] nums) {
        int left=0;
        int right=nums.length-1;
        int min=Integer.MAX_VALUE;
        while(left<=right){
            

            

            if(nums[left]<min){
                min=nums[left];
                left++;
            }
            else if(nums[right]<min){
                min=nums[right];
                right--;
            }
            else{
                
                left++;
                 right--;
            }
        }
        return min;
    }
    
}
