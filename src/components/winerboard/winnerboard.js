import './winnerboard.css'

const WinnerPopup = ({ winner }) => {
    if (!winner){
        return
    }
    else{
        return (
            <div className="winner-box">
                <div class="popup-content">
                        Winner is
                        <h1>
                            {winner}
                        </h1>
                    <button className='rematch' onClick={() => window.location.reload()}>
                        Wanna Rematch?
                    </button>
                </div>
            </div>
        )
    }
}

export default WinnerPopup;