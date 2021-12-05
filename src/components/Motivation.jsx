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

            </CardContent>
        </Card>
    );
}
