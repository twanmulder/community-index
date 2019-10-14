import React from 'react'
import './style.scss'

import NavBarItem from '../NavBarItem'

export default function NavBar() {
    return (
        <div className="navbar__wrapper">
            <div className="navbar__logo">
                Community Index
            </div>
            <div className="navbar__entries">
                <NavBarItem to="/" title="Home" />
                <NavBarItem to="/profile" title="Profile" />
            </div>

        </div>
    )
}