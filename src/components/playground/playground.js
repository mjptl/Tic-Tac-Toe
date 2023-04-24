import React from "react";
import "./style.css"

const PlayGround = (props) => {

    const rows = [0,1,2].map((id)=> <Boxrow key={id} id={id}/> );

    return (
        <div className="main-playground">
            <table className="main-table">
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}

const Boxrow = (props) => {
    let columns = [0,1,2].map((id) => <td key={id}></td>)
    return (
        <tr>
            {columns}
        </tr>
    )
}

export default PlayGround