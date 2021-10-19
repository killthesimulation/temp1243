import React from 'react'
import { useState } from 'react'
import dai from './images/dai.png'

export default function CreditLinesGrantedSubpageModal({showModal, openModal}) {
    const [borrowAsset, setborrowAsset] = useState('dai')
    const [borrowAmount, setBorrowAmount] = useState('')
    const icon = dai;
    return (
        <React.Fragment>
        {showModal ?
            <div className="pageModalOverlay">

                <div className="borrowPoolWindow">

                    <div className="borrowPoolWindowHeader">
                        Repay

                        <div className="borrowPoolWindowHeaderButton" onClick={openModal}>

                        </div>
                    </div>


                    <div className="borrowPoolStep">

                    <div className="borrowPoolStepModalAmount">
                                <div className="borrowPoolStepModalAmountTop">
                                    <div className="borrowPoolStepModalAmountTopLeft">
                                        Amount
                                    </div>
                                    <div className="borrowPoolStepModalAmountTopRight">
                                        
                                    </div>
                                </div>
                                <div className="borrowPoolStepModalAmountBottom">
                                    <div className="borrowPoolStepModalAmountBottomLeft">
                                    <input type="text" className="borrowPoolStepModalAmountBottomLeftField" placeholder="Amount you want to repay" onChange={e => setBorrowAmount(e.target.value)} value={borrowAmount} />
                                    </div>
                                    <div className="borrowPoolStepModalAmountBottomRight">
                                    <select style={{backgroundImage: `url(${icon})`}} className="borrowPoolAmountDropdown" onChange={e => setborrowAsset(e.target.value)} value={borrowAsset}>
                                            <option value="dai1">
                                        
                                                DAI 1
                                            </option>
                                            <option value="dai2">
                                                
                                                DAI 2
                                            </option>
                                            <option value="dai3">
                                                
                                                DAI 3
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="lendPoolStepModalLineButton button" onClick={openModal}>
                            Execute
                            </div>
                    </div>
                </div>

            </div>
            : null
        }
        
    </React.Fragment>

    )
}
