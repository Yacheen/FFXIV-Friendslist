import React from 'react'
import SideBar from './SideBar';
import {Paper} from '@material-ui/core';

export default function Home() {
    return (
        <Paper className="home-container" square={true}>
            <section classname="home-hero">
            <SideBar />
            

            </section>
        
            
           
        </Paper>
    )
}
