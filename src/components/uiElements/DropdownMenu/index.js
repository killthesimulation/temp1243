import React from 'react'
import { useState } from 'react/cjs/react.development'
import './style.css'

export default function DropdownMenu({dropdownData, dropdownSelected, setDropdownSelected}) {

    const [showMenu, setShowMenu] = useState(false);

    const selectItem = (item) => {
        setDropdownSelected(item);
        setShowMenu(false);
    }

    return (
        <React.Fragment>
            <div className="customDropdownWrapper">
            <div className={showMenu ? "customDropdown customDropdownOpened" : "customDropdown"}>
                <div onClick={() => setShowMenu(prev => !prev)} className="customDropdownLine">
                    {dropdownSelected.icon ? 
                        <img src={dropdownSelected.icon} className="customDropdownLineIcon"/>
                        :
                        null
                    }
                    {dropdownSelected.value}
                    <div className={showMenu ? "customDropdownLineArrow customDropdownLineArrowOpened" : "customDropdownLineArrow"}></div>
                </div>
             

                {dropdownData.map((item, index) => (

                

                    <div className="customDropdownOptionLine button" onClick={() => {selectItem(item)}}>
                        {item.icon ? 
                            <img src={item.icon} className="customDropdownOptionLineIcon"/>
                            :
                            null
                        }
                        {item.value}
                    </div>

                ))}
              
              </div>
            </div>
            
        </React.Fragment>
    )
}
