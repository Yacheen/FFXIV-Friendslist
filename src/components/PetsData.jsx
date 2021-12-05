import React from "react";
import {
    Typography,
    Grid,
    Paper,
    Tooltip,
    Card,
    makeStyles,
    CardContent,
    CardActions,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        overflowY: "auto",
    },
    gridRoot: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
    },
    tooltip: {
        fontSize: 20,
    },
    [theme.breakpoints.down(theme.breakpoints.values.laptop)]: {
        root: {
            width: 350,
            height: 417,
        },
    },
    [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
        root: {
            height: 375,
        },
    },
    [theme.breakpoints.down(theme.breakpoints.values.phone)]: {
        root: {
            width: 300,
        },
    },
}));

export default function PetsData({ selectedMetaInformation }) {
    const classes = useStyles();
    if (selectedMetaInformation) {
        if(selectedMetaInformation.Minions) {
            return (
                <Card className={classes.root}>
                    <Typography
                        variant="h3"
                        className="person-data-header"
                        color="primary"
                        align="center"
                    >
                        Pets
                    </Typography>
                    <CardContent className="person-data-content">
                        <div className="person-data-mounts">
                            <Paper
                                className={`${classes.paper} person-data-mounts-content`}
                                elevation={0}
                            >
                                {selectedMetaInformation?.Minions?.map(
                                    (mountInfo) => {
                                        return (
                                            <Grid container spacing={2}>
                                                <Grid container={true} item xs={1}>
                                                    <Tooltip
                                                        classes={{
                                                            tooltip:
                                                                classes.tooltip,
                                                        }}
                                                        arrow={true}
                                                        title={`${mountInfo?.Name}`}
                                                        placement="top"
                                                    >
                                                        <img
                                                            src={mountInfo?.Icon}
                                                            alt={mountInfo?.Name}
                                                        />
                                                    </Tooltip>
                                                </Grid>
                                            </Grid>
                                        );
                                    }
                                )}
                            </Paper>
                        </div>
                    </CardContent>
                    <CardActions></CardActions>
                </Card>
            );

        }
        else {
            return <h1>Minions appear not to be working at the moment <br/> due to the new expansion released Dec. 2nd</h1>
        }
        
    }
}
