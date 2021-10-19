import React from 'react'
import { useState } from 'react'
import './style.css'




import Timeline from '../Timeline'
import ProfileBorrowTabs from './ProfileBorrowTabs'

export default function ProfileTabs({borrowData}) {




    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const poolsCreated = borrowData.length;

    const activePools = (borrowData.filter((item) => {
        return item.pool_status === "Active";         
    })).length;

    const defaultedPools = (borrowData.filter((item) => {
        return item.pool_status === "Defaulted";         
    })).length;


    const borrowItemsData = [
        {
            value: poolsCreated,
            hint: 'Pools Created'
        },
        {
            value: activePools,
            hint: 'Active Pools'
        },
        {
            value: defaultedPools,
            hint: 'Times Defaulted'
        },
        {
            value: '$0',
            hint: 'Borrowing'
        },
    ]






    return (
        <React.Fragment>





            <div className="profileTabsContentWrapper">


                <div className="tabsContentActive">


                    <div className="profilePageTitle">
                        Borrowing
                    </div>

                    <div className="cardsWrapper">



                        {borrowItemsData.map((items, index) => (

                            <div key={index} className="profileCard">

                                <div className="profileCardValue">
                                    {items.value}
                                </div>

                                <div className="profileCardHint">
                                    {items.hint}
                                </div>

                            </div>

                        ))}


                        
                    </div>


                    <div className="profilePageTitle">
                        Timeline
                    </div>

                    <Timeline />

                    <ProfileBorrowTabs poolData={borrowData} />
                    
                

                </div>

    

            </div>


        </React.Fragment>
    )
}
