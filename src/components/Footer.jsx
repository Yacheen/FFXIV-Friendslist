import { Typography, Paper, useMediaQuery } from "@material-ui/core";
import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import DiscordLogo from "../Images/discordLogo.png";

export default function Footer() {
    const footerTextPhoneView = useMediaQuery("(max-width: 740px)");
    return (
        <>
            {/* bottom of all pages, copyright and probably links or social medias */}
            <Paper square elevation={3} className="footer">
                <div className="footer-content">
                    <div className="footer-copyright-text">
                        {footerTextPhoneView ? (
                            <Typography variant="h7">
                                Yassin &copy; All Rights Reserved.
                            </Typography>
                        ) : (
                            <Typography variant="h6">
                                Yassin &copy; All Rights Reserved.
                            </Typography>
                        )}
                    </div>
                    <div className="footer-social-links">
                        <div className="discord-link">
                            <DiscordLogo />
                        </div>
                        <div className="linkedin-link">
                            <LinkedInIcon />
                        </div>
                        <div className="twitter-link">
                            <TwitterIcon />
                        </div>
                        <div className="github-link">
                            <GitHubIcon />
                        </div>
                        <div className="email-link">
                            <EmailIcon />
                        </div>
                    </div>
                </div>
            </Paper>
        </>
    );
}
