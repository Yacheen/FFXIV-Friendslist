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
});

export default function NavBar() {
    const [onHome, setOnHome] = useState(true);
    const classes = useStyles();
    const navLinksMatches = useMediaQuery("(max-width: 1140px)");

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
                            <Typography variant="h3">
                                FFXIV Friendslist
                            </Typography>
                        </div>
                    </Link>
                    <div className="nav-buttons">
                        <Link to="/Motivation" className="nav-button-link">
                            <Button className="nav-button" color="primary">
                                <HelpOutlineIcon fontSize="large" />{" "}
                                {navLinksMatches ? null : (
                                    <span className="nav-button-text">
                                        About
                                    </span>
                                )}
                            </Button>
                        </Link>
                        <Link
                            to="/Contact"
                            className="nav-button-link"
                            href="#Contact"
                        >
                            <Button className="nav-button" color="secondary">
                                <ForumIcon fontSize="large" />
                                {navLinksMatches ? null : (
                                    <span className="nav-button-text">
                                        Contact
                                    </span>
                                )}
                            </Button>
                        </Link>
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
