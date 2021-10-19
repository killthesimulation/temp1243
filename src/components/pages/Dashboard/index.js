import React from 'react'
import {useState} from 'react'
import { useHistory } from 'react-router-dom'

import './style.css'


import Header from '../../uiElements/Header'
import DashboardTabs from '../../uiElements/Tabs/DashboardTabs'
import VoteCard from '../../uiElements/VoteCard'
import Footer from '../../uiElements/Footer'
import LendPoolDetailsVoteModal from '../../uiElements/LendPoolDetailsVoteModal'


export default function Dashboard() {

    const history = useHistory();


    const borrowData = [
        {
            id: 1,
            borrow_rate: '$16,034',
            borrow_txt: 'Total borrowed amount',
        },
        {
            id: 2,
            borrow_rate: '$16,034',
            borrow_txt: 'Total lent amount',
        },
        {
            id: 3,
            borrow_rate: '32%',
            borrow_txt: 'Total borrow rate',
        },
        {
            id: 4,
            borrow_rate: '32%',
            borrow_txt: 'Total lending rate',
        }
    ]

    const depositData = [
        {
            id: 1,
            value: '$0',
            hint: 'Deposited',
        },
        {
            id: 2,
            value: '$0',
            hint: 'Interest Earned',
        },
        {
            id: 3,
            value: '6%',
            hint: 'Interest Rate',
        }
    ]

    const creditData = [
        {
            id: 1,
            value: '$0',
            hint: 'Credit Granted',
        },
        {
            id: 2,
            value: '$0',
            hint: 'Active Credit',
        },
        {
            id: 3,
            value: '0',
            hint: 'Interest Accrued',
        },
        {
            id: 4,
            value: '6%',
            hint: 'Interest Rate',
        }
    ]


    const poolBorrowData = [
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

    const poolLendData = [
        {
            id: 1,
            name: 'Ritik Dutta',
            username: '@ritikdutta',
            pool_type: 'Open Borrow',
            pool_status: 'Active',
            borrowed: '200 DOT',
            lent: '700 DOT at 10%',
            repayment_progress: '45%',
            estimated_end_date: '30th Jan 2021'
        },
        {
            id: 2,
            name: 'Ritik Dutta',
            username: '@ritikdutta',
            pool_type: 'Open Borrow',
            pool_status: 'Collecting',
            participating: false,
            borrow_rate: '11%',
            borrowing: '1,000 DOT',
            locked_collateral: '(20%) 200 DOT',
            collection_progress: '30%'
        },
        {
            id: 3,
            name: 'Ritik Dutta',
            username: '@ritikdutta',
            pool_type: 'Open Borrow',
            pool_status: 'Collecting',
            participating: true,
            borrow_rate: '11%',
            borrowing: '1,000 DOT',
            locked_collateral: '(20%) 200 DOT',
            collection_progress: '30%',
            lent: '700 DOT at 10%'
        },
        {
            id: 4,
            name: 'Ritik Dutta',
            username: '@ritikdutta',
            pool_type: 'Open Borrow',
            pool_status: 'Closed',
            repayment_progress: '45%',
            lent: '700 DOT at 10%',
            profit: '80',
            ended_on: '30th Jan 2021'
        },
        {
            id: 5,
            name: 'Ritik Dutta',
            username: '@ritikdutta',
            pool_type: 'Open Borrow',
            pool_status: 'Defaulted',
            repayment_progress: '55%',
            lent: '700 DOT at 10%',
            profit: '-230',
            ended_on: '30th Jan 2021'
        },
        {
            id: 6,
            name: 'Ritik Dutta',
            username: '@ritikdutta',
            pool_type: 'Open Borrow',
            pool_status: 'Cancelled',
            repayment_progress: '25%',
            lent: '700 DOT at 10%',
            profit: '-110',
            ended_on: '30th Jan 2021'
        },
        {
            id: 7,
            name: 'Ritik Dutta',
            username: '@ritikdutta',
            pool_type: 'Open Borrow',
            pool_status: 'Terminated',
            repayment_progress: '40%',
            lent: '700 DOT at 10%',
            profit: '-50',
            ended_on: '30th Jan 2021'
        },


    ];


    const VoteData = [
        {
            id: 1,
            txt_1: 'Vote for extension',
            txt_2: '@lorem_ipsum',
            txt_3: 'Vote ends in 3 days',
        },
        {
            id: 2,
            txt_1: 'Vote for extension',
            txt_2: '@lorem_ipsum',
            txt_3: 'Vote ends in 2 days',
        },
        {
            id: 3,
            txt_1: 'Vote for extension',
            txt_2: '@lorem_ipsum',
            txt_3: 'Vote ends in 2 days',
        }
    ]


    const [showModal, setShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

  
  //Hide Loading Screen setIsLoading(false);


    const openModal = () => {
        setShowModal(prev => !prev)
    }



    return (
        <React.Fragment>
            <LendPoolDetailsVoteModal openModal={openModal} showModal={showModal} />
            <Header isLoading={isLoading} />
            <div className="pageOuter">
                <div className="pageWrapper">


                <div className="dashboardLeft">

                    <div className="pageTitle">
                        Overview
                    </div>
                    <div className="cardsWrapper">

                        {borrowData.map((items, index) => (

                            <div key={index} className="dashboardCard dashboardCard2x">

                                <div className="dashboardCardValue">
                                    {items.borrow_rate}
                                </div>

                                <div className="dashboardCardHint">
                                    {items.borrow_txt}
                                </div>

                            </div>

                        ))}
                    </div>

                    <div className="pageTitle pageTitleSecondary">
                        Deposit and Save Overview
                    </div>

                    <div className="cardsWrapper">

                        {depositData.map((items, index) => (

                            <div key={index} className="dashboardCard dashboardCard3x">

                                <div className="dashboardCardValue">
                                    {items.value}
                                </div>

                                <div className="dashboardCardHint">
                                    {items.hint}
                                </div>

                            </div>

                        ))}

                        
                        <div className="viewMoreButton button" onClick={() => history.push("/credit-lines-save")}>
                            View More
                        </div>


                    </div>


                    
                    <div className="pageTitle pageTitleSecondary">
                        Credit Lines
                    </div>

                    <div className="cardsWrapper">

                        {creditData.map((items, index) => (

                            <div key={index} className="dashboardCard dashboardCard4x">

                                <div className="dashboardCardValue">
                                    {items.value}
                                </div>

                                <div className="dashboardCardHint">
                                    {items.hint}
                                </div>

                            </div>

                        ))}

                        
                        <div className="viewMoreButton button" onClick={() => history.push("/credit-lines")}>
                            View More
                        </div>


                    </div>


                    <div className="pageTitle pageTitleSecondary">
                        My Pools
                    </div>


                    <div className="dashboardTabsLine">
                        <DashboardTabs poolBorrowData={poolBorrowData}  poolLendData={poolLendData}/>
                    </div>

                </div>  


                <div className="dashboardRight">

                    <div className="pageTitle">
                        Important
                        
                        <span className="importantCounter">
                        ({VoteData.length})
                        </span>
                    </div>


                    {VoteData.map((items, index) => (
                        <VoteCard key={index} item={items} openModal={openModal} />
                    ))}

                </div>





                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
