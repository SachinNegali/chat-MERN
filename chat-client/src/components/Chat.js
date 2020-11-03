import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons'
import React from 'react'
import './Chat.css'

const Chat = () => {
    return (
        <div className="chatbar">
            <div className="chatHeader">
                <Avatar/>
                <div className="chatHeaderInfo">
                    <h3>Contact Name</h3>
                    <p>Last seen at</p>
                </div>

                <div className="chatHeaderRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className="chatBody">
                <p className='chatMessage'>
                    <span className="chatName">Potato</span>
                    Message Here
                    <span className="chatTimestamp">{new Date().toUTCString()}</span>
                </p>
                <p className='chatMessage chatReciever'>
                    <span className="chatName">Potato</span>
                    Message Here
                    <span className="chatTimestamp">{new Date().toUTCString()}</span>
                </p>
                
            </div>
        <div className="chatFooter">
           <InsertEmoticon/> 
           <form action="">
               <input type="text" placeholder="Type a Message"/>
               <button type="submit">
                    Send a message
               </button>
               </form>
               <Mic/>
        </div>
        </div>
    )
}

export default Chat
