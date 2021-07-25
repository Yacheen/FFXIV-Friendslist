import React, {useContext} from 'react'
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {SelectedIndexContext} from './FriendsList';

export default function GetStatusButton() {
    const [selectedIndex, setSelectedIndex] = useContext(SelectedIndexContext);
    return (
 
            <div className="status-button-container">
                <Button  size="large" variant="contained" color="secondary" className="status-button">
                <SearchIcon fontSize="large"/>
                    View Profile
                </Button>
            </div>

    )
}
