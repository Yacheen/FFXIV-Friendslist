import React from 'react'
import { Typography, Paper } from '@material-ui/core';

export default function Footer() {
	return (
		<>
			{/* bottom of all pages, copyright and probably links or social medias*/}
			<Paper square={true} elevation={3} className="footer">
				<div className="footer-content">
					<div className="footer-copyright-text">
						<Typography variant="h6">Yassin &copy; All Rights Reserved.</Typography>
					</div>
					<div className="footer-social-links">
						<div className="twitter-link"></div>
						<div className="github-link"></div>
						<div className="email-link"></div>
					</div>
				</div>
			</Paper>
		</>
	);
}
