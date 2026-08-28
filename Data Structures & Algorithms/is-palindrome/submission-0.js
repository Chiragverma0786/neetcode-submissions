class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const right = s.toLowerCase().replace(/[^a-z0-9]/g, "")
        const left = right.split('').reverse().join("")

        return right === left;
    }
}
