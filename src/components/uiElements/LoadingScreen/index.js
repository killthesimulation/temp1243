import React from 'react'
import './style.css'

export default function LoadingScreen({active}) {
    return (
        <React.Fragment>
            {
                active === true ? 
                <div className="loadingScreen">
                    <div className="loadingScreenLogo">
                    
                    </div>

                    <div className="loadingScreenSpacer">
                    
                    </div>

                    <div className="loadingScreenGif">
                    
                    </div>
                </div>

                :
                
                null
            }
        </React.Fragment>
    )
}
