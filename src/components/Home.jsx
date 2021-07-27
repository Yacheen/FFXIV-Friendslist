import React, {useEffect, useRef, useCallback, useState} from 'react'
import SideBar from './SideBar';
import {Paper} from '@material-ui/core';
import PersonMetaInformation from './PersonMetaInformation'
import PersonData from './PersonData';
import CharacterModel from './CharacterModel';

export default function Home() {
    
    const [selectedIndex, setSelectedIndex] = React.useState(null);
    const [FFXIVData, setFFXIVData] = React.useState(null);
    const raidGroupIdentities = {
        rikkasId: 30071260,
        lirasId: 24633600,
        kyarysId: 23829654,
        mitsusId: 26393450,
        ezmisId: 13343103,
        braxtonsId:  27563488,
        uhrasId:  31478998,
        yassinsId:  26668179,

    }
   
    return (
        <>
        {/*sidebar*/}
        
        <Paper className="home-container" square={true}>
            <div className="sidebar-container">
                <SideBar 
                FFXIVData={FFXIVData}
                setFFXIVData={setFFXIVData}
                raidGroupIdentities={raidGroupIdentities}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                 />
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
