import React from 'react'
import {useState} from 'react'
import Footer from '../../uiElements/Footer'
import Header from '../../uiElements/Header'
import BorrowDetailsTabs from '../../uiElements/Tabs/BorrowDetailsTabs'
import PoolHistoryItem from '../../uiElements/PoolHistoryItem'
import { useHistory } from 'react-router-dom'
import './style.css'
import AddCollateralModal from '../../uiElements/AddCollateralModal'



export default function BorrowPoolDetailsCollecting() {

    const history = useHistory();
    const [showModal, setShowModal] = useState(false)

    const [isLoading, setIsLoading] = useState(false);

   //Hide Loading Screen setIsLoading(false);

 

    const openModal = () => {
        setShowModal(prev => !prev)
    }


    return (
        <React.Fragment>
            <AddCollateralModal showModal={showModal} openModal={openModal} />
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

                                <div className="borrowDetailsPoolStatus borrowDetailsPoolStatusOrange">
                                    Collecting
                                </div>

                                <div className="borrowDetailsPoolStatus borrowDetailsPoolStatusGrey">
                                    Open Borrow
                                </div>

                                <div className="borrowDetailsPoolDate">
                                    Pool created on Aug 3, 2020
                                </div>
                            
                            </div>

                        </div>
                    
                        <div className="borrowDetailsMainTitle">
                            Pool Description
                        </div>

                        <div className="borrowDetailsMainDescription">
                        We will be using the funds for purchasing of mining equiopment. That’s why I started implementing microscopic habits in the past few years. These never took much time away and don’t...
                        </div>



                        <div className="borrowDetailsCollectingLenders">
                            <div className="borrowDetailsCollectingLendersLeft">
                            Lenders
                            </div>
                            <div className="borrowDetailsCollectingLendersRight button">
                            Share with lenders
                            </div>
                        </div>
                        <div className="borrowDetailsCollectingLendersWrapper">
                            <div className="borrowDetailsCollectingLendersWrapperEmpty ">
                                <div className="borrowDetailsCollectingLendersWrapperEmptyIcon icon"></div>
                                <div className="borrowDetailsCollectingLendersWrapperEmptyTitle">
                                    No lenders so far
                                </div>
                                <div className="borrowDetailsCollectingLendersWrapperEmptyText">
                                Share this pool with your friends in order for them to start lending or wait for other Sublime members to participate
                                </div>
                            </div>
                        </div>

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
                                Loan Period
                                </div>
                                <div className="borrowDetailsPoolLineValue">
                                12 weeks
                                </div>
                            </div>


                            <div className="borrowDetailsPoolLine">
                                <div className="borrowDetailsPoolLineHint">
                                Repayment Frequency
                                </div>
                                <div className="borrowDetailsPoolLineValue">

                                   Every 2 weeks
                                </div>
                            </div>


                            <div className="borrowDetailsPoolLine">
                                <div className="borrowDetailsPoolLineHint">
                                Collection progress
                                </div>
                                <div className="borrowDetailsPoolLineValue">
                                200 DOT
                                </div>
                            </div>



                            <div className="borrowDetailsPoolLine">
                                <div className="borrowDetailsPoolLineHint">
                                Collection ends
                                </div>
                                <div className="borrowDetailsPoolLineValue">
                                2d 23h 59m
                                </div>
                            </div>



                            <div className="borrowDetailsPoolLine borrowDetailsPoolLineButtons">




                                <div className="borrowDetailsPoolLineButton borrowDetailsPoolLineButtonAdd button borrowDetailsPoolLineButtonBig" onClick={openModal}>

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
