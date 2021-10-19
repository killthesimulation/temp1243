import React from 'react'
import './style.css'

export default function MarginCallItem({openModal}) {

    const marginCallData = [
        {
            lenderName: 'Dean Elgen',
            lenderUsername: '@gauntlet',
            amountLentDai: '100,000',
            amountLentUsd: '50,000',
            collateralAmountWbtc: '1',
            collateralAmountUsd: '50,000',
            collateralRaio:'50%' 
        }
    ]

    const addMoreCollateral = (data) =>{
        openModal();
    }

    return (
        <React.Fragment>

            {marginCallData.map((items, index) => (
                <div className="lenderItemLine lenderItemLineMc">

                    <div className="lenderItemLineWrapper lenderItemLineWrapperMc">

            <div className="lenderItemLineLeft">
                <div className="lenderItemLineIcon icon">
                
                </div>

                <div className="lenderItemLineName">
                {items.lenderName}
                </div>

                <div className="lenderItemLineUsername">
                {items.lenderUsername}
                </div>

                </div>

                <div className="lenderItemLineRight lenderItemLineRightMagrin">

                
                <div className="lenderItemLineRightItem">

                
                    <div className="lenderItemLineRightItemHint">

                    
                    Amount Lent

                
                    </div>


                    <div className="lenderItemLineRightItemValue">

                    
                    {items.amountLentDai} DAI
                    <span className="lenderItemLineRightItemValueBottom">${items.amountLentUsd}</span>
                
                    </div>

              
                </div>

                <div className="lenderItemLineRightItem">

                
                    <div className="lenderItemLineRightItemHint">

                    
                    Collateral Amount

                
                    </div>


                    <div className="lenderItemLineRightItemValue">

                    
                    {items.collateralAmountWbtc} WBTC
                    <span className="lenderItemLineRightItemValueBottom">${items.collateralAmountUsd}</span>

                
                    </div>

              
                </div>

                <div className="lenderItemLineRightItem">

                
                    <div className="lenderItemLineRightItemHint">

    Collateral Ratio

                
                    </div>


                    <div className="lenderItemLineRightItemValue">

                    
                    {items.collateralRaio}

                
                    </div>

              
                </div>

                
              
                <div className="lenderItemLineRightItem">
                    <div className="lenderItemLineRightItemButton button" onClick={() => addMoreCollateral('data')}>Add More Collateral</div>
                </div>

                </div>
            
                </div>
        </div>
    
                
            ))}
          
        </React.Fragment>
    )
}
