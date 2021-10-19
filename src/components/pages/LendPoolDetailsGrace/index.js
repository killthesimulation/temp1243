import React from 'react'
import {useState} from 'react'
import Footer from '../../uiElements/Footer'
import Header from '../../uiElements/Header'
import LendDetailsTabs from '../../uiElements/Tabs/LendDetailsTabs'
import PoolHistoryItem from '../../uiElements/PoolHistoryItem'
import { useHistory } from 'react-router-dom'
import './style.css'
import LendPoolDetailsVoteModal from '../../uiElements/LendPoolDetailsVoteModal'



export default function LendPoolDetailsGrace() {

    const history = useHistory();
    const [showModal, setShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false);


     //Hide Loading Screen setIsLoading(false);

 

    const openModal = () => {
        setShowModal(prev => !prev)
    }


    return (
        <React.Fragment>
            <LendPoolDetailsVoteModal  showModal={showModal} openModal={openModal} />  
            <Header isLoading={isLoading} />
            <div className="pageOuter">
                <div className="pageWrapper pageWrapperPadding">
                    <div className="lendDetailsLeftPart">
                        <div onClick={() => history.push('/dashboard')} className="lendDetailsBackLine button">
                            <div className="lendDetailsBackLineIcon">
                            
                            </div>
                            Back
                        </div>
                    
                        <div className="lendDetailsOwnerLine">

                            <div className="lendDetailsOwnerLineLeft">

                                <div className="lendDetailsOwnerIcon"></div>
                                <div className="lendDetailsOwnerName">stani.eth</div>
                                <div className="lendDetailsOwnerUsername">@StaniKulechov</div>
                            
                            </div>

                            <div className="lendDetailsOwnerLineRight">

                                <div className="lendDetailsPoolStatus lendDetailsPoolStatusRed">
                                    Grace Period
                                </div>

                                <div className="lendDetailsPoolStatus lendDetailsPoolStatusGrey">
                                    Open Borrow
                                </div>

                                <div className="lendDetailsPoolDate">
                                    Pool created on Aug 3, 2020
                                </div>
                            
                            </div>

                        </div>
                    
                      
                        <div className="lendDetailsMainTitle">
                            Actions you can take
                        </div>

                        <div className="lendDetailsVoteArea">
                            <div className="lendDetailsVoteAreaLeft">
                                <div className="lendDetailsVoteAreaLeftLine1">
                                    Vote for extension request
                                </div>
                                <div className="lendDetailsVoteAreaLeftLine2">
                                    <div className="lendDetailsVoteAreaLeftLine2Item1">
                                        Quorum 23%
                                    </div>
                                    <div className="lendDetailsVoteAreaLeftLine2Item2">
                                        33% needed
                                    </div>
                                </div>
                                <div className="lendDetailsVoteAreaLeftLine3">
                                    Voting ends in 1d 12h 43m
                                </div>
                            </div>
                            <div className="lendDetailsVoteAreaRight">

                                <div className="lendDetailsVoteAreaRightLeft">
                                    <div className="lendDetailsVoteAreaRightLeftStatusLineWrapper">

                                        <div className="lendDetailsVoteAreaRightLeftStatusLineOuter">
                                            <div style={{width:'50%'}} className="lendDetailsVoteAreaRightLeftStatusLineInner lendDetailsVoteAreaRightLeftStatusLineInnerGreen">
                            
                                            </div>
                                        </div>

                                        <div className="lendDetailsVoteAreaRightLeftStatusLineOuter">
                                            <div style={{width:'20%'}} className="lendDetailsVoteAreaRightLeftStatusLineInner lendDetailsVoteAreaRightLeftStatusLineInnerRed">
                            
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="lendDetailsVoteAreaRightRight">
                                    <div className="lendDetailsVoteAreaRightRightButton button"  onClick={openModal}>
                                        Vote
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                       

                        <LendDetailsTabs />

                       
                        

                    </div>








                    <div className="lendDetailsRightPart">
                        <div className="lendDetailsPoolArea">
                            <div className="lendDetailsPoolAreaTitle">
                                Pool Details
                            </div>



                            <div className="lendDetailsPoolLine">
                                <div className="lendDetailsPoolLineHint">
                                Borrowing Rate
                                </div>
                                <div className="lendDetailsPoolLineValue">
                                10%
                                </div>
                            </div>


                            <div className="lendDetailsPoolLine">
                                <div className="lendDetailsPoolLineHint">
                                Borrowed Amount
                                </div>
                                <div className="lendDetailsPoolLineValue">
                                1,000 DOT
                                </div>
                            </div>



                            <div className="lendDetailsPoolLine">
                                <div className="lendDetailsPoolLineHint">
                                Locked Collateral
                                </div>
                                <div className="lendDetailsPoolLineValue">
                                (20%) 200 DOT
                                </div>
                            </div>


                            <div className="lendDetailsPoolLine">
                                <div className="lendDetailsPoolLineHint">
                                Remaining Load Period
                                </div>
                                <div className="lendDetailsPoolLineValue">
                                4 weeks
                                </div>
                            </div>


                            <div className="lendDetailsPoolLine">
                                <div className="lendDetailsPoolLineHint">
                                Next Repayment
                                </div>
                                <div className="lendDetailsPoolLineValue">

                                200 DOT
                                </div>
                            </div>


                            <div className="lendDetailsPoolLine">
                                <div className="lendDetailsPoolLineHint">
                                Next Repayment Date
                                </div>
                                <div className="lendDetailsPoolLineValue">
                                30th Jan 2021
                                </div>
                            </div>





                            <div className="lendDetailsPoolLineUserLended">
                                     <div className="lendDetailsPoolLine">
                                         <div className="lendDetailsPoolLineHint">
                                         You lent
                                         </div>
                                         <div className="lendDetailsPoolLineValue lendDetailsPoolLineValuePurple">
                                         700 DAI at 10%
                                         </div>
                                     </div>
                                     <div className="lendDetailsPoolLine">
                                         <div className="lendDetailsPoolLineHint">
                                         Repayment
                                         </div>
                                         <div className="lendDetailsPoolLineValue lendDetailsPoolLineValueGreen">
                                         128.5 DAI every 2 weeks
                                         </div>
                                     </div>
                                     <div className="lendDetailsPoolLine">
                                         <div className="lendDetailsPoolLineHint">
                                         Repayment progress
                                         </div>
                                         <div className="lendDetailsPoolLineValue lendDetailsPoolLineValueUnderline">
                                         33%
                                         </div>
                                     </div>

                                     <div className="lendDetailsPoolLine">
                                         <div className="lendDetailsPoolLineHint">
                                         Available to withdraw
                                         </div>
                                         <div className="lendDetailsPoolLineValue lendDetailsPoolLineValueUnderline">
                                         128.5 DOT
                                         </div>
                                     </div>
                                 </div>


                       
                            <div className="lendDetailsPoolLine lendDetailsPoolLineButtons">




                                <div className="lendDetailsPoolLineButton lendDetailsPoolLineButtonAdd button lendDetailsPoolLineButtonBig">

                                    Withdraw
                                
                                </div>


                            </div>





                        </div>
                    
                        <div className="lendDetailsPoolHistoryWrapper">
                            <div className="lendDetailsPoolHistoryTitle">
                                Pool history
                            </div>

                            <div className="lendDetailsPoolHistoryItemsWrapper">
                               
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
