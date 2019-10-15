import React from 'react'
import NavBar from '../NavBar/NavBar'
import Header from '../Header/Header'

import './Layout.scss'

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
