import React from 'react'
import './Sidebar.css'
import DonutLargeSharpIcon from '@material-ui/icons/DonutLargeSharp';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';

import {Avatar, IconButton} from '@material-ui/core'
import SidebarContacts from './SidebarContacts';



const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarHeader">
                <Avatar src=''/>
                <div className="sidebarHeaderRight">
                    <IconButton>
                        <DonutLargeSharpIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>                      
                </div>
            </div>
            <div className="sidebarSearch">
                <div className="sidebarSearchContainer">
                    <SearchIcon/>
                    <input type="text" placeholder="search or start new chat" />
                </div>
            </div>
            <div className="sidebarChats">
                <SidebarContacts/>
                <SidebarContacts/>
                <SidebarContacts/>
                
            </div>
        </div>
    )
}

export default Sidebar
