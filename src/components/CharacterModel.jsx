import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function CharacterModel(props) {
	if (props.FFXIVData) {
		console.log(props.FFXIVData);

		return (
			<div className="char-model-container">
				<img
					className="char-model"
					src={props.FFXIVData.Character.Portrait}
					alt="character portrait"
				/>
			</div>
		);
	} else {
		return (
			<div className="char-model-container">
				<Typography variant="h3">Select someone to get started!</Typography>
			</div>
		);
	}
}






