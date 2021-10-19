import React from 'react'
import './style.css'
import { useHistory } from 'react-router-dom'

export default function CreditLinesGrantedItem() {
    const history = useHistory();
    return (
        <React.Fragment>
            <div className="creditLinesGrantedItemLine button" onClick={() => {history.push('/credit-lines-granted-subpage')}}>
                <div className="creditLinesGrantedItemLinePart">
                0xa5acd...
                </div>
                <div className="creditLinesGrantedItemLinePart">
                1,000 DAI
                </div>
                <div className="creditLinesGrantedItemLinePart">
                ETH
                </div>
                <div className="creditLinesGrantedItemLinePart">
                10%
                </div>
                <div className="creditLinesGrantedItemLinePart">
                50%
                </div>
                <div className="creditLinesGrantedItemLinePart">
                50%
                </div>
                <div className="creditLinesGrantedItemLinePart">
                True
                </div>
                <div className="creditLinesGrantedItemLinePart">
                    <div className="creditLinesGrantedItemLinePartButton creditLinesGrantedItemLinePartButtonApprove button">
                        Approve
                    </div>
                </div>
                <div className="creditLinesGrantedItemLinePart">
                    <div className="creditLinesGrantedItemLinePartButton creditLinesGrantedItemLinePartButtonReject button">
                        Reject
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
