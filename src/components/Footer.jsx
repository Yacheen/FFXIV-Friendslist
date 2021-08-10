import {
    Typography,
    Paper,
    useMediaQuery,
    Link,
    Button,
} from "@material-ui/core";
import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Footer() {
    const footerTextTabletView = useMediaQuery("(max-width: 1140px)");
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

                    {footerTextPhoneView || footerTextTabletView ? (
                        <div className="footer-social-links" id="Contact">
                            <Link
                                href="https://www.linkedin.com/in/yassin-moussaoui-a93ab51b6/"
                                underline="none"
                                target="_blank"
                            >
                                <div className="linkedin-link footer-link">
                                    <LinkedInIcon fontSize="large" />
                                </div>
                            </Link>
                            <Link
                                href="https://twitter.com/DJ_Y4SSIN"
                                underline="none"
                                target="_blank"
                            >
                                <div className="twitter-link footer-link">
                                    <TwitterIcon fontSize="large" />
                                </div>
                            </Link>
                            <Link
                                href="https://github.com/Yacheen"
                                underline="none"
                                target="_blank"
                            >
                                <div className="github-link footer-link">
                                    <GitHubIcon fontSize="large" />
                                </div>
                            </Link>
                            <Link
                                href="mailto:yassinmoussaouibusiness@gmail.com"
                                underline="none"
                                target="_blank"
                            >
                                <div className="email-link footer-link">
                                    <EmailIcon fontSize="large" />
                                </div>
                            </Link>
                        </div>
                    ) : (
                        <div className="footer-social-links">
                            <Link
                                href="https://www.linkedin.com/in/yassin-moussaoui-a93ab51b6/"
                                underline="none"
                                target="_blank"
                            >
                                <Button className="linkedin-link footer-link">
                                    <Typography variant="h6">
                                        LinkedIn
                                    </Typography>
                                    <LinkedInIcon fontSize="large" />
                                </Button>
                            </Link>
                            <Link
                                href="https://twitter.com/DJ_Y4SSIN"
                                underline="none"
                                target="_blank"
                            >
                                <Button className="twitter-link footer-link">
                                    <Typography variant="h6">
                                        Twitter
                                    </Typography>
                                    <TwitterIcon fontSize="large" />
                                </Button>
                            </Link>
                            <Link
                                href="https://github.com/Yacheen"
                                underline="none"
                                target="_blank"
                            >
                                <Button className="github-link footer-link">
                                    <Typography variant="h6">
                                        Github{" "}
                                    </Typography>
                                    <GitHubIcon fontSize="large" />
                                </Button>
                            </Link>
                            <Link
                                href="mailto:yassinmoussaouibusiness@gmail.com"
                                underline="none"
                                target="_blank"
                            >
                                <Button className="email-link footer-link">
                                    <Typography variant="h6">Email</Typography>
                                    <EmailIcon fontSize="large" />
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </Paper>
        </>
    );
}
