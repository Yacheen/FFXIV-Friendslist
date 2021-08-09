import {
    Typography,
    Paper,
    Grid,
    makeStyles,
    useMediaQuery,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: "1rem",
        maxWidth: 330,
    },
    attributeColors: {
        color: theme.palette.secondary.light,
    },
    [theme.breakpoints.down(theme.breakpoints.values.laptop)]: {
        root: {
            maxWidth: 275,
            maxHeight: 300,
        },
    },
    [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
        root: {
            minWidth: 275,
            maxHeight: 200,
        },
    },
}));

export default function Attributes({ FFXIVData, onHome }) {
    const classes = useStyles();
    const allowedAttributes = [
        "Vitality",
        "Strength",
        "Dexterity",
        "Intelligence",
        "Critical Hit",
        "Determination",
        "Spell Speed",

        "Piety",
        "Tenacity",
    ];
    const attributesTabletTime = useMediaQuery("(max-width: 1140px)");

    if (FFXIVData && onHome == false) {
        return (
            <Paper className={classes.root}>
                <Grid container spacing={0}>
                    {FFXIVData.Character.GearSet.Attributes.map(
                        (attributeInfo) => {
                            if (
                                allowedAttributes.includes(
                                    attributeInfo.Attribute.Name
                                )
                            ) {
                                if (attributesTabletTime) {
                                    return (
                                        <Grid item xs="4">
                                            <Typography variant="h5">
                                                {attributeInfo.Attribute.Name}:{" "}
                                                <br />
                                                <Typography
                                                    variant="h6"
                                                    classes={{
                                                        h6: classes.attributeColors,
                                                    }}
                                                >
                                                    {attributeInfo.Value}
                                                </Typography>
                                            </Typography>
                                        </Grid>
                                    );
                                } else {
                                    return (
                                        <Grid item xs="6">
                                            <Typography variant="h5">
                                                {attributeInfo.Attribute.Name}:{" "}
                                                <br />
                                                <Typography
                                                    variant="h6"
                                                    classes={{
                                                        h6: classes.attributeColors,
                                                    }}
                                                >
                                                    {attributeInfo.Value}
                                                </Typography>
                                            </Typography>
                                        </Grid>
                                    );
                                }
                            }
                        }
                    )}
                </Grid>
            </Paper>
        );
    } else {
        return null;
    }
}
