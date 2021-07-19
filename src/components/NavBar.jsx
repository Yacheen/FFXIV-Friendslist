import React, { useState } from 'react'
import { Typography, makeStyles, Paper, useTheme, Button } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ForumIcon from '@material-ui/icons/Forum';

const useStyles = makeStyles({
    
    root: {
        minHeight: "8vh",
        
        
    }
})

export default function NavBar() {
    const theme = useTheme();
    const classes = useStyles();
    return (
        <Router>
            <Paper square={true} elevation={3} className={`${classes.root} nav-bar`}>
            <div className="nav-bar-content">
                <div className="nav-header">
                <Typography variant="h3">FFXIV Friendslist</Typography>
                </div>
                <div className="nav-buttons">
                    <Button className="nav-button" color="primary"><HelpOutlineIcon fontSize="large" /> <span>About</span></Button>
                    <Button className="nav-button" color="secondary"><ForumIcon fontSize="large" /><span>About</span></Button>
                </div>
            </div>
        </Paper>
        <Switch>
            
            
        </Switch>
        </Router>

        
        
    )
}
