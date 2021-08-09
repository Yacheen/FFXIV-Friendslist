import React from "react";
import {
    Grid,
    Paper,
    Typography,
    makeStyles,
    Tooltip,
    Button,
    Link,
    useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginRight: "2rem",
        maxWidth: 400,
        padding: "0.4rem",
    },
    jobImageStyling: {
        maxWidth: 30,
    },
    itemStyling: {
        color: theme.palette.primary.light,
    },
    tooltip: {
        fontSize: 16,
    },
    [theme.breakpoints.down(theme.breakpoints.values.laptop)]: {
        root: {
            maxWidth: 300,
            maxHeight: 300,
        },
        jobImageStyling: {
            maxWidth: 25,
        },
        jobLevelStyling: {
            fontSize: 12,
        },
    },
    [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
        root: {
            maxWidth: 400,
            maxHeight: 300,
        },
        jobImageStyling: {
            maxWidth: 25,
        },
        jobLevelStyling: {
            fontSize: 12,
        },
    },
}));

export default function Jobs({ FFXIVData, onHome }) {
    const classes = useStyles();
    const allowedJobs = ["Disciple of War", "Disciple of Magic"];
    const jobsTabletTime = useMediaQuery("(max-width: 1140px)");

    if (FFXIVData && onHome == false) {
        return (
            <Paper className={classes.root}>
                <Grid container spacing={1} className={classes.JobsStyling}>
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
                                                className={
                                                    classes.jobLevelStyling
                                                }
                                                classes={{
                                                    h5: classes.itemStyling,
                                                }}
                                                variant="h5"
                                                align="center"
                                            >
                                                {jobsTabletTime ? (
                                                    <Grid
                                                        item
                                                        xs="4"
                                                        className={
                                                            classes.JobItemStyling
                                                        }
                                                    >
                                                        <img
                                                            className={
                                                                classes.jobImageStyling
                                                            }
                                                            src={`https://xivapi.com${classJob.Job.Icon}`}
                                                            alt={
                                                                classJob.Job
                                                                    .Name
                                                            }
                                                        />
                                                    </Grid>
                                                ) : (
                                                    <Grid
                                                        item
                                                        xs="4"
                                                        className={
                                                            classes.JobItemStyling
                                                        }
                                                    >
                                                        <img
                                                            className={
                                                                classes.jobImageStyling
                                                            }
                                                            src={`https://xivapi.com${classJob.Job.Icon}`}
                                                            alt={
                                                                classJob.Job
                                                                    .Name
                                                            }
                                                        />
                                                    </Grid>
                                                )}

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
