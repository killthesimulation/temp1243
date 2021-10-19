import React from 'react'
import { useState } from 'react'
import dai from './images/dai.png'
import compound from './images/compound.png'
import './style.css'

export default function BorrowDetailsModal({showModal, openModal}) {

    const [borrowAsset, setborrowAsset] = useState('dai')
    const [borrowAmount, setBorrowAmount] = useState('')
    
    const icon = dai;
    const icon2 = compound;
    
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
                        <div className="borrowPoolStepModalLine">
                            <div className="borrowPoolStepModalLineHint">Interest Due this interval</div>
                            <div className="borrowPoolStepModalLineValue">200 DOT</div>
                        </div>
                        <div className="borrowPoolStepModalLine borrowPoolStepModalLine2">
                            <div className="borrowPoolStepModalLineHint">Interest Repayment Left</div>
                            <div className="borrowPoolStepModalLineValue">700.34 DOT</div>
                        </div>
                        <div className="borrowPoolStepModalLine borrowPoolStepModalLine2">
                            <div className="borrowPoolStepHint">How much would you like to repay?</div>
                            <div className="borrowPoolStepModalAmount">
                                <div className="borrowPoolStepModalAmountTop">
                                    <div className="borrowPoolStepModalAmountTopLeft">
                                        Amount
                                    </div>
                                    <div className="borrowPoolStepModalAmountTopRight">
                                        Repay All: 700.34
                                    </div>
                                </div>
                                <div className="borrowPoolStepModalAmountBottom">
                                    <div className="borrowPoolStepModalAmountBottomLeft">
                                    <input type="text" className="borrowPoolStepModalAmountBottomLeftField" placeholder="Enter the Amount" onChange={e => setBorrowAmount(e.target.value)} value={borrowAmount} />
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


                            </div>
                            <div className="borrowPoolStepModalLine borrowPoolStepModalLine2 borrowPoolStepModalLine3">
                                <div className="borrowPoolStepModalLineHint">New balance owed</div>
                                <div className="borrowPoolStepModalLineValue">500.34 DOT</div>
                            </div>

                            <div className="borrowPoolStepModalLineButton button" onClick={openModal}>
                                Repay
                            </div>

            


                        
                    </div>
                </div>
            </div>

            :null}
                    
                </React.Fragment>
    )
}
