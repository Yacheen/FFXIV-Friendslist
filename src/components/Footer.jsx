import { Typography, Paper } from '@material-ui/core';
import React from 'react';

export default function Footer() {
	return (
		<>
			{/* bottom of all pages, copyright and probably links or social medias */}
			<Paper square elevation={3} className="footer">
				<div className="footer-content">
					<div className="footer-copyright-text">
						<Typography variant="h6">Yassin &copy; All Rights Reserved.</Typography>
					</div>
					<div className="footer-social-links">
						<div className="twitter-link" />
						<div className="github-link" />
						<div className="email-link" />
					</div>
				</div>
			</Paper>
		</>
	);
}
