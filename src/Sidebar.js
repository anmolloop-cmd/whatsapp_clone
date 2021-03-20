import React from 'react';
import "./Sidebar.css";
import ChatIcon from '@material-ui/icons/Chat';
import {Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat'
;

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src="https://avatars.githubusercontent.com/u/77225459?s=460&u=251d9bf840cef03c3dadc978158700b9764797e7&v=4"/>
                <div className="sidebar_headerRight">
                    <IconButton>
                    <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                    <ChatIcon />
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon/>
                    </IconButton>
                    
                </div>
            </div>
            <div className="sidebar_search">
            <div className="sidebar_searchContainer">
                <SearchOutlined/>
                <input placeholder="Start a chat" type="text"/>
            </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar;
