class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

    // Different lengths cannot be anagrams
    if (s.length !== t.length) {
        return false;
    }

    const empObj = {};

    // Count characters in s
    for (let i = 0; i < s.length; i++) {

        const char = s[i];

        if (empObj[char]) {
            empObj[char]++;
        } else {
            empObj[char] = 1;
        }
    }

    // Check characters in t
    for (let i = 0; i < t.length; i++) {

        const char = t[i];

        // Character doesn't exist in s
        if (!empObj[char]) {
            return false;
        }

        // Decrease the count
        empObj[char]--;

        // More occurrences in t than in s
        if (empObj[char] < 0) {
            return false;
        }
    }

    return true;
}
}
