import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export default function GetStatusButton(props) {
	const [isLoading, setIsLoading] = useState(false);

	const fetchFFXIVApi = async () => {
		setIsLoading(true);
		const response = await fetch(
			`https://xivapi.com/character/${props.selectedIndex}?extended=1,data=FR`,
		);
		const data = await response.json();
		props.setFFXIVData(data);
		setIsLoading(false);
		props.setSelectedButton(true);
	};

	return (
		<div className="status-button-container">
			{/* find out how to have selectedIndex not be undefined. its giving me undefined for some reason*/}
			<Button
				disabled={props.selectedButton}
				onClick={fetchFFXIVApi}
				size="large"
				variant="contained"
				color="secondary"
				className="status-button"
			>
				<SearchIcon fontSize="large" />
				{isLoading ? <>Loading... </> : <>View Profile </>}
			</Button>
		</div>
	);
}
