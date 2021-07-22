import React from 'react'
import SideBar from './SideBar';
import {Paper} from '@material-ui/core';
import PersonMetaInformation from './PersonMetaInformation'
import PersonData from './PersonData';
import Footer from './Footer';


export default function Home() {
    
    return (
        <>
        {/*sidebar*/}
        <Paper className="home-container" square={true}>
            <div className="sidebar-container">
                <SideBar />
            </div>
            {/* main content */}

            <div className="home-content-container">
                <div className="home-content"> 
                {/* left side of main content */}
                    <div className="home-left-side">
                        <div className="home-left-side-content">
                            <div className="person-meta-information-container">
                                <PersonMetaInformation />
                            </div>
                            <div className="person-data-container">
                                <PersonData />
                            </div>
                        </div>
                    </div>

                    {/* right side of main content*/}
                    <div className="home-right-side">
                        <div className="char-model-and-gear-container">
                            <div className="char-model-container"><h1>sample text</h1></div>
                            <div className="char-gear-container"> sample text</div>
                        </div>
                        <div className="char-stats-container">
                            sample text
                        </div>
                    </div>
                </div>
            </div> 
  
        </Paper>
        </>
    )
}
