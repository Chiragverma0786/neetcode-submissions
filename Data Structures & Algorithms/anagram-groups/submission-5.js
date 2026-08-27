class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let Obj = new Map();

        for(let str of strs){
            let key = str.split("").sort().join("")
            if(!Obj.has(key)){
                Obj.set(key, []);
            }
                Obj.get(key).push(str);
        }

        return [...Obj.values()]
    }
}
