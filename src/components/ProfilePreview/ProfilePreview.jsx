import React from 'react'
import './ProfilePreview.scss'

export default function Header() {
    return (
        <div className="profile_preview__wrapper">
            <div className="profile_preview__header"></div>
            <div className="profile_preview__picture"></div>
            <div className="profile_preview__body">
                <h4 className="profile_preview_pilot_name">Main Title</h4>
                <p>Subtitle</p>
            </div>
        </div>
    )
}