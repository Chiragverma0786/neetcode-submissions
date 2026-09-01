class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const data = height;
        const n = data.length;

        let MaxCount = 0;
        let left = 0;

        const rightMax = new Array(n);

        rightMax[n - 1] = data[n - 1];

        for (let i = n - 2; i >= 0; i--) {
            rightMax[i] = Math.max(rightMax[i + 1], data[i]);
        }

        for (let i = 1; i < n - 1; i++) {
            left = Math.max(left, data[i - 1]);

            const right = rightMax[i + 1];

            const minHeight = Math.min(left, right) - data[i];

            if (minHeight > 0) {
                MaxCount += minHeight;
            }
        }

        return MaxCount;
    }
}