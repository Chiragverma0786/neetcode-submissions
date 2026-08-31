class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let row = [];
        let column = [];
        let boxes = [];

        for(let i = 0; i<board.length; i++){
            row[i] = new Set();
            column[i] = new Set();
            boxes[i] = new Set();
        }

        for(let i = 0; i<board.length; i++){
            for(let j = 0; j<board[0].length; j++){
                let cell = board[i][j]

                if(cell === "."){
                    continue;
                }
                
                if(row[i].has(cell)){
                    return false;
                }else{
                    row[i].add(cell)
                }

                if(column[j].has(cell)){
                    return false;
                }else{
                    column[j].add(cell)
                }

                let boxindex = 3 * Math.floor(i / 3) + Math.floor(j / 3)
                // parseInt(boxindex)
                if(boxes[boxindex].has(cell)){
                    return false;
                }else{
                    boxes[boxindex].add(cell)
                }
            }
        }
        return true
    }
}
