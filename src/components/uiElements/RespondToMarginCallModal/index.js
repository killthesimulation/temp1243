import React from 'react'
import { useState } from 'react'
import './style.css'


export default function RespondToMarginCallModal({showModal, openModal}) {
    const [amount, setAmount] = useState('')
    const [saveAccount, setSaveAccount] = useState(false)
    const [transferSavingAccount, settransferSavingAccount] = useState(false)

    return (
        <React.Fragment>
        {showModal ?
            <div className="pageModalOverlay">

                <div className="borrowPoolWindow">

                    <div className="borrowPoolWindowHeader">
                        Respond to a Margin Call



                        <div className="borrowPoolWindowHeaderButton" onClick={openModal}>

                        </div>
                    </div>


                    <div className="borrowPoolStep">

                    <div className="borrowPoolStepModalLine">
                            <div className="borrowPoolStepModalLineHint">Lender</div>
                            <div className="borrowPoolStepModalLineValue">Name</div>
                        </div>

                        <div className="borrowPoolStepModalLine">
                            <div className="borrowPoolStepModalLineHint">Amount Lent</div>
                            <div className="borrowPoolStepModalLineValue">100 DAI</div>
                        </div>

                        <div className="borrowPoolStepModalLine">
                            <div className="borrowPoolStepModalLineHint">Collateral Amount</div>
                            <div className="borrowPoolStepModalLineValue">$50</div>
                        </div>

                        <div className="borrowPoolStepModalLine">
                            <div className="borrowPoolStepModalLineHint">Current Collateral Ratio</div>
                            <div className="borrowPoolStepModalLineValue">50%</div>
                        </div>
                        <div className="borrowPoolStepModalLine">
                            <div className="borrowPoolStepModalLineHint">Ideal Collateral Ratio</div>
                            <div className="borrowPoolStepModalLineValue">73%</div>
                        </div>
                        <div className="borrowPoolStepModalLine">
                            <div className="borrowPoolStepModalLineHint">Amount Required to close Margin Call</div>
                            <div className="borrowPoolStepModalLineValue">73%</div>
                        </div>

                    <div className="borrowPoolStepModalAmount">
                                <div className="borrowPoolStepModalAmountTop">
                                    <div className="borrowPoolStepModalAmountTopLeft">
                                        Collateral Amount
                                    </div>
                                    <div className="borrowPoolStepModalAmountTopRight">
                                        
                                    </div>
                                </div>
                                <div className="borrowPoolStepModalAmountBottom">
                                    <div className="borrowPoolStepModalAmountBottomLeft">
                                    <input type="text" className="borrowPoolStepModalAmountBottomLeftField" placeholder="Amount you want to repay" onChange={e => setAmount(e.target.value)} value={amount} />
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="borrowPoolStepModalLine borrowPoolStepModalLineMargin">
                            <div className="borrowPoolStepModalLineHint">Transfer from your Saving Account</div>
                            <div className="borrowPoolStepModalLineValue"> <input type="checkbox" checked={saveAccount}  onChange={(e) => setSaveAccount(prev => !prev)} /></div>
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
