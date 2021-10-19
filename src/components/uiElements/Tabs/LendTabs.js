import React from 'react'
import { useState } from 'react'
import LendPoolCard from '../PoolCard/LendPoolCard'
import './style.css'
import LendPoolDetailsModal from '../LendPoolDetailsModal'
import DropdownMenu from '../DropdownMenu'

export default function LendTabs({poolData}) {


    const dropdownData = [
        {
            value: 'Sort by 1',
        },
        {
            value: 'Sort by 2'
        },
    ]






    const [dropdownSelected, setDropdownSelected] = useState(dropdownData[0])

    

    const [toggleState, setToggleState] = useState(1);
    

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
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
                 <LendPoolDetailsModal showModal={showModal} openModal={openModal} />
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
                        Closed
                    </div>
                </div>

                <div className="tabsAdditionalButtons">
                <div className="tabsAdditionalButtonsWrapper1">
                <DropdownMenu dropdownSelected={dropdownSelected} setDropdownSelected={setDropdownSelected} dropdownData={dropdownData} />
                </div> 
                    <div className="lendTabSearch">
                        <input className="lendTabSearchField" type="text" placeholder="Search" />
                        <div className="lendTabSearchIcon">

                        </div>
                    </div>
                </div>

                <div className="tabsContentWrapper">

                    <div className={toggleState === 1 ? "tabsContentActive" : "tabsContent"}>

                        {poolData.map((items, index) => (

                            <LendPoolCard key={index} openModal={openModal} item={items} size={'3x'} />

                        ))}

                    </div>

                    <div className={toggleState === 2 ? "tabsContentActive" : "tabsContent"}>

                        {activePools.map((items, index) => (

                            <LendPoolCard key={index} item={items} size={'3x'} />

                        ))}

                    </div>

                    <div className={toggleState === 3 ? "tabsContentActive" : "tabsContent"}>

                        {collectingPools.map((items, index) => (

                            <LendPoolCard key={index} item={items} size={'3x'} />

                        ))}

                    </div>

                    <div className={toggleState === 4 ? "tabsContentActive" : "tabsContent"}>


                        {closedPools.map((items, index) => (

                            <LendPoolCard key={index} item={items} size={'3x'} />

                        ))}

                        

                    </div>

                </div>
            </React.Fragment>
    )
}
