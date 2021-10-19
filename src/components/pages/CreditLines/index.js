import React from 'react'
import './style.css'
import {useState} from 'react'
import Header from '../../uiElements/Header'
import Footer from '../../uiElements/Footer'
import CreditLinesTabs from '../../uiElements/Tabs/CreditLinesTabs'
import SendCreditLineModal from '../../uiElements/SendCreditLineModal'

export default function CreditLines() {

    const [showModal, setShowModal] = useState(false)

    const [isLoading, setIsLoading] = useState(false);

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


    const sendCreditLineRequest = () => {
        alert('sendCreditLineRequest');
        openModal();
    }



    return (
        <React.Fragment>

<SendCreditLineModal showModal={showModal} openModal={openModal} showModal={showModal} openModal={openModal} creditLineAddr={creditLineAddr} setCreditLineAddr={setCreditLineAddr} borrowLimit={borrowLimit} setBorrowLimit={setBorrowLimit} borrowAsset={borrowAsset} setBorrowAsset={setBorrowAsset} collateralRatio={collateralRatio} setCollateralRatio={setCollateralRatio} collateralAsset={collateralAsset} setCollateralAsset={setCollateralAsset} liquidationThreshold={liquidationThreshold} setLiquidationThreshold={setLiquidationThreshold} interestRate={interestRate} setInterestRate={setInterestRate} autoliquidate={autoliquidate} setAutoliquidate={setAutoliquidate} sendCreditLineRequest={sendCreditLineRequest} />

<Header isLoading={isLoading} />
            <div className="pageOuter">
                <div className="pageWrapper pageWrapperPadding pageWrapperCreditLines">


                    <CreditLinesTabs showModal={showModal} openModal={openModal} />


                </div>
            </div>
            <Footer />
            
        </React.Fragment>
    )
}
