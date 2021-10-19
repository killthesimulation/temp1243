import React from 'react'
import { useState } from 'react'
import BorrowPoolCard from '../PoolCard/BorrowPoolCard'
import TabPlaceholder from '../TabPlaceholder'
import './style.css'
import DropdownMenu from '../DropdownMenu'

import CreateBorrowPoolModal from '../CreateBorrowPoolModal'
import BorrowDetailsModal from '../../uiElements/BorrowDetailsModal'
import AddCollateralModal from '../../uiElements/AddCollateralModal'


export default function BorrowTabs({poolData, openModalRequest}) {


    const dropdownData = [
        {
            value: 'Sort by 1',
        },
        {
            value: 'Sort by 2'
        },
    ]






    const [dropdownSelected, setDropdownSelected] = useState(dropdownData[0])

    

    

    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    }


    const [showModal2, setShowModal2] = useState(false)

    const openModal2 = () => {
        setShowModal2(prev => !prev)
    }

    const [showModal3, setShowModal3] = useState(false)

    const openModal3 = () => {
        setShowModal3(prev => !prev)
    }

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const activePools = poolData.filter((item) => {
        return item.pool_status === "Active";         
    });

    const collectingPools = poolData.filter((item) => {
        return item.pool_status === "Collecting";         
    });

    const closedPools = poolData.filter((item) => {
        return item.pool_status === "Closed" || item.pool_status === "Defaulted" || item.pool_status === "Cancelled" || item.pool_status === "Terminated";         
    });

    return (
            <React.Fragment>

                <AddCollateralModal showModal={showModal3} openModal={openModal3} />

                <BorrowDetailsModal showModal={showModal2} openModal={openModal2} />

                <CreateBorrowPoolModal showModal={showModal} openModal={openModal} />

                <div className="tabsWrapper">
                    <div className={toggleState === 1 ? "tabItemActive" : "tabItem"} onClick={ () => toggleTab(1) }>
                        All Pools
                    </div>
                    <div className={toggleState === 2 ? "tabItemActive" : "tabItem"} onClick={ () => toggleTab(2)}>
                        Active
                    </div>
                    <div className={toggleState === 3 ? "tabItemActive" : "tabItem"} onClick={ () => toggleTab(3)}>
                        Collecting
                    </div>
                    <div className={toggleState === 4 ? "tabItemActive" : "tabItem"} onClick={ () => toggleTab(4)}>
                        Past Pools
                    </div>
                </div>

                <div className="tabsAdditionalButtons">
                    <div className="tabsAdditionalButtonsWrapper1">
                <DropdownMenu dropdownSelected={dropdownSelected} setDropdownSelected={setDropdownSelected} dropdownData={dropdownData} />
                </div>        
                    <div className="borrowTabButton button" onClick={() => {openModalRequest()}}>
                        Request a line of Credit
                    </div>
                    <div className="borrowTabButton" onClick={openModal}>
                        Create  pool
                    </div>
                </div>

                <div className="tabsContentWrapper">

                    <div className={toggleState === 1 ? "tabsContentActive" : "tabsContent"}>

                        {poolData.length > 0 ? 
                        
                        poolData.map((items, index) => (

                            <BorrowPoolCard showModal3={showModal3} openModal3={openModal3} showModal2={showModal2} openModal2={openModal2} key={index} item={items} size={'3x'} />

                        ))

                        : 


                        <TabPlaceholder />


                        }

                        

                    </div>

                    <div className={toggleState === 2 ? "tabsContentActive" : "tabsContent"}>

                        {activePools.length > 0 ?


                            activePools.map((items, index) => (

                                <BorrowPoolCard showModal2={showModal2} openModal2={openModal2} key={index} item={items} size={'3x'} />

                            ))
                        
                        
                        :


                            <TabPlaceholder />
                        

                        }

                        

                        

                    </div>

                    <div className={toggleState === 3 ? "tabsContentActive" : "tabsContent"}>


                    {collectingPools.length > 0 ? 


                        collectingPools.map((items, index) => (

                            <BorrowPoolCard showModal2={showModal2} openModal2={openModal2} key={index} item={items} size={'3x'} />

                        ))

                    
                    :

                        <TabPlaceholder />
                    
                    }


                    

                        

                    </div>

                    <div className={toggleState === 4 ? "tabsContentActive" : "tabsContent"}>

                    {closedPools.length > 0 ?


                        closedPools.map((items, index) => (

                            <BorrowPoolCard showModal2={showModal2} openModal2={openModal2} key={index} item={items} size={'3x'} />

                        ))
                    

                    :


                        <TabPlaceholder /> 
                    

                    }

                    

                        

                    </div>

                </div>
            </React.Fragment>
    )
}
