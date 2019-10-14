import React from 'react'
import NavBar from '../NavBar'
import Header from '../Header'

import './style.scss'

export default function index(props) {
    return (
        <div className="page">
            <NavBar></NavBar>
            <Header></Header>
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}
