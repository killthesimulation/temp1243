import React from 'react'
import { useState } from 'react'
import dai from './images/dai.png'
import compound from './images/compound.png'
import './style.css'

export default function LendPoolDetailsModal({showModal, openModal, lendMoreFunc}) {

    const [borrowAsset, setborrowAsset] = useState('dai')
    const [borrowAmount, setBorrowAmount] = useState('');

    const lendToPool = () => {
        alert("Lend to pool");
        openModal()
    }
    
    const icon = dai;
    const icon2 = compound;
    
    return (
        <React.Fragment>

            {showModal ? 
            <div className="pageModalOverlay">

                <div className="lendPoolWindowSmaller">

                    <div className="lendPoolWindowHeader">
                        Lend

                        <div className="lendPoolWindowHeaderButton" onClick={openModal}>

                        </div>
                    </div>
                    <div className="lendPoolStep">
                        <div className="lendDetailsOwnerLineModal">

                            <div className="lendDetailsOwnerLineLeft">

                                <div className="lendDetailsOwnerIcon"></div>
                                <div className="lendDetailsOwnerName">stani.eth</div>
                                <div className="lendDetailsOwnerUsername">@StaniKulechov</div>

                            </div>

                            <div className="lendDetailsOwnerLineRight">

                                <div className="lendDetailsPoolStatus lendDetailsPoolStatusOrange">
                                    Collecting
                                </div>

                                

                

                            </div>

                            </div>
                        <div className="lendPoolStepModalLine">
                            <div className="lendPoolStepModalLineHint">Lend Rate</div>
                            <div className="lendPoolStepModalLineValue">10%</div>
                        </div>
                        <div className="lendPoolStepModalLine lendPoolStepModalLine2">
                            <div className="lendPoolStepModalLineHint">Maximum you can lend</div>
                            <div className="lendPoolStepModalLineValue">600 DAI</div>
                        </div>
                        <div className="lendPoolStepModalLine borrowPoolStepModalLine3">
                            <div className="lendPoolStepHint">How much would you like to lend?</div>
                            <div className="lendPoolStepModalAmount">
                                <div className="lendPoolStepModalAmountTop">
                                    <div className="lendPoolStepModalAmountTopLeft">
                                        Amount you lend
                                    </div>
                                    <div className="lendPoolStepModalAmountTopRight">
                                        Max: 600
                                    </div>
                                </div>
                                <div className="lendPoolStepModalAmountBottom">
                                    <div className="lendPoolStepModalAmountBottomLeft">
                                    <input type="text" className="lendPoolStepModalAmountBottomLeftField" placeholder="Enter amount" onChange={e => setBorrowAmount(e.target.value)} value={borrowAmount} />
                                    </div>
                                    <div className="lendPoolStepModalAmountBottomRight">
                                    <select style={{backgroundImage: `url(${icon})`}} className="lendPoolAmountDropdown" onChange={e => setborrowAsset(e.target.value)} value={borrowAsset}>
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

                            <div className="lendPoolGreyPad">

                                <div className="lendPoolGreyPadLine">

                                    <div className="lendPoolGreyPadLineHint">
                                    Total Return
                                    </div>

                                    <div className="lendPoolGreyPadLineValue">
                                    -
                                    </div>

                                </div>


                                <div className="lendPoolGreyPadLine">

                                    <div className="lendPoolGreyPadLineHint">
                                    Profit
                                    </div>

                                    <div className="lendPoolGreyPadLineValue">
                                    -
                                    </div>

                                </div>


                                <div className="lendPoolGreyPadLine">

                                    <div className="lendPoolGreyPadLineHint">
                                    Repayment
                                    </div>

                                    <div className="lendPoolGreyPadLineValue">
                                    -
                                    </div>

                                </div>


                                <div className="lendPoolGreyPadLine">

                                    <div className="lendPoolGreyPadLineHint">
                                    Frequency
                                    </div>

                                    <div className="lendPoolGreyPadLineValue">
                                    -
                                    </div>

                                </div>

                                
                                <div className="lendPoolGreyPadLine">

                                    <div className="lendPoolGreyPadLineHint">
                                    Estimated loan end date
                                    </div>

                                    <div className="lendPoolGreyPadLineValue">
                                    -
                                    </div>

                                </div>

                                </div>
                           

                            <div className="lendPoolStepModalLineButton button" onClick={lendToPool}>
                                Lend to pool
                            </div>

            


                        
                    </div>
                </div>
            </div>

            :null}
                    
                </React.Fragment>
    )
}
