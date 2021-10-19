import React from 'react'
import { useState } from 'react'
import Header from '../../uiElements/Header'
import Footer from '../../uiElements/Footer'
import LendTabs from '../../uiElements/Tabs/LendTabs'

export default function Lend() {

    const [isLoading, setIsLoading] = useState(false);


     //Hide Loading Screen setIsLoading(false);

 

    const lendData = [
        {
            id: 1,
            rate: '32%',
            txt: 'Current return rate',
        },
        {
            id: 2,
            rate: '$16,034',
            txt: 'Total lended amount',
        },
        {
            id: 3,
            rate: '53.03 DAI',
            txt: 'Weekly ROI',
        }
    ]


    const poolsData = [
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


    return (
        <React.Fragment>
             <Header isLoading={isLoading} />
            <div className="pageOuter">
                <div className="pageWrapper pageWrapperPadding">

                    <div className="pageTitle">
                        Lend
                    </div>

                    <div className="cardsWrapper">
                        {lendData.map((items, index) => (
                            <div key={index} className="dashboardCard dashboardCard3x">

                                <div className="dashboardCardValue">
                                    {items.rate}
                                </div>

                                <div className="dashboardCardHint">
                                    {items.txt}
                                </div>

                            </div>
                        ))}
                    </div>



                    <div className="pageTitle pageTitleSecondary">
                        My Pools
                    </div>

                    <div className="dashboardTabsLine">
                        <LendTabs poolData={poolsData} />
                    </div>



                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
