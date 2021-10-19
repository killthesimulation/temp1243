import React from 'react'
import {useState} from 'react'
import './style.css'
import Header from '../../uiElements/Header'
import Footer from '../../uiElements/Footer'
import CreditLinesGrantedSubpageItem from '../../uiElements/CreditLinesGrantedSubpageItem'
import CreditLinesGrantedSubpageModal from '../../uiElements/CreditLinesGrantedSubpageModal'

export default function CreditLinesGrantedSubpage () {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    const [isLoading, setIsLoading] = useState(false);



   //Hide Loading Screen setIsLoading(false);

 

    return (
        <React.Fragment>
            
            <CreditLinesGrantedSubpageModal showModal={showModal} openModal={openModal} />
            <Header isLoading={isLoading} />
            <div className="pageOuter">
                <div className="pageWrapper pageWrapperPadding pageWrapperCreditLines">


                    <div className="CreditLinesGrantedSubpageTopLine">
                        <div className="CreditLinesGrantedSubpageTopLineLeft">

                            <div className="CreditLinesGrantedSubpageTopLineLeftIcon icon">

                                
                                                    
                            </div>

                            <div className="CreditLinesGrantedSubpageTopLineLeftAddress">

                            0xb73...974
                                                    
                            </div>


                        
                        </div>
                        <div className="CreditLinesGrantedSubpageTopLineRight">


                            <div className="dashboardCard dashboardCard2x">

                                    <div className="dashboardCardValue">
                                    32%
                                    </div>

                                    <div className="dashboardCardHint">
                                    Amount borrowed since opening of credit line
                                    </div>

                            </div>

                            <div className="dashboardCard dashboardCard2x">

                                    <div className="dashboardCardValue">
                                    15%
                                    </div>

                                    <div className="dashboardCardHint">
                                    Total lending rate
                                    </div>

                            </div>
                        
                        </div>


                        
                    </div>


                    <div className="CreditLinesGrantedSubpageButtonsLine">
                    
                        <div className="CreditLinesGrantedSubpageButton button">
                        Liquidate
                        </div>
                        <div className="CreditLinesGrantedSubpageButton button">
                        Close Credit Line
                        </div>
                        <div className="CreditLinesGrantedSubpageButton button" onClick={openModal}>
                        Repay
                        </div>
                    </div>
               
               
                    <div className="creditLinesTable">
                        <div className="creditLinesTableTop">
                            <div className="creditLinesTableTopItem creditLinesTableTopItem7x">
                            Borrow Limit
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem7x">
                            Currently
                            Borrowed
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem7x">
                            Interest
                            Rate
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem7x">
                            Ideal
                            Collateral Ratio
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem7x">
                            Current
                            Collateral Ratio
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem7x">
                            Liquidation
                            Threshold
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem7x">
                            Collateral
                            Asset
                            </div>
                        </div>


                        <CreditLinesGrantedSubpageItem />
                        <CreditLinesGrantedSubpageItem />

                    
                
                    </div>
               
                </div>
            </div>
            <Footer />
            
        </React.Fragment>
    )
}
