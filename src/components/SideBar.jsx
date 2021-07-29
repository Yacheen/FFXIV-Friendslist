import { Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';

import FriendsList from './FriendsList';
import GetStatusButton from './GetStatusButton';

export default function SideBar({
	FFXIVData,
	setFFXIVData,
	selectedIndex,
	raidGroupIdentities,
	setSelectedIndex,
}) {
	const [selectedButton, setSelectedButton] = useState(true);

	return (
		<Paper elevation={3} square className={` side-bar-container`}>
			<div className="side-bar-content">
				<div className="get-status-button">
					<Typography variant="h5" className="button-hint">
						Choose a player below, and click on the button below to see their stats!
					</Typography>
					<GetStatusButton
						selectedButton={selectedButton}
						setSelectedButton={setSelectedButton}
						FFXIVData={FFXIVData}
						setFFXIVData={setFFXIVData}
						selectedIndex={selectedIndex}
					/>
				</div>

				<div className="friends-list">
					<FriendsList
						selectedButton={selectedButton}
						setSelectedButton={setSelectedButton}
						raidGroupIdentities={raidGroupIdentities}
						selectedIndex={selectedIndex}
						setSelectedIndex={setSelectedIndex}
					/>
				</div>
			</div>
		</Paper>
	);
}
