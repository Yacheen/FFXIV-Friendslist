import React from 'react'
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
export default function GetStatusButton() {
    return (
        <div className="status-button-container">
            <Button  size="large" variant="contained" color="secondary" className="status-button">
            <SearchIcon fontSize="large"/>
                View Profile
            </Button>
        </div>
    )
}
