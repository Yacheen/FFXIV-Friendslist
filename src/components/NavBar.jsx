import React from 'react'
import { Link, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        height: "8vh",
        background: "yellow"
    }
})

export default function NavBar() {
    const classes = useStyles();
    return (
        <nav className={classes.root}>
            <div className="nav-bar-content">
                <Typography variant="h3"> dis is my typo</Typography>
                
            </div>
        </nav>
    )
}
