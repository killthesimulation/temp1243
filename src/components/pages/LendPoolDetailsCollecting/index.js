import React from 'react'
import {useState} from 'react'
import Footer from '../../uiElements/Footer'
import Header from '../../uiElements/Header'
import LendDetailsTabs from '../../uiElements/Tabs/LendDetailsTabs'
import PoolHistoryItem from '../../uiElements/PoolHistoryItem'
import { useHistory } from 'react-router-dom'
import './style.css'
import LendPoolDetailsModal from '../../uiElements/LendPoolDetailsModal'



export default function LendPoolDetailsCollecting() {

    const history = useHistory();
    const [showModal, setShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false);


     //Hide Loading Screen setIsLoading(false);


 
    const openModal = () => {
        setShowModal(prev => !prev)
    }

    const [showUserLended, setshowUserLended] = useState(false)


    const lendMoreFunc = () => {
        setShowModal(prev => !prev)
        setshowUserLended(prev => !prev)
    }

    return (
        <React.Fragment>
            <LendPoolDetailsModal  showModal={showModal} openModal={openModal} lendMoreFunc={lendMoreFunc} />  
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

                                <div className="lendDetailsPoolStatus lendDetailsPoolStatusOrange">
                                    Collecting
                                </div>

                                <div className="lendDetailsPoolStatus lendDetailsPoolStatusGrey">
                                    Open Borrow
                                </div>

                                <div className="lendDetailsPoolDate">
                                    Pool created on Aug 3, 2020
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
                                Borrowing
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
                                Loan Period
                                </div>
                                <div className="lendDetailsPoolLineValue">
                                12 weeks
                                </div>
                            </div>


                            <div className="lendDetailsPoolLine">
                                <div className="lendDetailsPoolLineHint">
                                Repayment Frequency
                                </div>
                                <div className="lendDetailsPoolLineValue">

                                   Every 2 weeks
                                </div>
                            </div>


                            <div className="lendDetailsPoolLine">
                                <div className="lendDetailsPoolLineHint">
                                Collection progress
                                </div>
                                <div className="lendDetailsPoolLineValue">
                                45% 
                                <div className="lendDetailsPoolBarOuter">
                                        <div style={{width: '34%'}} className="lendDetailsPoolBarInner"></div>
                                    </div>
                                </div>
                            </div>



                            <div className="lendDetailsPoolLine">
                                <div className="lendDetailsPoolLineHint">
                                Collection ends
                                </div>
                                <div className="lendDetailsPoolLineValue">
                                2d 23h 59m
                                </div>
                            </div>


                            {showUserLended ? 
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
                                         First Repayment
                                         </div>
                                         <div className="lendDetailsPoolLineValue lendDetailsPoolLineValueUnderline">
                                         5 March 2021
                                         </div>
                                     </div>
                                 </div>
     
     
                            :
                            null} 


                       
                            <div className="lendDetailsPoolLine lendDetailsPoolLineButtons">




                                <div className="lendDetailsPoolLineButton lendDetailsPoolLineButtonAdd button lendDetailsPoolLineButtonBig" onClick={openModal}>

                                    Lend more
                                
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
