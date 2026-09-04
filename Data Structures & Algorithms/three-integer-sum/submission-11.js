class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let empArr = []
        let sortedArr = nums.sort((a,b) => a-b)
        
        for(let i = 0; i<sortedArr.length; i++){
            if(i>0 && sortedArr[i] == sortedArr[i-1]){
                continue;
            }
            let j = i+1;
            let k = sortedArr.length - 1
            while(j<k){
                let sum = sortedArr[i]+sortedArr[j]+sortedArr[k];
                if(sum > 0){
                    k--;
                }else if(sum < 0){
                    j++;
                }else{
                    empArr.push([
                        sortedArr[i],
                        sortedArr[j],
                        sortedArr[k]
                    ])
                    while(j<k && sortedArr[j] == sortedArr[j+1]){
                        j++;
                    }
                    while(j<k && sortedArr[k] == sortedArr[k-1]){
                        k--;
                    }

                    j++;
                    k--;
                }
            }
        }
        return empArr
    }
}
