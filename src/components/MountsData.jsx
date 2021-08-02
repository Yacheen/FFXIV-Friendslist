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
    },
    gridRoot: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
    },
    tooltip: {
        color: "primary",
        fontSize: 20,
    },
}));

export default function MountsData({ selectedMetaInformation, selectedIndex }) {
    const classes = useStyles();
    if (selectedMetaInformation) {
        return (
            <Card className={classes.root}>
                <CardContent className="person-data-content">
                    <Typography
                        variant="h3"
                        className="person-data-header"
                        color="primary"
                        align="center"
                    >
                        Mounts
                    </Typography>
                    <div className="person-data-mounts">
                        <Paper
                            className={`${classes.paper} person-data-mounts-content`}
                        >
                            {selectedMetaInformation.Mounts.map((mountInfo) => {
                                return (
                                    <Grid container spacing={2}>
                                        <Grid container={true} item xs={1}>
                                            <Tooltip
                                                classes={{
                                                    tooltip: classes.tooltip,
                                                }}
                                                arrow={true}
                                                title={`Mount | ${mountInfo.Name}`}
                                                placement="top"
                                            >
                                                <img
                                                    src={mountInfo.Icon}
                                                    alt={mountInfo.Name}
                                                />
                                            </Tooltip>
                                        </Grid>
                                    </Grid>
                                );
                            })}
                        </Paper>
                    </div>
                </CardContent>
                <CardActions></CardActions>
            </Card>
        );
    }
}
