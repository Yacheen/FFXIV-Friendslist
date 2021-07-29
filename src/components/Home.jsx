
import { Paper } from '@material-ui/core';
import React, { useState } from 'react';

import CharacterModel from './CharacterModel';
import GearList from './GearList';
import PersonData from './PersonData';
import PersonMetaInformation from './PersonMetaInformation';
import SideBar from './SideBar';
import Stats from './Stats';

export default function Home() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [FFXIVData, setFFXIVData] = useState(undefined);
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
									<PersonMetaInformation FFXIVData={FFXIVData} />
								</div>
								<div className="person-data-container">
									<PersonData FFXIVData={FFXIVData} />
								</div>
							</div>
						</div>

						{/* right side of main content */}
						<div className="home-right-side">
							<div className="char-model-and-gear-container">
								<CharacterModel FFXIVData={FFXIVData} />
								<GearList FFXIVData={FFXIVData} />
							</div>
							<div className="char-stats-container">
								<Stats FFXIVData={FFXIVData} />
							</div>
						</div>
					</div>
				</div>
			</Paper>
		</>
	);
}
