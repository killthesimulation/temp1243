import React from 'react'
import { useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom'

import Footer from '../../uiElements/FooterLended'

export default function Home() {

    const history = useHistory();

    const [email, setEmail] = useState('');

    const saveEmail = () => {
        console.log(email);
    }

    const [mobileTabActive, setMobileTabActive] = useState(1)
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <React.Fragment>
            <div className="page-header">

                <div className="master-wrapper">
                    <div className="page-header-logo" onClick={ () => { history.push('/') } }>

                    </div>
                    {/* <div className="headerLogo icon" onClick={ () => { history.push('/') } }>
                        
                    </div> */}
                    {
                        showMobileMenu === false ?

                        <div onClick={() => setShowMobileMenu(prev => !prev)} className="page-mobile-button button">

                        </div>

                        :

                       null

                    }


                    {
                        showMobileMenu === true ?
                        <React.Fragment>

                        <div onClick={() => setShowMobileMenu(prev => !prev)} className="page-mobile-button-close button">
                        
                        </div>

                        <div className="mobileMenuWrapper">
                        <div className="master-wrapper">
                            <div className="page-header-logo" onClick={ () => { history.push('/') } }>
                                
                            </div>
                            <div onClick={() => setShowMobileMenu(prev => !prev)} className="page-mobile-button-close button">
                        
                        </div>

                            <a href="https://github.com/sublime-finance/sublime-v1" className="mobile-menu-item button"><i class="fab fa-github"></i> Github</a>
                         
                            <a href="https://docs.sublime.finance/" className="mobile-menu-item button"><i class="fas fa-file-alt"></i> Docs</a>
                            


                        <div className="mobile-menu-social-line">
                        <a href="https://twitter.com/sublimefinance" className="section-10-line-1-right-item section-10-line-1-right-item-1 button" />
                   
                        <a href="https://discord.gg/cnadj5hFwh" className="section-10-line-1-right-item section-10-line-1-right-item-3 button" />
                    
                        
                       
                        </div>

                        


                            </div>
                        </div>

                    </React.Fragment>
                    : 
                    null
                    }
                   


            
                  
                    <div className="menu-div">
                    <div className="section-10-line-2-right section-10-line-2-right-2">
              
                        <a target="_blank" href="https://github.com/sublime-finance/sublime-v1" className="section-10-line-2-right-item"><i class="fab fa-github"></i></a>
                         
                        <a  target="_blank" href="https://docs.sublime.finance/" className="section-10-line-2-right-item"><i class="fas fa-file-alt"></i></a>
    
                    </div>

                    <div className="section-10-line-1-right section-10-line-1-right-2">
           
                        <a href="https://twitter.com/sublimefinance" className="section-10-line-1-right-item section-10-line-1-right-item-1 button" />
                       
                        <a href="https://discord.gg/cnadj5hFwh" className="section-10-line-1-right-item section-10-line-1-right-item-3 button" />
                     
                        
                       
                    
                    </div>

                    </div>

              
                   
            </div>

            </div>    

            <div className="section-1">
                <div className="master-wrapper master-wrapper-1">
                    <div className='section-1-left'>
                        <div className='section-1-left-inner'>
                            <div className='section-1-left-inner-header'>
                            Social x Finance
                            </div>
                            <div className='section-1-left-inner-subheader'>
                            Reimagining credit for Web 3.0
                            </div>




{/* 
                            <div id="mc_embed_signup">
                            <br />
                            <form action="https://protonmail.us1.list-manage.com/subscribe/post?u=0bc24c0608c875e0afb963111&amp;id=e57fb53433" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                            <div id="mce-EMAIL-COVER">
                            <input required="true" type="email" value="" name="EMAIL" className='section-9-field' placeholder="  Your Email" id="mce-EMAIL1" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                             <input type="hidden" name="b_0bc24c0608c875e0afb963111_e57fb53433" tabindex="-1" value=""/>
<input type="submit" value="Subscribe" name="subscribe" id="    " class="section-9-left-inner-button button"/>
                         </form>
                            </div> */}




                                            <a  href="https://form.typeform.com/to/pB9hWoZb" class="section-1-left-inner-button">Register Interest</a>




                   

               

                         
                          
                        </div>
                    </div>
                    <div className='section-1-right'></div>
                </div>
            </div>

  
         
   
  
    
      
            <div className="section-2">
            <div className="master-wrapper">
                <div className="section-2-title-1">
                What is Sublime?
                </div>
                <div className="section-2-title-2">
                Sublime lets borrowers access capital-efficient loans by leveraging their reputation
                </div>

                <div className="section-2-wrapper">
                  
                    <div className="section-2-wrapper-item-1">
                    <div className="section-2-wrapper-connector-1"></div>
                        <div className="section-2-wrapper-item-1-inner">
                            <div className="section-2-mobile-line-1">

                            </div>
                            <div className="section-2-wrapper-item-1-inner-icon">
                            
                            </div>
                            <div className="section-2-wrapper-item-1-inner-content">
                                <div className="section-2-wrapper-item-1-inner-content-title">
                                Borrow Pool
                                </div>
                                <div className="section-2-wrapper-item-1-inner-content-text">
                                Access capital from lenders at large via Pools
                                </div>
                            </div>
                        </div>



                        <div className="section-2-wrapper-2">
                    <div className="section-2-wrapper-2-item-1">
                        <div className="section-2-wrapper-2-item-1-icon section-2-wrapper-2-item-1-icon-1">
                        
                        </div>
                        <div className="section-2-wrapper-2-item-1-icon section-2-wrapper-2-item-1-icon-2">
                        
                        </div>
                        <div className="section-2-wrapper-2-item-1-icon section-2-wrapper-2-item-1-icon-3">
                        
                        </div>
                        <div className="section-2-wrapper-2-item-1-icon section-2-wrapper-2-item-1-icon-4">
                        
                        </div>
                        <div className="section-2-wrapper-2-item-1-icon section-2-wrapper-2-item-1-icon-5">
                        
                        </div>

                        <div className="section-2-wrapper-2-item-1-text section-2-wrapper-2-item-1-text-1">
                        LENDERS
                        </div>

                        <div className="section-2-wrapper-2-item-1-text section-2-wrapper-2-item-1-text-2">
                        BORROWER
                        </div>

                    </div>
            
                </div>



                    </div>
                    <div className="section-2-wrapper-item-2">
                    <div className="section-2-wrapper-item-2-circle">
                        <div className="section-2-wrapper-item-2-inner">
                            <div className="section-2-wrapper-item-2-inner-icon">
                            
                            </div>
                            <div className="section-2-wrapper-item-2-inner-user">
                            bob.eth
                                <span className="section-2-wrapper-item-2-inner-user-badge"></span>
                            </div>
                            <div className="section-2-wrapper-item-2-inner-username">
                            @BobHodler
                            </div>
                        </div>
                        </div>


                        <div className="section-2-wrapper-2-item-2">

                            <div className="section-2-wrapper-2-item-2-inner">
                                Borrowers set the terms of the financing: collateral ratios, interest rates & more
                            </div>

                            </div>

                    </div>
                    <div className="section-2-wrapper-item-3">
                    <div className="section-2-wrapper-connector-2"></div>
                        <div className="section-2-wrapper-item-1-inner section-2-wrapper-item-1-inner-2">
                        <div className="section-2-mobile-line-2">
                                
                                </div>
                            <div className="section-2-wrapper-item-1-inner-icon section-2-wrapper-item-1-inner-icon-2">
                            
                            </div>
                            <div className="section-2-wrapper-item-1-inner-content">
                                <div className="section-2-wrapper-item-1-inner-content-title">
                                Credit Line
                                </div>
                                <div className="section-2-wrapper-item-1-inner-content-text">
                                Set up private credit lines without revealing your identity
                                </div>
                            </div>
                        </div>


   
                        <div className="section-2-wrapper-2-item-3">
                        <div className="section-2-wrapper-2-item-3-icon section-2-wrapper-2-item-3-icon-1">
                        
                        </div>
                        <div className="section-2-wrapper-2-item-3-icon section-2-wrapper-2-item-3-icon-2">
                        
                        </div>
                        <div className="section-2-wrapper-2-item-3-icon section-2-wrapper-2-item-3-icon-3">
                        
                        </div>
                        <div className="section-2-wrapper-2-item-3-text section-2-wrapper-2-item-3-text-1">
                        LENDER
                        </div>

                        <div className="section-2-wrapper-2-item-3-text section-2-wrapper-2-item-3-text-2">
                        BORROWER
                        </div>
                    </div>

                    </div>
                </div>

             
                </div>

            </div>
         


            <div className="section-3">
                <div className="master-wrapper">
                    <div className="section-3-title-1">
                    How does it work?
                    </div>
                    <div className="section-3-title-2">
                    Lenders assess borrowers using a host of indicators combining both on-chain and off-chain data
                    </div>



                    <div className="section-3-wrapper">
                        <div className="section-3-wrapper-left">


                            <div className="section-3-wrapper-left-badge">
                                <div className="section-3-wrapper-left-badge-inner">
                                <div className="section-3-wrapper-left-badge-inner-title">
                                Identity
                                </div>
                                <div className="section-3-wrapper-left-badge-inner-text">
                                Support people you follow on platforms like Twitter or Youtube
                                </div>
                                </div>
                            </div>

                            <div className="section-3-wrapper-left-connector-1">
                            </div>    

                            <div className="section-3-wrapper-left-image">
                            </div>    

                            <div className="section-3-wrapper-left-connector-wrapper">
                                <div className="section-3-wrapper-left-connector-2">
                                </div>
                            </div>    

                            <div className="section-3-wrapper-left-badge section-3-wrapper-left-badge-5">
                                <div className="section-3-wrapper-left-badge-inner">
                                <div className="section-3-wrapper-left-badge-inner-title">
                                Social Graph
                                </div>
                                <div className="section-3-wrapper-left-badge-inner-text">
                                Find mutual connections, and lend through your web of trust
                                </div>
                                </div>
                            </div>


                        </div>
                        
                        
                        
                        <div className="section-3-wrapper-right">

                            <div className="section-3-wrapper-right-badge-wrapper">
                            <div className="section-3-wrapper-right-badge-wrapper-connector"></div>
                            <div className="section-3-wrapper-left-badge section-3-wrapper-left-badge-2">
                                <div className="section-3-wrapper-left-badge-inner">
                                <div className="section-3-wrapper-left-badge-inner-title">
                                Past Performance
                                </div>
                                <div className="section-3-wrapper-left-badge-inner-text">
                                Look up a borrower's performance on previous loans, outstanding debt & more
                                </div>
                                </div>
                            </div>
                            </div>
                        
                            <div className="section-3-wrapper-right-items-wrapper">
                                <div className="section-3-wrapper-right-item">
                                    <div className="section-3-wrapper-right-item-1">
                                    $0,00
                                    </div>
                                    <div className="section-3-wrapper-right-item-2">
                                    Defaults
                                    </div>
                                </div>

                                <div className="section-3-wrapper-right-item">
                                    <div className="section-3-wrapper-right-item-1">
                                    $15,000
                                    </div>
                                    <div className="section-3-wrapper-right-item-2">
                                    Lifetime loans
                                    </div>
                                </div>

                                <div className="section-3-wrapper-right-item">
                                    <div className="section-3-wrapper-right-item-1">
                                    $100,000
                                    </div>
                                    <div className="section-3-wrapper-right-item-2">
                                    Interest Repayed
                                    </div>
                                </div>
                            </div>
                        
                            <div className="section-3-wrapper-right-image">
                            <div className="section-3-wrapper-left-badge section-3-wrapper-left-badge-3">
                                <div className="section-3-wrapper-left-badge-connector"></div>
                                <div className="section-3-wrapper-left-badge-inner">
                                <div className="section-3-wrapper-left-badge-inner-title">
                                Activity Graph
                                </div>
                                <div className="section-3-wrapper-left-badge-inner-text">
                                Browse borrower activity on supported protocols, and find mutual connections to lend via web of trust
                                </div>
                                </div>
                            </div>
                            </div>
                        
                        </div>
                    </div>
                    <div className="section-3-mobile">

                    <div className="section-3-mobile-tabs-wrapper">
                    <div className="section-3-mobile-tabs-wrapper-inner">
                        <div onClick={() => {setMobileTabActive(1)}} className={mobileTabActive === 1 ? 'section-3-mobile-tab section-3-mobile-tab-active' : 'section-3-mobile-tab'}>

                            Identity                    

                        </div>   

                           <div onClick={() => {setMobileTabActive(2)}} className={mobileTabActive === 2 ? 'section-3-mobile-tab section-3-mobile-tab-active' : 'section-3-mobile-tab'}>

                           Social Graph

                            </div>      


                             <div onClick={() => {setMobileTabActive(3)}} className={mobileTabActive === 3 ? 'section-3-mobile-tab section-3-mobile-tab-active' : 'section-3-mobile-tab'}>

                             Past perfomance

                            </div>       

                             <div onClick={() => {setMobileTabActive(4)}} className={mobileTabActive === 4 ? 'section-3-mobile-tab section-3-mobile-tab-active' : 'section-3-mobile-tab'}>

                             Activity

                            </div>          
                    </div>
                    </div>


                    <div className="section-3-mobile-content">
                        {mobileTabActive === 1 ? 
                            <React.Fragment>
                            <div className="section-3-wrapper-left-badge">
                            <div className="section-3-wrapper-left-badge-inner">
                            <div className="section-3-wrapper-left-badge-inner-title">
                            Identity
                            </div>
                            <div className="section-3-wrapper-left-badge-inner-text">
                            Support people you follow on platforms like Twitter or Youtube
                            </div>
                            </div>
                            </div>

                            
                                <div className="section-3-wrapper-left-connector-1">
                                </div>    
                                <div className="mobile-spacer"></div>
                                <div className="section-3-wrapper-left-image-1">
                                </div>


                          


                                </React.Fragment> 

                        :
                            null
                        }

                        {
                            mobileTabActive === 2 ? 
                            <React.Fragment>
                            <div className="section-3-wrapper-left-badge">
                            <div className="section-3-wrapper-left-badge-inner">
                            <div className="section-3-wrapper-left-badge-inner-title">
                            Social Graph
                            </div>
                            <div className="section-3-wrapper-left-badge-inner-text">
                            Find mutual connections, and lend through your web of trust
                            </div>
                            </div>
                        </div>


                        <div className="section-3-wrapper-left-connector-1">
                            </div>    
                            <div className="mobile-spacer"></div>
                            <div className="section-3-wrapper-left-image-2">
                            </div>
                            </React.Fragment>
                            :
                            null
                        }


                        {
                            mobileTabActive === 3 ? 
                            <React.Fragment>
                                     
                               
                            <div className="section-3-wrapper-left-badge">
                                <div className="section-3-wrapper-left-badge-inner">
                                <div className="section-3-wrapper-left-badge-inner-title">
                                Past Performance
                                </div>
                                <div className="section-3-wrapper-left-badge-inner-text">
                                Look up a borrower's performance on previous loans, outstanding debt & more
                                </div>
                                </div>
                            </div>
                            <div className="section-3-wrapper-left-connector-1">
                            </div>  

                            <div className="section-3-wrapper-right-items-wrapper">
                                <div className="section-3-wrapper-right-item">
                                    <div className="section-3-wrapper-right-item-1">
                                    $0,00
                                    </div>
                                    <div className="section-3-wrapper-right-item-2">
                                    Defaults
                                    </div>
                                </div>

                                <div className="section-3-wrapper-right-item">
                                    <div className="section-3-wrapper-right-item-1">
                                    $15,000
                                    </div>
                                    <div className="section-3-wrapper-right-item-2">
                                    Lifetime loans
                                    </div>
                                </div>

                                <div className="section-3-wrapper-right-item">
                                    <div className="section-3-wrapper-right-item-1">
                                    $100,000
                                    </div>
                                    <div className="section-3-wrapper-right-item-2">
                                    Interest Repayed
                                    </div>
                                </div>
                            </div>
                        
                        
                            </React.Fragment>
                            :
                            null
                        }

{
                            mobileTabActive === 4 ? 
                            <React.Fragment>
                            <div className="section-3-wrapper-left-badge">
                            <div className="section-3-wrapper-left-badge-inner">
                            <div className="section-3-wrapper-left-badge-inner-title">
                            Activity Graph
                            </div>
                            <div className="section-3-wrapper-left-badge-inner-text">
                            Browse borrower activity on Sublime and a host of other protocols like Compound or Uniswap
                            </div>
                            </div>
                        </div>


                        <div className="section-3-wrapper-left-connector-1">
                            </div>    
                            <div className="mobile-spacer"></div>
                            <div className="section-3-wrapper-left-image-4-wrapper">
                            
                            <div className="section-3-wrapper-left-image-4">
                            </div>
                            </div>
                            </React.Fragment>
                            :
                            null
                        }
                    </div>

                    </div>
                </div>
            </div>
           

           
            <div className="section-4">
                <div className="master-wrapper master-wrapper-4">
                    <div className='section-1-left section-4-left'>
                        <div className='section-1-left-inner section-4-left-inner'>
                            <div className="section-1-left-inner-header-before">
                            Share as much or as little as you want
                            </div>
                            <div className='section-1-left-inner-header section-4-left-inner-header'>
                            Build your new<br/>financial identity
                            </div>
                            <div className='section-1-left-inner-subheader section-4-left-inner-subheader'>
                            Sublime lets users leverage their off-chain data to kickstart their Web 3.0 reputation
                            </div>


                            <div className="section-4-badge">Increase your credibility using an ever-expanding list of verification plugins
                            </div>




                     










                   

               

                         
                          
                        </div>
                    </div>
                    <div className='section-1-right section-4-right'></div>
                </div>
            </div>

  

            <div className="section-5">
                <div className="master-wrapper">
                  
                    <div className="section-5-line-1">
                        <div className="section-5-line-1-left">
                            <div className="section-5-line-1-left-title-1">
                                Build on top of Sublime
                            </div>
                            <div className="section-5-line-1-left-title-2">
                                Built with composability in mind
                            </div>
                            <div className="section-5-line-1-left-title-3">
                                Levarage identities to build a stronger, robust DeFi.
                            </div>
                        </div>
                        <div className="section-5-line-1-right">
                        
                        </div>
                    </div>
                
                    <div className="lines-mobile-wrapper">
                    <div className="section-5-line-2">
                        <div className="section-5-line-2-puzzle section-5-line-2-puzzle-1">

                            <div className="section-5-line-2-puzzle-title">
                            Decentralized Identities
                            </div>

                            <div className="section-5-line-2-puzzle-text">
                            Assess users via their off-chain identitiies & on-chain txn histories
                            </div>
                        
                        </div>
                        <div className="section-5-line-2-puzzle section-5-line-2-puzzle-2">

                            <div className="section-5-line-2-puzzle-title">
                            Fully customizable money markets
                            </div>

                            <div className="section-5-line-2-puzzle-text">
                            Participating in pools are tokenized into ERC-20 assets, enabling exit and exchange of lending positions  
                            </div>
                        
                        </div>
                        <div className="section-5-line-2-puzzle section-5-line-2-puzzle-3">

                            <div className="section-5-line-2-puzzle-title">
                            Savings<br/>Account
                            </div>

                            <div className="section-5-line-2-puzzle-text">
                            Earn low-risk yield, enable auto-repayments & better asset management
                            </div>
                        
                        </div>
                        <div className="section-5-line-2-puzzle section-5-line-2-puzzle-4">


                            <div className="section-5-line-2-puzzle-title">
                            Tokenized Lending Positons
                            </div>

                            <div className="section-5-line-2-puzzle-text">
                            Pools to enable crowdfunding
                            Credit lines to maintain privacy
                            </div>
                        
                        </div>
                    </div>
                
                    <div className="section-5-line-3">

                    </div>

                    <div className="section-5-line-4">

                        <div className="section-5-line-4-item section-5-line-4-item-1">
                            <div className="section-5-line-4-item-icon section-5-line-4-item-icon-1">
                            
                            </div>

                            <div className="section-5-line-4-item-title">
                            Funding DAOs
                            </div>

                            <div className="section-5-line-4-item-text">
                            Support new-age founders & creators with high potential
                            </div>
                        </div>


                        <div className="section-5-line-4-item section-5-line-4-item-2">
                            <div className="section-5-line-4-item-icon section-5-line-4-item-icon-2">
                            
                            </div>

                            <div className="section-5-line-4-item-title">
                            Asset Management
                            </div>

                            <div className="section-5-line-4-item-text">
                            By professionals with provable DeFi track record and reputation
                            </div>
                        </div>



                        <div className="section-5-line-4-item section-5-line-4-item-3">
                            <div className="section-5-line-4-item-icon section-5-line-4-item-icon-3">
                            
                            </div>

                            <div className="section-5-line-4-item-title">
                            Complex Debt Tranching
                            </div>

                            <div className="section-5-line-4-item-text">
                            Build sophisticated debt products by combining positions in different pools to gain exposure to a wide range of risk-reward
                            </div>
                        </div>


                        <div className="section-5-line-4-item section-5-line-4-item-4">
                            <div className="section-5-line-4-item-icon section-5-line-4-item-icon-4">
                            
                            </div>

                            <div className="section-5-line-4-item-title">
                            And Many More
                            </div>

                            <div className="section-5-line-4-item-text">
                            
                            </div>
                        </div>

                      
                        
                    </div>
                
                    </div>
                </div>
            </div>
       
    
            <div className="section-6">
                <div className="master-wrapper master-wrapper-6">
                    <div className="section-6-title">
                    Backed by the best
                    </div>

                    <a target="_blank" href="https://www.electriccapital.com/" className="section-6-item section-6-item-1">

                      
                    </a>
                    
                    <a target="_blank" href="https://www.galaxydigital.io/" className="section-6-item section-6-item-2">
                  
                    </a>
                    <a target="_blank" href="https://www.collabcurrency.com/" className="section-6-item section-6-item-3">
                   
                    </a>
                    <a target="_blank" href="https://fintech.io/" className="section-6-item section-6-item-4">
                   
                    </a>


<div className="backSpacer" />




                    <a target="_blank" href="https://twitter.com/jillrgunter" className="section-6-item section-6-item-5">
                    <div className="backName">
                    Jill Gunter
                        </div>
                        <div className="backName2">
                      Slow Ventures
                        </div>
                    </a>
                    <a target="_blank" href="https://twitter.com/twobitidiot" className="section-6-item section-6-item-6">
                    <div className="backName">
                    Ryan Selkis
                        </div>

                        <div className="backName2">
                    Messari
                        </div>
                    </a>

                    <a target="_blank" href="https://twitter.com/sandeepnailwal" className="section-6-item section-6-item-7">
                    <div className="backName">
                    Sandeep Nailwal
                        </div>
                        <div className="backName2">
                Polygon
                        </div>
                    </a>

                    <a target="_blank" href="https://twitter.com/ericinjective" className="section-6-item section-6-item-8">
                        <div className="backName">
                        Eric Chen
                        </div>
                        <div className="backName2">
                        Injective Protocol
                        </div>
                        
                    </a>



                    {/* HEREEEEEEEEEEEEEEEEEEEEEE */}

                    <a target="_blank" href="https://twitter.com/tempofeng" className="section-6-item section-6-item-9">
                        <div className="backName">
                        Yenwen Feng
                        </div>
                      
                        
                    </a>


                    <a target="_blank" href="https://twitter.com/iamdonho?lang=en" className="section-6-item section-6-item-10">
                        <div className="backName">
                        Don Ho
                        </div>
                     
                        
                    </a>


                    <a target="_blank" href="" className="section-6-item section-6-item-11">
                        <div className="backName">
                        Michael Chen
                        </div>
                        <div className="backName2">
                        Injective Protocol
                        </div>
                        
                    </a>



                    <a target="_blank" href="https://twitter.com/ericinjective" className="section-6-item section-6-item-12">
                        <div className="backName">
                        Fredrik Haga
                        </div>
                      
                        
                    </a>



                </div>
            </div>


    


{/* 
            <div className="section-10">
                <div className="master-wrapper">
                <div className="section-10-line-1">
                    <div className="section-10-line-1-left">Sublime</div>
                    <div className="section-10-line-1-right">
                        <a href="https://twitter.com/sublimefinance" className="section-10-line-1-right-item section-10-line-1-right-item-1 button" />
                        <a href="https://medium.com/@sublime.finance" className="section-10-line-1-right-item section-10-line-1-right-item-2 button" />
                        <a href="https://discord.gg/xqYetdrZ" className="section-10-line-1-right-item section-10-line-1-right-item-3 button" />
                        <a href="https://t.me/joinchat/_NHGrR5tMItiNjc5" className="section-10-line-1-right-item section-10-line-1-right-item-4 button" />
                        
                    </div>
                </div>
                <div className="section-10-line-2">
                    <div className="section-10-line-2-left">
                    Copyright © 2021 . All Rights Reserved
                    </div>
                    <div className="section-10-line-2-right">
                        <a href="#" className="section-10-line-2-right-item">Docs</a>
                        <a href="#" className="section-10-line-2-right-item">Whitepaper</a>
                        <a href="#" className="section-10-line-2-right-item">Privacy Policy</a>
                        <a href="#" className="section-10-line-2-right-item">Terms & Conditions</a>
    
                    </div>
                </div>
                </div>
            </div>
 */}

            <Footer />
            </React.Fragment>
    )
}

