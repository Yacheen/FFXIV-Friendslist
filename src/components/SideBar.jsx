import React, {useState} from 'react'
import { Paper, Typography } from '@material-ui/core'
import GetStatusButton from './GetStatusButton';
import FriendsList from './FriendsList';

export default function SideBar(props) {
	const [selectedButton, setSelectedButton] = useState(true);

	return (
		<Paper elevation={3} square={true} className={` side-bar-container`}>
			<div className="side-bar-content">
				<div className="get-status-button">
					<Typography variant="h5" className="button-hint">
						Choose a player below, and click on the button below to see their stats!
					</Typography>
					<GetStatusButton
						selectedButton={selectedButton}
						setSelectedButton={setSelectedButton}
						FFXIVData={props.FFXIVData}
						setFFXIVData={props.setFFXIVData}
						selectedIndex={props.selectedIndex}
					/>
				</div>

				<div className="friends-list">
					<FriendsList
						selectedButton={selectedButton}
						setSelectedButton={setSelectedButton}
						raidGroupIdentities={props.raidGroupIdentities}
						selectedIndex={props.selectedIndex}
						setSelectedIndex={props.setSelectedIndex}
					/>
				</div>
			</div>
		</Paper>
	);
}
