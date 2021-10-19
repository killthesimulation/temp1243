import React from 'react'
import { useState } from 'react'
import Header from '../../uiElements/Header'
import BorrowTabs from '../../uiElements/Tabs/BorrowTabs'
import Footer from '../../uiElements/Footer'
import { useHistory } from 'react-router-dom'
import './style.css'
import SendCreditLineModal from '../../uiElements/SendCreditLineModal'

export default function Borrow() {

    const history = useHistory();

    const [isLoading, setIsLoading] = useState(false);

    //Hide Loading Screen setIsLoading(false);

 
    const borrowData = [
        {
            id: 1,
            borrow_rate: '32%',
            borrow_txt: 'Current borrow rate',
        },
        {
            id: 2,
            borrow_rate: '$16,034',
            borrow_txt: 'Total borrowed amount',
        },
        {
            id: 3,
            borrow_rate: '1,500 DAI',
            borrow_txt: 'Next repayment on 25th Jan 2021',
            pay: 'Pay',
        }
    ]



    const poolData = [
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


    const [showModal, setShowModal] = useState(false)

    const sendCreditLineRequest = () => {
        alert('sendCreditLineRequest');
        openModal();
    }


   //Hide Loading Screen setIsLoading(false);

 

    const openModal = () => {
        setShowModal(prev => !prev)
    }


    const [creditLineAddr, setCreditLineAddr] = useState('');
    const [borrowLimit, setBorrowLimit] = useState('');
    const [borrowAsset, setBorrowAsset] = useState('');
    const [collateralRatio, setCollateralRatio] = useState('');
    const [collateralAsset, setCollateralAsset] = useState('');
    const [liquidationThreshold, setLiquidationThreshold] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [autoliquidate, setAutoliquidate] = useState('');

  

    return (
        <React.Fragment>

<SendCreditLineModal showModal={showModal} openModal={openModal} creditLineAddr={creditLineAddr} setCreditLineAddr={setCreditLineAddr} borrowLimit={borrowLimit} setBorrowLimit={setBorrowLimit} borrowAsset={borrowAsset} setBorrowAsset={setBorrowAsset} collateralRatio={collateralRatio} setCollateralRatio={setCollateralRatio} collateralAsset={collateralAsset} setCollateralAsset={setCollateralAsset} liquidationThreshold={liquidationThreshold} setLiquidationThreshold={setLiquidationThreshold} interestRate={interestRate} setInterestRate={setInterestRate} autoliquidate={autoliquidate} setAutoliquidate={setAutoliquidate} sendCreditLineRequest={sendCreditLineRequest} />


            <Header isLoading={isLoading} />
            <div className="pageOuter">
                <div className="pageWrapper pageWrapperPadding">
                    <div className="pageTitle">
                        Borrow
                    </div>

                    <div className="cardsWrapper">

                        {borrowData.map((items, index) => (

                            <div key={index} className="dashboardCard dashboardCard3x">

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
                        My Pools
                    </div>


                    <div className="dashboardTabsLine">
                        <BorrowTabs poolData={poolData} openModalRequest={openModal} />
                    </div>







                </div>
            </div>
            <Footer />
        </React.Fragment>

    )
}
