import React, {useEffect, useCallback} from 'react'
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


export default function GetStatusButton(props) {

    const fetchFFXIVApi = useCallback(async (selectedIndex) => {
        //allow the user to send only once at a time,
        if(selectedIndex == null)  {
            /* say something or give a tip that says to select someone before clicking*/
        }
        else {
           
        //send actual api request
            const response = await fetch(`https://xivapi.com/character/${props.selectedIndex}?data=FR`);
            const data = await response.json();
            props.setFFXIVData(data);
            //make a loading screen thing on the button
            console.log(data);
        }
                
    }, [props.selectedIndex]) 

    return (
    
            <div className="status-button-container"   >
                {/* find out how to have selectedIndex not be undefined. its giving me undefined for some reason*/}
                <Button  onClick={fetchFFXIVApi} size="large" variant="contained" color="secondary" className="status-button">
                <SearchIcon fontSize="large"/>
                    View Profile
                </Button>
            </div>

    )
}
