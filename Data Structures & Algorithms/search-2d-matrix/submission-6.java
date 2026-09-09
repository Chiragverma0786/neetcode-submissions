class Solution {
    public boolean binarysearch(int[] matrix,int target){
        int left=0;
        int right=matrix.length-1;
        while(left<=right){
            int mid=(left+right)/2;

            if(matrix[mid]==target){
                return true;
            }
            else if(matrix[mid]<target){
                left=mid+1;
            }
            else{
                right=mid-1;
            }
        }
        return false;
    }
    public boolean searchMatrix(int[][] matrix, int target) {
        int n=matrix.length;
        for(int i=0;i<n;i++){
            if(matrix[i][0]<=target && matrix[i][matrix[i].length-1]>=target){
                return binarysearch(matrix[i],target);
            }
            else{
                continue;
            }
        }
        return false;
    }
}
