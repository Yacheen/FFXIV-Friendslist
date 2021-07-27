import React from 'react'
import { Typography, makeStyles, Paper, Button } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ForumIcon from '@material-ui/icons/Forum';
import Home from './Home';

const useStyles = makeStyles({
    
    root: {
        minHeight: "8vh",
    }
})

export default function NavBar() {
    const classes = useStyles();
    
    return (
        
        <Router>
            
            <Paper square={true} elevation={3} className={`${classes.root} nav-bar`}>
            <div className="nav-bar-content">
            <Link to="/">
            <div className="nav-header">
                <Typography variant="h3">FFXIV Friendslist</Typography>
                </div>
            </Link>
                <div className="nav-buttons">
                    <Link to="/Motivation" className="nav-button-link">
                    <Button className="nav-button" color="primary"><HelpOutlineIcon fontSize="large" /> <span className="nav-button-text">About</span></Button>
                    </Link>
                    <Link to="/Contact" className="nav-button-link">
                    <Button className="nav-button" color="secondary"><ForumIcon fontSize="large" /><span className="nav-button-text">About</span></Button>
                    </Link>
    
                </div>
            </div>
        </Paper>
        <Switch>
            
            <Route exact={true} path="/" component={Home} />
            
   
        </Switch>
        </Router>

        
        
    )
}
