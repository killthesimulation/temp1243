import React from 'react'
import './style.css'

export default function SendCreditLineModal({showModal, openModal, creditLineAddr, setCreditLineAddr, borrowLimit, setBorrowLimit, borrowAsset, setBorrowAsset, collateralRatio, setCollateralRatio, collateralAsset, setCollateralAsset, liquidationThreshold, setLiquidationThreshold, interestRate, setInterestRate, autoliquidate, setAutoliquidate, sendCreditLineRequest}) {
    return (
        <React.Fragment>
        {showModal ?
            <div className="pageModalOverlay">

                <div className="borrowPoolWindow">

                    <div className="borrowPoolWindowHeader">
                        Request a line of Credit

                        <div className="borrowPoolWindowHeaderButton" onClick={openModal}>

                        </div>
                    </div>


                    <div className="borrowPoolStep">

                        <div className="sendCreditLineModalAddr">
                            <div className="sendCreditLineModalAddrHint">
                                Credit Line Lender Address
                            </div>
                            <input type="text" className="sendCreditLineModalAddrInput" value={creditLineAddr} onChange={e => {setCreditLineAddr(e.target.value)}} placeholder="Enter the blockchain address" />
                        </div>

                        <div className="sendCreditLineModalLinesWrapper">

                        <div className="sendCreditLineModalWrapper">
                            <div className="sendCreditLineModalHint">
                            Borrow Limit
                            </div>
                            <input type="text" className="sendCreditLineModalInput" value={borrowLimit}  onChange={e => {setBorrowLimit(e.target.value)}} />
                        </div>

                        <div className="sendCreditLineModalWrapper">
                            <div className="sendCreditLineModalHint">
                            Borrow Asset
                            </div>
                            <input type="text" className="sendCreditLineModalInput" value={borrowAsset} onChange={e => {setBorrowAsset(e.target.value)}} />
                        </div>


                        <div className="sendCreditLineModalWrapper">
                            <div className="sendCreditLineModalHint">
                            Collateral Ratio
                            </div>
                            <input type="text" className="sendCreditLineModalInput" value={collateralRatio} onChange={e => {setCollateralRatio(e.target.value)}} />
                        </div>

                        <div className="sendCreditLineModalWrapper">
                            <div className="sendCreditLineModalHint">
                            Collateral Asset
                            </div>
                            <input type="text" className="sendCreditLineModalInput" value={collateralAsset} onChange={e => {setCollateralAsset(e.target.value)}} />
                        </div>

                        <div className="sendCreditLineModalWrapper">
                            <div className="sendCreditLineModalHint">
                            Liquidation Threshold
                            </div>
                            <input type="text" className="sendCreditLineModalInput" value={liquidationThreshold} onChange={e => {setLiquidationThreshold(e.target.value)}} />
                        </div>

                        <div className="sendCreditLineModalWrapper">
                            <div className="sendCreditLineModalHint">
                            Interest Rate
                            </div>
                            <input type="text" className="sendCreditLineModalInput" value={interestRate} onChange={e => {setInterestRate(e.target.value)}} />
                        </div>

                        <div className="sendCreditLineModalWrapper sendCreditLineModalWrapperBig">
                            <div className="sendCreditLineModalHint">
                            Autoliquidate
                            </div>
                            <input type="text" className="sendCreditLineModalInput" value={autoliquidate} onChange={e => {setAutoliquidate(e.target.value)}} />
                        </div>


                        </div>

                        <div className="borrowPoolStepModalLineButton button" onClick={sendCreditLineRequest}>
                            Send Credit Line Request
                        </div>






                   </div>
                </div>

            </div>
            : null
        }
        
    </React.Fragment>
    )
}
