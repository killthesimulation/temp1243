import React from 'react'
import { useState } from 'react'
import BorrowPoolCard from '../PoolCard/BorrowPoolCard'
import LendPoolCard from '../PoolCard/LendPoolCard'
import './style.css'
import BorrowDetailsModal from '../../uiElements/BorrowDetailsModal'
import AddCollateralModal from '../../uiElements/AddCollateralModal'
import LendPoolDetailsModal from '../LendPoolDetailsModal'
import DropdownMenu from '../DropdownMenu'

export default function DashboardTabs({poolBorrowData, poolLendData}) {


    const dropdownData = [
        {
            value: 'Sort by 1',
        },
        {
            value: 'Sort by 2'
        },
    ]






    const [dropdownSelected, setDropdownSelected] = useState(dropdownData[0])

    const [showModal2, setShowModal2] = useState(false)

    const openModal2 = () => {
        setShowModal2(prev => !prev)
    }

    const [showModal3, setShowModal3] = useState(false)

    const openModal3 = () => {
        setShowModal3(prev => !prev)
    }


    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    }



    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
            <React.Fragment>

<AddCollateralModal showModal={showModal3} openModal={openModal3} />

<BorrowDetailsModal showModal={showModal2} openModal={openModal2} />

<LendPoolDetailsModal showModal={showModal} openModal={openModal} />

                <div className="tabsWrapper">
                    <div className={toggleState === 1 ? "tabItemActive" : "tabItem"} onClick={ () => toggleTab(1) }>
                        All Pools
                    </div>
                    <div className={toggleState === 2 ? "tabItemActive" : "tabItem"} onClick={ () => toggleTab(2)}>
                        Borrow
                    </div>
                    <div className={toggleState === 3 ? "tabItemActive" : "tabItem"} onClick={ () => toggleTab(3)}>
                        Lend
                    </div>
                </div>

                <div className="tabsAdditionalButtons">
                   <div className="tabsAdditionalButtonsWrapper1">
                <DropdownMenu dropdownSelected={dropdownSelected} setDropdownSelected={setDropdownSelected} dropdownData={dropdownData} />
                </div> 
                </div>

                <div className="tabsContentWrapper">

                    <div className={toggleState === 1 ? "tabsContentActive" : "tabsContent"}>

                        {poolBorrowData.map((items, index) => (

                            <BorrowPoolCard showModal3={showModal3} openModal3={openModal3} showModal2={showModal2} openModal2={openModal2} key={index} item={items} size={'2x'} />

                        ))}

                        {poolLendData.map((items, index) => (

                            <LendPoolCard key={index} item={items} size={'2x'} />

                        ))}

                    </div>

                    <div className={toggleState === 2 ? "tabsContentActive" : "tabsContent"}>

                    {poolBorrowData.map((items, index) => (

                        <BorrowPoolCard key={index} item={items} size={'2x'} />

                    ))}

                    </div>

                    <div className={toggleState === 3 ? "tabsContentActive" : "tabsContent"}>

                    {poolLendData.map((items, index) => (

                        <LendPoolCard openModal={openModal} key={index} item={items} size={'2x'} />

                    ))}

                    </div>

                </div>
            </React.Fragment>
    )
}
