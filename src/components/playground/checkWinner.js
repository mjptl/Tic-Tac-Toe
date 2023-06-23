export const checkWinner = (matrix, cell, turn) => {
    var row = cell['row']
    var col = cell['column']

    var result = false
    // check horizon rows
    for(let i=0; i<3; i++){
        if(matrix[row][i] == (turn ? 'X': 'O')){
            result = turn ? 'X': 'O'
        }
        else{
            result = false
            break
        }
    }
    if(result){
        return result
    }

    // check vertical columns
    for(let i=0; i<3; i++){
        if(matrix[i][col] == (turn ? 'X': 'O')){
            result = turn ? 'X': 'O'
        }
        else{
            result = false
            break
        }
    }
    if(result){
        return result
    }

    // check matrix diagonal
    for(let i=0; i<3; i++){
        if(matrix[i][i] == (turn ? 'X': 'O')){
            result = turn ? 'X': 'O'
        }
        else{
            result = false
            break
        }
    }
    if(result){
        return result
    }

    // check matrix diagonal
    for(let i=0; i<3; i++){
        if(matrix[2-i][i] == (turn ? 'X': 'O')){
            result = turn ? 'X': 'O'
        }
        else{
            result = false
            break
        }
    }
    if(result){
        return result
    }
    return false
}