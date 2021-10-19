import React from 'react'
import { useState } from 'react'
import './style.css'

export default function LendPoolDetailsVoteModal({showModal, openModal, lendMoreFunc}) {


    const [voteValue, setVoteValue] = useState('')
    

    return (
        <React.Fragment>

            {showModal ? 
            <div className="pageModalOverlay">

                <div className="lendPoolWindow">

                    <div className="lendPoolWindowHeader">
                        Vote

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

                                <div className="lendDetailsPoolStatus lendDetailsPoolStatusRed">
                                Grace Period
                                </div>

                                

                

                            </div>

                            </div>
                       
                            <div className="lendDetailsVoteModalLine1">
                                Would you allow for a one time extension of this pool, until 30th Jan 2021?
                            </div>

                            <div className="lendDetailsVoteModalPower">
                                <div className="lendDetailsVoteModalPowerLeft">
                                Your voting power
                                </div>
                                <div className="lendDetailsVoteModalPowerRight">
                                (5%) 548,749.84
                                </div>
                            </div>

                            <div className="lendDetailsVoteAreaLeftLine2">
                                    <div className="lendDetailsVoteAreaLeftLine2Item1">
                                        Quorum 23%
                                    </div>
                                    <div className="lendDetailsVoteAreaLeftLine2Item2">
                                        33% needed
                                    </div>
                                </div>

                            <div className="lendDetailsVoteModalItem">
                                <div className="lendDetailsVoteModalItemLeft">
                                    <div className="lendDetailsVoteModalItemLeftTop">
                                        <div className="lendDetailsVoteModalItemLeftTopLeft">
                                        For
                                        </div>   
                                        <div className="lendDetailsVoteModalItemLeftTopRight">
                                        (80%) 757,203
                                        </div>  
                                    </div>   
                                    <div className="lendDetailsVoteModalItemLeftBottom">
                                        <div className="lendDetailsVoteModalItemLeftBottomOuter">
                                            <div style={{width:'80%'}} className="lendDetailsVoteModalItemLeftBottomInner lendDetailsVoteModalItemLeftBottomInnerGreen">
                                                
                                            </div>
                                        </div>
                                    </div>   
                                </div>   
                                <div className="lendDetailsVoteModalItemRight">
                                    <input type="checkbox" checked={voteValue === 'for' ? "checked" : ""}  onChange={() => setVoteValue('for')} />
                                </div>     
                            </div>    
                     
                        
                     
                            <div className="lendPoolStepModalLineButton button" onClick={openModal}>
                                Vote
                            </div>

            


                        
                    </div>
                </div>
            </div>

            :null}
                    
            </React.Fragment>
    )
}
