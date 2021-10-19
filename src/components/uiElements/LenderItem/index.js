import React from 'react'
import './style.css'

export default function LenderItem() {
    return (
        <div className="lenderItemLine">
            <div className="lenderItemLineWrapper">
                <div className="lenderItemLineLeft">
                    <div className="lenderItemLineIcon icon">
                    
                    </div>

                    <div className="lenderItemLineName">
                    Dean Eigen
                    </div>

                    <div className="lenderItemLineUsername">
                    @gauntlet
                    </div>

                    </div>

                    <div className="lenderItemLineRight">

                    <div className="lenderItemLinePercent">
                    (5%)
                    </div>

                    <div className="lenderItemLineValue">
                    45,033.22 DAI
                    </div>

                
                    </div>
                </div>
        </div>
    )
}
