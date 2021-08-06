import { Paper, Card, CardContent, Typography } from "@material-ui/core";
import React, { useState } from "react";

import CharacterModel from "./CharacterModel";
import GearList from "./GearList";
import PersonData from "./PersonData";
import PersonMetaInformation from "./PersonMetaInformation";
import SideBar from "./SideBar";
import Attributes from "./Attributes";
import Jobs from "./Jobs";

export default function Home({ onHome, setOnHome }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedMetaInformation, setSelectedMetaInformation] = useState();
    const [buttonPressed, setButtonPressed] = useState();
    const [FFXIVData, setFFXIVData] = useState(undefined);
    const [metaInfoLoading, setMetaInfoLoading] = useState(false);

    const raidGroupIdentities = {
        rikkasId: 30071260,
        lirasId: 24633600,
        kyarysId: 23829654,
        mitsusId: 26393450,
        ezmisId: 13343103,
        braxtonsId: 27563488,
        uhrasId: 31478998,
        yassinsId: 26668179,
    };

    return (
        <>
            {/* sidebar */}

            <Paper className="home-container" square>
                <div className="sidebar-container">
                    <SideBar
                        setOnHome={setOnHome}
                        setSelectedMetaInformation={setSelectedMetaInformation}
                        FFXIVData={FFXIVData}
                        setFFXIVData={setFFXIVData}
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}
                        raidGroupIdentities={raidGroupIdentities}
                    />
                </div>
                {/* main content */}
                <div className="home-content-container">
                    <div className="home-content">
                        {/* left side of main content */}
                        <div className="home-left-side">
                            <div className="home-left-side-content">
                                <div className="person-meta-information-container">
                                    <PersonMetaInformation
                                        onHome={onHome}
                                        metaInfoLoading={metaInfoLoading}
                                        setMetaInfoLoading={setMetaInfoLoading}
                                        buttonPressed={buttonPressed}
                                        setButtonPressed={setButtonPressed}
                                        selectedIndex={selectedIndex}
                                        selectedMetaInformation={
                                            selectedMetaInformation
                                        }
                                        setSelectedMetaInformation={
                                            setSelectedMetaInformation
                                        }
                                        FFXIVData={FFXIVData}
                                    />
                                </div>
                                <div className="person-data-container">
                                    <PersonData
                                        onHome={onHome}
                                        setSelectedMetaInformation={
                                            setSelectedMetaInformation
                                        }
                                        metaInfoLoading={metaInfoLoading}
                                        setMetaInfoLoading={setMetaInfoLoading}
                                        setButtonPressed={setButtonPressed}
                                        buttonPressed={buttonPressed}
                                        selectedMetaInformation={
                                            selectedMetaInformation
                                        }
                                        FFXIVData={FFXIVData}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* right side of main content */}
                        <div className="home-right-side">
                            <div className="char-model-and-gear-container">
                                <CharacterModel
                                    FFXIVData={FFXIVData}
                                    onHome={onHome}
                                />
                                <GearList
                                    FFXIVData={FFXIVData}
                                    onHome={onHome}
                                />
                            </div>
                            <div className="char-stats-container">
                                <Jobs FFXIVData={FFXIVData} onHome={onHome} />
                                <Attributes
                                    FFXIVData={FFXIVData}
                                    onHome={onHome}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Paper>
        </>
    );
}
