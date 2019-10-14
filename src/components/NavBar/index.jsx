import React from 'react'
import './style.scss'

import NavBarItem from '../NavBarItem'
import ProfileIcon from '../ProfileIcon'

export default function NavBar() {
    return (
        <div className="navbar__wrapper">
            <div className="navbar__logo">
                Community Index
            </div>
            <div className="navbar__entries">
                <NavBarItem to="/" title="Home" />
                <NavBarItem to="/overview" title="Overview" />
                <div className="navbar__entry">
                    <ProfileIcon />
                </div>
            </div>
        </div>
    )
}