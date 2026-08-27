class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = new Map();

        for (let num of nums) {
            obj.set(num, (obj.get(num) || 0) + 1);
        }

        let list = [...obj.keys()];

        list.sort((a, b) => obj.get(b) - obj.get(a));

        return list.slice(0, k);
    }
}
