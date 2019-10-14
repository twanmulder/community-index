import React from 'react'
import './style.scss'

export default function NavBar() {
    return (
        <div className="navbar__wrapper">
            <div className="navbar__logo">
                Community Index
            </div>
            <div className="navbar__entries">
                <div className="navbar__entry">
                    Entry 0
                </div>
                <div className="navbar__entry">
                    Entry 1
                </div>
            </div>

        </div>
    )
}