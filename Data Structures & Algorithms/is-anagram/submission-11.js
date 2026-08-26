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

    for(let i = 0; i<s.length; i++){
        if(empObj[s[i]]){
            empObj[s[i]]++;
        }else{
            empObj[s[i]] = 1
        }
    }

    for(let i = 0; i<t.length; i++){
        if(empObj[t[i]]){
            empObj[t[i]]--;
        }else{
            empObj[t[i]] = 1
        }
    }
    if(Object.values(empObj).every(value => value === 0)){
        return true
    }
    return false
    }
}
