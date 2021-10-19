import React from 'react'
import { useState } from 'react'
import './style.css'

export default function TwitterModal({showTwitterModal, closeTwitterModal}) {

    const [formStep, setFormStep] = useState(1)


    const verify = () => {
        
        closeTwitterModal();

    }

    return (
        <React.Fragment>

            {
                showTwitterModal ?

                    <div className="twitterModalWrapper">
                        <div className="twitterModalWindow">


                            {
                                formStep === 1 ?
                                
                                    <div className="twitterFormStep">

                                        <div className="twitterFormStepTittle">

                                        Become part of Sublime                
                                                                            
                                        </div>

                                        <div className="twitterFormStepTittle2">

                                        Connect your Twitter account in order to get verified.               
                                                                            
                                        </div>

                                        <div className="twitterFormStepTittle3 button">

                                        Learn more            
                                                                            
                                        </div>

                                        <div className="twitterFormStepButton1 button" onClick={() => setFormStep(2)}>
                                            <div className="twitterFormStepButtonIcon">
                                            
                                            </div>
                                            Connect with Twitter
                                        </div>


                                        <div className="twitterFormStepButton2 button">
                                            Continue unverified
                                        </div>

                                    
                                    </div>

                                :

                                null
                            }

                            {
                                formStep === 2 ?
                                
                                    <div className="twitterFormStep">
                                        <div className="formStepIndicator">1/4</div>
                                        <div className="twitterFormStepTittle twitterFormStepTittleLeft">

                                        Enter your twitter username to get started         
                                                                            
                                        </div>
                                        <input placeholder="Enter your twitter handle" type="text" className="formStepInput1" />
                                        <div className="twitterFormStepButton3 button" onClick={() => setFormStep(3)}>
                                            Next
                                        </div>
                                    </div>

                                :

                                null
                            }

                            {
                                formStep === 3 ?
                                
                                <div className="twitterFormStep">
                                <div className="formStepIndicator">2/4</div>
                                <div className="twitterFormStepTittle twitterFormStepTittleLeft">

                                Sign a message     
                                                                    
                                </div>

                                <div className="twitterFormStepTittle2 twitterFormStepTittle2Left">

                                    Sign a message that would be used to link your wallet address and Twitter handle          
                                                                        
                                </div>


                                <div className="twitterFormStepBadge">
                                    <div className="twitterFormStepBadgeIcon1">
                                    
                                    </div>
                                    <div className="twitterFormStepBadgeIcon2">
                                    
                                    </div>
                                    <div className="twitterFormStepBadgeIcon3">
                                    
                                    </div>

                                    <div className="twitterFormStepBadgeText">
                                    @StaniKulechov
                                    </div>
                                </div>

                                <div className="twitterFormStepButton3 button" onClick={() => setFormStep(4)}>
                                    Next
                                </div>
                            </div>

                                :

                                null
                            }

                            {
                                formStep === 4 ?
                                
                                    <div className="twitterFormStep">
                                    

                                    <div className="formStepIndicator">3/4</div>
                                    <div className="twitterFormStepTittle twitterFormStepTittleLeft">

                                        Tweet this message to verify your account   
                                                                        
                                    </div>

                                    <div className="twitterFormStepBadge2">

                                        Verifying my address on Sublime addr:0x73747738849939sdhudsdsbhdbsig

                                    </div>

                                    
                                    <div className="twitterFormStepButton1 button" onClick={() => setFormStep(5)}>
                            
                                    Tweet this message
                                    </div>


                                    </div>

                                :

                                null
                            }

                            {
                                formStep === 5 ?
                                
                                    <div className="twitterFormStep">


<div className="formStepIndicator">4/4</div>
                                <div className="twitterFormStepTittle twitterFormStepTittleLeft">

                               Submit

                                </div>

                                <div className="twitterFormStepTittle2 twitterFormStepTittle2Left">
                                Submit to get verified  
                                                                        
                                </div>


                                <div className="twitterFormStepTweet">
                   
                                    Tweet
                                                                        
                                </div>


                                <div className="twitterFormStepButton1 button" onClick={() => verify()}>
                            
                                Submit
                                </div>



                                    
                                    </div>

                                :

                                null
                            }



                        </div>
                    </div>

                :

                null
            }
            
        </React.Fragment>
    )
}
