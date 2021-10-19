import React from 'react'
import { useState } from 'react'
import CreditLinesGrantedItem from '../CreditLinesGrantedItem';
import CreditLinesReceivedItem from '../CreditLinesReceivedItem'
import './creditLinesTabs.css'

export default function CreditLinesTabs({showModal, openModal}) {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }


    return (
        <React.Fragment>


            <div className="creditLinesTabsLineWrapper">
                <div className="creditLinesTabsLine">
                    <div className={toggleState === 1 ? "creditLinesTabItemActive" : "creditLinesTabItem"} onClick={ () => toggleTab(1) }>
                    Received
                    </div>
                    <div className={toggleState === 2 ? "creditLinesTabItemActive" : "creditLinesTabItem"} onClick={ () => toggleTab(2) }>
                    Granted
                    </div>
                    <div className={toggleState === 3 ? "creditLinesTabItemActive" : "creditLinesTabItem"} onClick={ () => toggleTab(3) }>
                    Pending
                    </div>
                </div>
            </div>


            <div className="creditLinesTabsContentWrapper">



                <div className={toggleState === 1 ? "tabsContentActive" : "tabsContent"}>





                <div className="creditLinesAdditionalLine">
                        <div className="creditLinesAdditionalLineButton button" onClick={openModal}>Send a Credit Line</div>
                        <div className="creditLinesAdditionalLineSpacer"></div>
                        <div className="lendTabSearch">
                            <input className="lendTabSearchField" type="text" placeholder="Search" />
                            <div className="lendTabSearchIcon">

                            </div>
                        </div>
                    </div>

                    <div className="creditLinesTable">
                        <div className="creditLinesTableTop">
                            <div className="creditLinesTableTopItem creditLinesTableTopItem6x">
                            Address
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem6x">
                            Borrow Limit
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem6x">
                            Collateral Asset
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem6x">
                            Interest Rate
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem6x">
                            Collateral Ratio
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem6x">
                            Liquidation Threshold
                            </div>
                        </div>


                        <CreditLinesReceivedItem />
                        <CreditLinesReceivedItem />

                    
                
                    </div>



          

                </div>

                <div className={toggleState === 2 ? "tabsContentActive" : "tabsContent"}>


                    

                <div className="creditLinesAdditionalLine">
                        <div className="creditLinesAdditionalLineButton button" onClick={openModal}>Send a Credit Line</div>
                        <div className="creditLinesAdditionalLineSpacer"></div>
                        <div className="lendTabSearch">
                            <input className="lendTabSearchField" type="text" placeholder="Search" />
                            <div className="lendTabSearchIcon">

                            </div>
                        </div>
                    </div>

                    <div className="creditLinesTable">
                        <div className="creditLinesTableTop">
                            <div className="creditLinesTableTopItem creditLinesTableTopItem6x">
                            Address
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem6x">
                            Borrow Limit
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem6x">
                            Collateral Asset
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem6x">
                            Interest Rate
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem6x">
                            Collateral Ratio
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem6x">
                            Liquidation Threshold
                            </div>
                        </div>


                        <CreditLinesReceivedItem />
                        <CreditLinesReceivedItem />

                    
                
                    </div>



                

                </div>

                <div className={toggleState === 3 ? "tabsContentActive" : "tabsContent"}>



                <div className="creditLinesAdditionalLine">
                    

                    <div className="lendTabSearch">
                        <input className="lendTabSearchField" type="text" placeholder="Search" />
                        <div className="lendTabSearchIcon">

                        </div>
                    </div>
                </div>

                <div className="creditLinesTable">
                    <div className="creditLinesTableTop">
                        <div className="creditLinesTableTopItem creditLinesTableTopItem9x">
                        Address
                        </div>
                        <div className="creditLinesTableTopItem creditLinesTableTopItem9x">
                        Borrow Limit
                        </div>
                        <div className="creditLinesTableTopItem creditLinesTableTopItem9x">
                        Collateral Asset
                        </div>
                        <div className="creditLinesTableTopItem creditLinesTableTopItem9x">
                        Interest Rate
                        </div>
                        <div className="creditLinesTableTopItem creditLinesTableTopItem9x">
                        Collateral Ratio
                        </div>
                        <div className="creditLinesTableTopItem creditLinesTableTopItem9x">
                        Liquidation Threshold
                        </div>
                        <div className="creditLinesTableTopItem creditLinesTableTopItem9x">
                        Autoliquidation
                        </div>
                        <div className="creditLinesTableTopItem creditLinesTableTopItem9x">
                        
                        </div>
                        <div className="creditLinesTableTopItem creditLinesTableTopItem9x">
                        
                        </div>
                    </div>

                    <CreditLinesGrantedItem />
                    <CreditLinesGrantedItem />
            
                </div>
                    

                </div>

                </div>

            
        </React.Fragment>
    )
}
