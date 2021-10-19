import React from 'react'
import './style.css'
import { useHistory } from 'react-router-dom'

export default function FooterLended() {

    const history = useHistory();

    return (
        <React.Fragment>
            <div className="footer">
                <div className="master-wrapper">
                    <div className="footerLeft">
                        {/* <div className="footerMenuItem" onClick={ () => history.push('/')}>
                                Terms & Agreements
                        </div>

                        <div className="footerMenuItem" onClick={ () => history.push('/')}>
                                Blog
                        </div>

                        <div className="footerMenuItem" onClick={ () => history.push('/')}>
                                Privacy Policy
                        </div>

                        <div className="footerMenuItem" onClick={ () => history.push('/')}>
                                FAQ
                        </div> */}

                        <div className="footerMenuItem">
                                © 2021 Sublime
                        </div>
                    </div>
                    <div className="footerRight">
                   
                    <a target="_blank" href="https://github.com/sublime-finance/sublime-v1" className="section-10-line-2-right-item section-10-line-2-right-item-2"><i class="fab fa-github"></i></a>
               
               <a  target="_blank" href="https://docs.sublime.finance/" className="section-10-line-2-right-item"><i class="fas fa-file-alt"></i></a>
                        <a href="https://twitter.com/sublimefinance" className="section-10-line-1-right-item section-10-line-1-right-item-1 button" />
                       
                        <a href="https://discord.gg/cnadj5hFwh" className="section-10-line-1-right-item section-10-line-1-right-item-3 button" />
                     
                        
                       
                    
                    
                    </div>
                </div>
           </div>
        </React.Fragment>
    )
}
