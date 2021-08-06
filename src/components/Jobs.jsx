import React from "react";
import {
    Grid,
    Paper,
    Typography,
    makeStyles,
    Tooltip,
    Button,
    Link,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginRight: "4.6rem",
        maxWidth: 400,
        padding: "1rem",
    },
    jobImageStyling: {
        maxWidth: 30,
    },
    itemStyling: {
        padding: "0.2rem",
        color: theme.palette.primary.light,
    },
    tooltip: {
        fontSize: 20,
    },
}));

export default function Jobs({ FFXIVData, onHome }) {
    const classes = useStyles();
    const allowedJobs = ["Disciple of War", "Disciple of Magic"];

    if (FFXIVData && onHome == false) {
        return (
            <Paper className={classes.root}>
                <Grid container spacing={1}>
                    {FFXIVData.Character.ClassJobs.map((classJob) => {
                        if (
                            allowedJobs.includes(
                                classJob.Job.ClassJobCategory.Name
                            )
                        ) {
                            return (
                                <Link
                                    href={`https://na.finalfantasyxiv.com/jobguide/${classJob.Job.Name}`}
                                    underline="none"
                                    target="_blank"
                                >
                                    <Tooltip
                                        classes={{
                                            tooltip: classes.tooltip,
                                        }}
                                        title={classJob.Job.Name}
                                        placement="top"
                                    >
                                        <Button>
                                            <Typography
                                                classes={{
                                                    h5: classes.itemStyling,
                                                }}
                                                variant="h5"
                                                align="center"
                                            >
                                                <Grid item xs="4">
                                                    <img
                                                        className={
                                                            classes.jobImageStyling
                                                        }
                                                        src={`https://xivapi.com${classJob.Job.Icon}`}
                                                        alt={classJob.Job.Name}
                                                    />
                                                </Grid>
                                                {classJob.Level}
                                            </Typography>
                                        </Button>
                                    </Tooltip>
                                </Link>
                            );
                        }
                    })}
                </Grid>
            </Paper>
        );
    } else {
        return null;
    }
}
