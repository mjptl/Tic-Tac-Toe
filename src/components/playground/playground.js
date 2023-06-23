import React, { useState, createContext, useContext, useEffect } from "react";
import "./style.css"
import cross from "./cross.png"
import zero from "./zero.png"
import { checkWinner } from "./checkWinner";

const MessageContext =  createContext();


const PlayGround = ({ turn, setTurn, setWinner }) => {
    var [matrix, setMatrix] = useState(Array.from({length: 3},()=> Array.from({length: 3}, () => null)));
    
    const updateMatrix = (index, value) => {
        var row = Math.floor(index / 3)
        var column = index % 3
        let copy = [...matrix]
        copy[row][column] = value;
        setMatrix(copy);
        setTurn(!turn); // change turn after updating the matrix

        let result = checkWinner(matrix, {row, column}, turn)
        if(result){
            setWinner(result);
        }
    };

    return (
        <MessageContext.Provider value={ {turn, updateMatrix} }>
            <div className="main-playground">
                <table className="main-table">
                    <tbody>
                        {
                            // Following code addes rows into table with row
                            // There will be 3 rows (Matrix of Array(3))
                            // Each row contains array of lenght 3, row props value is array(3) object.
                            matrix.map((row, id)=> <Boxrow row={row} key={id} row_index={id}/>)
                        }
                    </tbody>
                </table>
            </div>
        </MessageContext.Provider>
    );
}


const Boxrow = ({ row, row_index }) => {
    return (
        <tr>
            {
            // Boxrow is row of 3 cells called Box
            // Box represents single clickable cell can be O or X or empty at a time 
            // row_index is cell number from 0 to 8 used for cell identification
            row.map((cell, id) => (
                <td>
                    <Box val={cell} key={id} index={(row_index * 3) + id}/>
                </td>
            ))}
        </tr>
    )
}



const Box = ({ val, index }) => {
    
    const context = useContext(MessageContext);
    const turn = context.turn ? 'X' : 'O'

    const onCellClick = () => {
        
        // do nothing if value is already set
        if(val){ return }

        console.log(`Cell Ckicked: [${index+1}]`);
        context.updateMatrix(index, turn)
    }
    
    const imgSrc = val == 'X' ? cross : val == 'O' ? zero : null;
    return (
        <div className="box" onClick={onCellClick}>
            {imgSrc && <img src={imgSrc} id='box_img'/>}
        </div>
    )
} 

export default PlayGround