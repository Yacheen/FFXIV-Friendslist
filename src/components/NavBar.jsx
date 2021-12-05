import {
    Typography,
    makeStyles,
    Paper,
    Button,
    useMediaQuery,
} from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Motivation from "./Motivation";
import Burger from "./Burger";
import { gsap } from "gsap";

const useStyles = makeStyles({
    root: {
        minHeight: "8vh",
    },
    headerImage: {
        maxWidth: "20%",
    },
});

export default function NavBar() {
    const [onHome, setOnHome] = useState(true);
    const classes = useStyles();
    const navLinksMatchesTablet = useMediaQuery("(max-width: 1140px)");
    const navLinksMatchesPhone = useMediaQuery("(max-width: 740px)");

    gsap.fromTo(
        ".nav-bar-content",
        { opacity: 0 },
        { opacity: 1, duration: 2 }
    );

    const gotoHome = () => {
        setOnHome(true);
    };

    return (
        <Router>
            <Paper square elevation={3} className={`${classes.root} nav-bar`}>
                <div className="nav-bar-content">
                    <Burger />

                    <Link to="/" onClick={() => gotoHome()}>
                        <div className="nav-header">
                            {navLinksMatchesPhone ? (
                                <Typography variant="h4" align="center">
                                    FFXIV Friendslist
                                </Typography>
                            ) : (
                                <Typography variant="h3" align="center">
                                    FFXIV Friendslist
                                </Typography>
                            )}
                        </div>
                    </Link>
                    <div className="nav-buttons">
                        <Link to="/Motivation" className="nav-button-link">
                            <Button className="nav-button" color="primary">
                                <HelpOutlineIcon fontSize="large" />{" "}
                                {navLinksMatchesTablet ? null : (
                                    <span className="nav-button-text">
                                        About
                                    </span>
                                )}
                            </Button>
                        </Link>
                        <a
                            className="nav-button-link"
                            href="mailto:yassinmoussaouibusiness@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button className="nav-button" color="secondary">
                                <ForumIcon fontSize="large" />
                                {navLinksMatchesTablet ? null : (
                                    <span className="nav-button-text">
                                        Contact
                                    </span>
                                )}
                            </Button>
                        </a>
                    </div>
                </div>
            </Paper>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <Home onHome={onHome} setOnHome={setOnHome} />
                    )}
                />
                <Route exact path="/Motivation" component={Motivation} />
            </Switch>
        </Router>
    );
}
