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
    const [sidebarToggled, setSidebarToggled] = useState("sidebarUntoggled");
    const classes = useStyles();
    const navLinksMatches = useMediaQuery("(max-width: 1140px)");

    const gotoHome = () => {
        setOnHome(true);
    };
    const toggleNavBurger = () => {
        if (sidebarToggled === "sidebarToggled") {
            setSidebarToggled("sidebarUntoggled");
            gsap.to(".side-bar-container", {
                duration: 0.4,
                x: "-150%",
                ease: "in",
            });
        } else {
            setSidebarToggled("sidebarToggled");
            gsap.to(".side-bar-container", {
                duration: 0.4,
                x: "0%",
                ease: "in",
            });
        }
    };

    return (
        <Router>
            <Paper square elevation={3} className={`${classes.root} nav-bar`}>
                <div className="nav-bar-content">
                    <div
                        className={`${sidebarToggled} nav-burger`}
                        onClick={() => toggleNavBurger()}
                    >
                        <Burger sidebarToggled={sidebarToggled} />
                    </div>

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
                        <Home
                            onHome={onHome}
                            setOnHome={setOnHome}
                            sidebarToggled={sidebarToggled}
                        />
                    )}
                />
                <Route exact path="/Motivation" component={Motivation} />
            </Switch>
        </Router>
    );
}
