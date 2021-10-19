import React from 'react'
import './style.css'
import { useHistory } from 'react-router-dom'

export default function CreditLinesReceivedItem() {

    const history = useHistory();

    return (
        <React.Fragment>
            <div className="creditLinesReceivedItemLine button" onClick={() => {history.push('/credit-lines-granted-subpage')}}>
                <div className="creditLinesReceivedItemLinePart">
                0xa5acd...
                </div>
                <div className="creditLinesReceivedItemLinePart">
                1,000 DAI
                </div>
                <div className="creditLinesReceivedItemLinePart">
                ETH
                </div>
                <div className="creditLinesReceivedItemLinePart">
                10%
                </div>
                <div className="creditLinesReceivedItemLinePart">
                50%
                </div>
                <div className="creditLinesReceivedItemLinePart">
                50%
                </div>
                
            </div>
        </React.Fragment>
    )
}
