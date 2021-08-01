import React from "react";

import {
    Typography,
    Grid,
    Paper,
    Tooltip,
    Avatar,
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
}));

export default function MountsData({ selectedMetaInformation, selectedIndex }) {
    const classes = useStyles();
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
                                            arrow={true}
                                            className={`person-data-mounts-tooltip`}
                                            interactive={true}
                                            title={mountInfo.Name}
                                            placement="top"
                                        >
                                            <img
                                                src={mountInfo.Icon}
                                                alt="nothin"
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
