import React from 'react'
import {useState} from 'react'
import Header from '../../uiElements/Header'
import Footer from '../../uiElements/Footer'
import { useHistory } from 'react-router-dom'
import ProfileTabs from '../../uiElements/Tabs/ProfileTabs'
import './style.css'

export default function Profile() {

    const userData = {
        address: '0xb73...974',
        verified: false
    }

    const [isLoading, setIsLoading] = useState(false);


   //Hide Loading Screen setIsLoading(false);

 


    const borrowData = [
        {
            id: 1,
            avatar: '',
            name: 'Ritik Dutta',
            username: '@ritikdutta',
            pool_type: 'Open Borrow',
            pool_status: 'Active',
            created_on: '18th Jan 2021',
            borrow_rate: '11%',
            borrowed_amount: '1,000 DOT',
            progress_and_payment_txt: 'Collection Progress',
            progress_and_payment: '45%',
            next_payment: '200 DOT',
            ends_date: '2d 12h 34m',
            btn_1: 'Provide collateral',
            btn_2: 'View More',
        },
        {
            id: 2,
            avatar: '',
            name: 'Ritik Dutta',
            username: '@ritikdutta',
            pool_type: 'Open Borrow',
            pool_status: 'Grace Period',
            created_on: '18th Jan 2021',
            borrow_rate: '11%',
            borrowed_amount: '1,000 DOT',
            progress_and_payment_txt: 'Collection Progress',
            progress_and_payment: '55%',
            next_payment: '200 DOT',
            ends_date: '30th Jan 2021',
            btn_1: 'Provide collateral',
            btn_2: 'View More',
        },
        {
            id: 3,
            avatar: '',
            name: 'Ritik Dutta',
            username: '@ritikdutta',
            pool_type: 'Open Borrow',
            pool_status: 'Collecting',
            created_on: '18th Jan 2021',
            borrow_rate: '11%',
            borrowed_amount: '1,000 DOT',
            progress_and_payment_txt: 'Collection Progress',
            progress_and_payment: '100%',
            ends_date: '30th Jan 2021',
            btn_1: 'Provide collateral',
            btn_2: 'View More',
        },
        {
            id: 4,
            avatar: '',
            name: 'Ritik Dutta',
            username: '@ritikdutta',
            pool_type: 'Open Borrow',
            pool_status: 'Closed',
            created_on: '18th Jan 2021',
            borrow_rate: '11%',
            borrowed_amount: '1,000 DOT',
            progress_and_payment_txt: 'Collection Progress',
            progress_and_payment: '100%',
            ends_date: '30th Jan 2021',
            btn_1: 'Provide collateral',
            btn_2: 'View More',
        },
        {
            id: 5,
            avatar: '',
            name: 'Ritik Dutta',
            username: '@ritikdutta',
            pool_type: 'Open Borrow',
            pool_status: 'Defaulted',
            created_on: '18th Jan 2021',
            borrow_rate: '11%',
            borrowed_amount: '1,000 DOT',
            progress_and_payment_txt: 'Collection Progress',
            progress_and_payment: '100%',
            ends_date: '30th Jan 2021',
            btn_1: 'Provide collateral',
            btn_2: 'View More',
        },
        {
            id: 6,
            avatar: '',
            name: 'Ritik Dutta',
            username: '@ritikdutta',
            pool_type: 'Open Borrow',
            pool_status: 'Cancelled',
            created_on: '18th Jan 2021',
            borrow_rate: '11%',
            borrowed_amount: '1,000 DOT',
            progress_and_payment_txt: 'Collection Progress',
            progress_and_payment: '100%',
            ends_date: '30th Jan 2021',
            btn_1: 'Provide collateral',
            btn_2: 'View More',
        },
        {
            id: 7,
            avatar: '',
            name: 'Ritik Dutta',
            username: '@ritikdutta',
            pool_type: 'Open Borrow',
            pool_status: 'Terminated',
            created_on: '18th Jan 2021',
            borrow_rate: '11%',
            borrowed_amount: '1,000 DOT',
            progress_and_payment_txt: 'Collection Progress',
            progress_and_payment: '100%',
            ends_date: '30th Jan 2021',
            btn_1: 'Provide collateral',
            btn_2: 'View More',
        },
    ];


    const verifyTwitter = (data) => {
        alert("Verify Twitter Operation")
    }

    return (
        <React.Fragment>
             <Header isLoading={isLoading} />
            <div className="pageOuter">
                <div className="pageWrapper pageWrapperPadding">

                    <div className="profileLelfPart">

                        <div className="profileLelfPartLine profileLelfPartLine1">

                            <div className="profileUserIcon">
                                <div className="profileUserVerifiedBadge">
                                </div>
                            </div>

                            <div className="profileUserAddress">
                                {userData.address}
                            </div>

                        </div>

                        <div className="profileLelfPartLine">

                            <div className="twitterVerified">
                                <div className="twitterVerifiedLelft">
                                    <div className="twitterVerifiedLine1">
                                        Twitter
                                    </div>
                                    <div className="twitterVerifiedLine2">
                                        Unverified
                                    </div>
                                </div>
                                <div className="twitterVerifiedLineButton" onClick={() => verifyTwitter('data') }>
                                    Verify now
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="profileRightPart">

                        <ProfileTabs borrowData={borrowData}/>
                        
                    </div>

                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
