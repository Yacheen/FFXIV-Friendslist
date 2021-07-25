import React from 'react'
import SideBar from './SideBar';
import {Paper} from '@material-ui/core';
import PersonMetaInformation from './PersonMetaInformation'
import PersonData from './PersonData';
import CharacterModel from './CharacterModel';


export default function Home(props) {
    {/* when they select someone, 
    then search, set everything equal
     to the parameters 
     that person selected has. 
     person should have some sort 
     of arguments i guess.
    dynamic programming pog*/}
    
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
                            <div className="char-model-container"><h1>sample text</h1><CharacterModel /></div>
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
