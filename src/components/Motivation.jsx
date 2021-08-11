import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import { gsap } from "gsap";

const useStyles = makeStyles((theme) => ({
    actualRoot: {
        height: "auto",
    },
    root: {
        maxWidth: "73%",
        margin: "0 auto",
    },
    titleIndent: {
        marginBottom: "2rem",
    },
    ulIndent: {
        marginTop: "2rem",
        paddingLeft: "5rem",
    },
    primaryStyling: {
        color: theme.palette.primary.light,
    },
    secondaryStyling: {
        color: theme.palette.secondary.light,
    },
}));
export default function Motivation() {
    const classes = useStyles();

    return (
        <Card square className={`${classes.actualRoot}`}>
            <CardContent className={`${classes.root} about-content`}>
                <Typography
                    variant="h3"
                    align="left"
                    classes={{ h3: classes.titleIndent }}
                >
                    On this website, view any of my raid group's FFXIV
                    characters
                </Typography>
                <Typography
                    variant="h4"
                    align="left"
                    className={classes.primaryStyling}
                >
                    <ul
                        className={`${classes.ulIndent} ${classes.titleIndent}`}
                    >
                        <li>Character model,</li>
                        <li>Jobs leveled,</li>
                        <li>Character attributes,</li>
                        <li>Gear,</li>
                        <li>Guild focus and rank,</li>
                        <li>And more</li>
                    </ul>
                    <br />
                </Typography>

                <Typography variant="h4" align="left">
                    Plans for continuous development involve adding new features
                    <br />
                    <br /> One example of a feature I planned to be added in the
                    future is a page where
                    <br /> the user is able to view prices of popular items on
                    different servers without <br />
                    having to perform a tedious process of:
                    <Typography
                        variant="h4"
                        className={`${classes.ulIndent} ${classes.secondaryStyling}`}
                    >
                        - opening up FFXIV <br />- waiting for it to load <br />
                        - waiting in queue to login <br />- hopping from world
                        to world to check prices <br />- then memorizing each
                        world,
                    </Typography>
                    <br />
                    When instead you could just check here!
                    <br />
                    <br />
                    <br />
                </Typography>
                <Typography variant="h3" align="left">
                    <i>
                        If interested in making a project together,
                        <br /> feel free to contact me with one of the links
                        below
                    </i>
                </Typography>
            </CardContent>
        </Card>
    );
}
