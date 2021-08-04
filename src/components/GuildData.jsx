import React from "react";
import {
    Card,
    CardContent,
    Typography,
    makeStyles,
    CardActions,
    Button,
    Paper,
    Grid,
    Tooltip,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 450,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        maxHeight: "55vh",
        overflow: "auto",
    },
    guildInfo: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "4rem",
    },
    guildMetaInformation: {
        display: "flex",
        flexDirection: "column",
    },
    buttonStyling: {
        backgroundColor: theme.palette.primary.light,
        fontSize: 14,
    },
    quoteStyling: {
        color: theme.palette.secondary.light,
    },
    focusStyling: {
        marginBottom: "1rem",
    },
    focusItemStyling: {
        opacity: 0.2,
    },
    tooltipStyling: {
        color: "primary",
        fontSize: 20,
    },
    focusContainerStyling: {
        padding: "2rem",
    },
}));

export default function GuildData({
    setSelectedMetaInformation,
    selectedMetaInformation,
    FFXIVData,
    metaInfoLoading,
    setMetaInfoLoading,
}) {
    const getGuildMembers = async (characterId) => {
        setMetaInfoLoading(true);
        const response = await fetch(
            `https://xivapi.com/character/${characterId}?data=FCM`
        );
        const data = await response.json();
        setSelectedMetaInformation(data);

        setMetaInfoLoading(false);
    };
    const classes = useStyles();
    return (
        <Card className={`${classes.root}`}>
            <Typography variant="h3" color="primary" align="center">
                {selectedMetaInformation.FreeCompany.Name}
            </Typography>
            <Typography
                variant="h4"
                align="center"
                color="primary"
                classes={{
                    colorPrimary: classes.quoteStyling,
                }}
            >
                " {selectedMetaInformation.FreeCompany.Slogan}"
            </Typography>
            <CardContent>
                <div className={classes.guildInfo}>
                    <div className={classes.guildMetaInformation}>
                        <Typography variant="h4">
                            Members:{" "}
                            {
                                selectedMetaInformation.FreeCompany
                                    .ActiveMemberCount
                            }
                        </Typography>
                        <Typography variant="h4">
                            Server: {selectedMetaInformation.FreeCompany.Server}
                        </Typography>
                        <Typography variant="h4">
                            Rank: {selectedMetaInformation.FreeCompany.Rank}
                        </Typography>
                    </div>
                    <div className={classes.guildButton}>
                        <Button
                            size="medium"
                            variant="contained"
                            classes={{
                                contained: classes.buttonStyling,
                            }}
                            disabled={metaInfoLoading}
                            onClick={() =>
                                getGuildMembers(FFXIVData.Character.ID)
                            }
                        >
                            View members
                        </Button>
                    </div>
                </div>

                <Typography variant="h4" className={classes.focusStyling}>
                    Focus
                </Typography>
                <Paper
                    variant="outlined"
                    square
                    className={classes.focusContainerStyling}
                >
                    <Grid container spacing={3}>
                        {selectedMetaInformation.FreeCompany.Focus.map(
                            (focusedItem) => {
                                //for each focused item, make a grid item
                                if (focusedItem.Status === true) {
                                    return (
                                        <Grid item xs>
                                            <Tooltip
                                                classes={{
                                                    tooltip:
                                                        classes.tooltipStyling,
                                                }}
                                                arrow={true}
                                                title={`${focusedItem.Name}`}
                                                placement="top"
                                            >
                                                <img
                                                    src={focusedItem.Icon}
                                                    alt={focusedItem.Name}
                                                />
                                            </Tooltip>
                                        </Grid>
                                    );
                                } else {
                                    //return a low opacity focus
                                    return (
                                        <Grid
                                            item
                                            xs
                                            classes={{
                                                item: classes.focusItemStyling,
                                            }}
                                        >
                                            <Tooltip
                                                classes={{
                                                    tooltip:
                                                        classes.tooltipStyling,
                                                }}
                                                arrow={true}
                                                title={`${focusedItem.Name}`}
                                                placement="top"
                                            >
                                                <img
                                                    src={focusedItem.Icon}
                                                    alt={focusedItem.Name}
                                                />
                                            </Tooltip>
                                        </Grid>
                                    );
                                }
                            }
                        )}
                    </Grid>
                </Paper>
            </CardContent>
            <CardActions></CardActions>
        </Card>
    );
}
