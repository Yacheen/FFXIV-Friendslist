import React from 'react'
import { Paper } from '@material-ui/core'
import GetStatusButton from './GetStatusButton';

export default function SideBar() {
    return (
        <div>
            <Paper className="side-bar-container">
                <div className="get-status-button">
                    <GetStatusButton />
                </div>
                <div className="friends-list">
                    
                </div>
            </Paper>
        </div>
    )
}
