import { Typography, Paper, Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: "2rem",
        maxWidth: 330,
    },
    attributeColors: {
        color: theme.palette.secondary.light,
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
        "Mind",
        "Piety",
        "Tenacity",
    ];
    if (FFXIVData && onHome == false) {
        return (
            <Paper className={classes.root}>
                <Grid container spacing={1}>
                    {FFXIVData.Character.GearSet.Attributes.map(
                        (attributeInfo) => {
                            if (
                                allowedAttributes.includes(
                                    attributeInfo.Attribute.Name
                                )
                            ) {
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
