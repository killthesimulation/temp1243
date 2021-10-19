import React from 'react'
import { useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom'
import LoadingScreen from '../LoadingScreen'
import TwitterModal from '../TwitterModal'

export default function Header({isLoading}) {

    const [showTwitterModal, setShowTwitterModal] = useState(false)
    const [walletAddr, setWalletAddr] = useState('0x3e5...46E')

    const closeTwitterModal = () => {
        setShowTwitterModal(false)
    }

    const history = useHistory();

    return (
        <React.Fragment>

            <TwitterModal showTwitterModal={showTwitterModal} closeTwitterModal={closeTwitterModal}  />

            <LoadingScreen active={isLoading} />


            <div className="header">
                <div className="headerWrapper">

                    <div className="headerLogo icon" onClick={ () => { history.push('/dashboard') } }>
                        
                    </div>

                    <div className="headerMenu">
                        <div className={ history.location.pathname === '/dashboard' ? "headerMenuItemActive" : "headerMenuItem" } onClick={ () => { history.push('/dashboard') } }>
                            Dashboard
                        </div>

                        <div className={ history.location.pathname === '/borrow' ? "headerMenuItemActive" : "headerMenuItem" } onClick={ () => { history.push('/borrow') } }>
                            Borrow
                        </div>

                        <div className={ history.location.pathname === '/lend' ? "headerMenuItemActive" : "headerMenuItem" } onClick={ () => { history.push('/lend') } }>
                            Lend
                        </div>

                        <div className={ history.location.pathname === '/profile' ? "headerMenuItemActive" : "headerMenuItem" } onClick={ () => { history.push('/profile') } }>
                            Your Profile
                        </div>
                    </div>

                    <div className="headerVerifyButton button" onClick={() => setShowTwitterModal(true)}>
                        Get verified
                    </div>

                    <div className="headerAddr">
                    {walletAddr}
                    </div>
                
                </div>
            </div>
        </React.Fragment>
    )
}
