import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarContacts.css'

const SidebarContacts = () => {
    return (
        <div className="contacts">
            <Avatar/>
            <div className="contactInfo">
                <h2>Contact Name</h2>
                <p>Last Message</p>
            </div>
        </div>
    )
}

export default SidebarContacts
