import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import GetStatusButton from './GetStatusButton';
import FriendsList from './FriendsList';


export default function SideBar() {
    
    return (
            <Paper elevation={3} square={true} className={` side-bar-container`}>
                <div className="side-bar-content">
                    <div className="get-status-button">
                        <Typography variant="h5" className="button-hint">
                            Choose a player below, and click on the button below to see their stats!
                        </Typography>
                        <GetStatusButton />   
                    </div>

                    <div className="friends-list">
                        <FriendsList />
                    </div>
                </div>
            </Paper>
        
    )
}
