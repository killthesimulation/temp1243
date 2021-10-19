import React from 'react'
import {useState} from 'react'
import Footer from '../../uiElements/Footer'
import Header from '../../uiElements/Header'
import BorrowDetailsTabs from '../../uiElements/Tabs/BorrowDetailsTabs'
import PoolHistoryItem from '../../uiElements/PoolHistoryItem'
import { useHistory } from 'react-router-dom'
import './style.css'
import BorrowDetailsModal from '../../uiElements/BorrowDetailsModal'
import AddCollateralModal from '../../uiElements/AddCollateralModal'
import MarginCallItem from '../../uiElements/MarginCallItem'
import RespondToMarginCallModal from '../../uiElements/RespondToMarginCallModal'



export default function BorrowPoolDetailsGrace() {

    const history = useHistory();
    const [showModal, setShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

   //Hide Loading Screen setIsLoading(false);

 

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    const [showModal2, setShowModal2] = useState(false)

    const openModal2 = () => {
        setShowModal2(prev => !prev)
    }

    const [showModal3, setShowModal3] = useState(false)

    const openModal3 = () => {
        setShowModal3(prev => !prev)
    }


    return (
        <React.Fragment>
            <AddCollateralModal showModal={showModal2} openModal={openModal2} />
             <BorrowDetailsModal showModal={showModal} openModal={openModal} />
             <RespondToMarginCallModal showModal={showModal3} openModal={openModal3} />
             <Header isLoading={isLoading} />
            <div className="pageOuter">
                <div className="pageWrapper">
                    <div className="borrowDetailsLeftPart">
                        <div onClick={() => history.push('/dashboard')} className="borrowDetailsBackLine button">
                            <div className="borrowDetailsBackLineIcon">
                            
                            </div>
                            Back
                        </div>
                    
                        <div className="borrowDetailsOwnerLine">

                            <div className="borrowDetailsOwnerLineLeft">

                                <div className="borrowDetailsOwnerIcon"></div>
                                <div className="borrowDetailsOwnerName">stani.eth</div>
                                <div className="borrowDetailsOwnerUsername">@StaniKulechov</div>
                            
                            </div>

                            <div className="borrowDetailsOwnerLineRight">

                                <div className="borrowDetailsPoolStatus borrowDetailsPoolStatusRed">
                                    Grace Period
                                </div>

                          

                                <div className="borrowDetailsPoolDate">
                                    Pool created on Aug 3, 2020
                                </div>
                            
                            </div>

                        </div>
                    
                        <div className="borrowDetailsMainTitle">
                            Actions you can take
                        </div>

                        <div className="borrowDetailsRepayArea">

                            <div className="borrowDetailsRepayAreaTitle">
                                Make a repayment
                            </div>

                            <div className="borrowDetailsRepayAreaButton button"  onClick={openModal}>
                                Repay
                            </div>

                            <div className="borrowDetailsRepayAreaDescription">
                                Repayment period ends 3 Aug, 2020 at 12:34pm
                            </div>

                         

                            <div className="borrowDetailsRepayAreaSpacerLine">
                                
                            </div>

                            <div className="borrowDetailsRepayAreaWarning">

                                <div className="borrowDetailsRepayAreaWarningIcon icon">
                                
                                </div>

                                In case repayment is not made until the period ends, your collateral will be liquidated.
                                
                            </div>

                        </div>


                        <div className="borrowDetailsMainTitle">
                            Margin Calls
                        </div>

                        <MarginCallItem openModal={openModal3} />

                        <BorrowDetailsTabs />

                    </div>








                    <div className="borrowDetailsRightPart">
                        <div className="borrowDetailsPoolArea">
                            <div className="borrowDetailsPoolAreaTitle">
                                Pool Details
                            </div>



                            <div className="borrowDetailsPoolLine">
                                <div className="borrowDetailsPoolLineHint">
                                Borrowing Rate
                                </div>
                                <div className="borrowDetailsPoolLineValue">
                                10%
                                </div>
                            </div>


                            <div className="borrowDetailsPoolLine">
                                <div className="borrowDetailsPoolLineHint">
                                Borrowed Amount
                                </div>
                                <div className="borrowDetailsPoolLineValue">
                                1,000 DOT
                                </div>
                            </div>



                            <div className="borrowDetailsPoolLine">
                                <div className="borrowDetailsPoolLineHint">
                                Locked Collateral
                                </div>
                                <div className="borrowDetailsPoolLineValue">
                                (20%) 200 DOT
                                </div>
                            </div>


                            <div className="borrowDetailsPoolLine">
                                <div className="borrowDetailsPoolLineHint">
                                Remaining Loan Period
                                </div>
                                <div className="borrowDetailsPoolLineValue">
                                12 weeks
                                </div>
                            </div>


                            <div className="borrowDetailsPoolLine">
                                <div className="borrowDetailsPoolLineHint">
                                Repayment progress
                                </div>
                                <div className="borrowDetailsPoolLineValue">

                                    34%
                                    <div className="borrowDetailsPoolBarOuter">
                                        <div style={{width: '34%'}} className="borrowDetailsPoolBarInner"></div>
                                    </div>
                                </div>
                            </div>


                            <div className="borrowDetailsPoolLine">
                                <div className="borrowDetailsPoolLineHint">
                                Next Repayment
                                </div>
                                <div className="borrowDetailsPoolLineValue">
                                200 DOT
                                </div>
                            </div>



                            <div className="borrowDetailsPoolLine">
                                <div className="borrowDetailsPoolLineHint">
                                Next Repayment Date
                                </div>
                                <div className="borrowDetailsPoolLineValue">
                                30th Jan 2021
                                </div>
                            </div>



                            <div className="borrowDetailsPoolLine borrowDetailsPoolLineButtons">


                                <div className="borrowDetailsPoolLineButton borrowDetailsPoolLineButtonRepay button" onClick={openModal}>

                                    Repay
                                
                                </div>


                                <div className="borrowDetailsPoolLineButton borrowDetailsPoolLineButtonAdd button" onClick={openModal2}>

                                    Add collateral
                                
                                </div>


                            </div>





                        </div>
                    
                        <div className="borrowDetailsPoolHistoryWrapper">
                            <div className="borrowDetailsPoolHistoryTitle">
                                Pool history
                            </div>

                            <div className="borrowDetailsPoolHistoryItemsWrapper">
                               
                                <PoolHistoryItem />
                                <PoolHistoryItem />
                                <PoolHistoryItem />

                            </div>



                        </div>
                    
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
