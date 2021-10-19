import React from 'react'
import { useState } from 'react'
import './style.css'
import DropdownMenu from '../DropdownMenu'
import dai from './images/dai.png'


export default function AddCollateralModal({showModal, openModal}) {


    const dropdownData = [
        {
            value: 'ETH',
            icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ethereum-ETH-icon.png'
        },
        {
            value: 'USDC',
            icon: 'https://messari.io/asset-images/4515ba15-2719-4183-b0ca-b9255d55b67e/128.png?v=2'
        },
    ]


    const icon = dai;




    const [dropdownSelected, setDropdownSelected] = useState(dropdownData[0])

    const [borrowAsset, setborrowAsset] = useState('');


    const [borrowAmount, setBorrowAmount] = useState('')
    


    return (
        <React.Fragment>

        {showModal ? 
        <div className="pageModalOverlay">

            <div className="borrowPoolWindow">

                <div className="borrowPoolWindowHeader">
                    Provide more collateral

                    <div className="borrowPoolWindowHeaderButton" onClick={openModal}>

                    </div>
                </div>
                <div className="borrowPoolStep">
                    <div className="borrowPoolStepModalLine">
                            <div className="borrowPoolStepModalLineHint">Borrowed amount</div>
                            <div className="borrowPoolStepModalLineValue">200 DOT ($270.00)</div>
                    </div>
                    <div className="borrowPoolStepModalLine">
                            <div className="borrowPoolStepModalLineHint">Locked Collateral</div>
                            <div className="borrowPoolStepModalLineValue">(20%) 200 DOT</div>
                    </div>

                    <div className="borrowPoolStepModalLine borrowPoolStepModalLine2">
                            <div className="borrowPoolStepHint">How much collateral would you like to provide?</div>
                            <div className="borrowPoolStepModalAmount">
                                <div className="borrowPoolStepModalAmountTop">
                                    <div className="borrowPoolStepModalAmountTopLeft">
                                        Amount
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
                                <div className="borrowPoolStepModalLineHint">New locked collateral</div>
                                <div className="borrowPoolStepModalLineValue">(45%) 200 DOT</div>
                            </div>
               

                        <div className="borrowPoolStepModalLineButton button" onClick={openModal}>
                            Provide Collateral
                        </div>

        


                    
                </div>
            </div>
        </div>

        :null}
                
            </React.Fragment>

    )
}
