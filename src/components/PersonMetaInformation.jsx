import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import React, { useState, useEffect } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PetsIcon from "@material-ui/icons/Pets";
import FlightIcon from "@material-ui/icons/Flight";
import { useMediaQuery } from "@material-ui/core";
import { gsap } from "gsap";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 450,
        display: "block",
    },
    introTextStyling: {
        fontWeight: "200",
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    [theme.breakpoints.down(theme.breakpoints.values.laptop)]: {
        root: {
            width: 350,
        },
    },
    [theme.breakpoints.down(theme.breakpoints.values.phone)]: {
        root: {
            width: 300,
        },
    },
}));

export default function PersonMetaInformation({
    onHome,
    FFXIVData,
    selectedMetaInformation,
    setSelectedMetaInformation,
    selectedIndex,
    buttonPressed,
    setButtonPressed,
    metaInfoLoading,
    setMetaInfoLoading,
}) {
    const classes = useStyles();

    const introtextMatchesTablet = useMediaQuery("(max-width: 1140px)");
    const introtextMatchesPhone = useMediaQuery("(max-width: 740px)");

    const capitalizeFirstLetter = (string) => {
        return string?.charAt(0)?.toUpperCase() + string?.slice(1);
    };

    const fetchSelectedData = async (buttonClicked, characterId) => {
        setMetaInfoLoading(true);
        if (buttonClicked === "MOUNTS") {
            const response = await fetch(
                `https://xivapi.com/character/${characterId}?data=MIMO`
            );
            const data = await response.json();
            setSelectedMetaInformation(data);
            setButtonPressed(buttonClicked);
        } else if (buttonClicked === "MINIONS") {
            const response = await fetch(
                `https://xivapi.com/character/${characterId}?data=MIMO`
            );
            const data = await response.json();
            setSelectedMetaInformation(data);
            setButtonPressed(buttonClicked);
        } else {
            const response = await fetch(
                `https://xivapi.com/character/${characterId}?data=${buttonClicked}`
            );
            const data = await response.json();
            setSelectedMetaInformation(data);
            setButtonPressed(buttonClicked);
        }
        setMetaInfoLoading(false);

        //do dis
    };

    if (FFXIVData && onHome == false) {
        return (
            <Card className={classes.root}>
                <CardContent className="meta-info-top">
                    <Typography noWrap={true} variant="h3" color="primary">
                        {FFXIVData.Character.Name}
                    </Typography>
                    <Typography className="job-info" noWrap={true} variant="h4">
                        Class:{" "}
                        {capitalizeFirstLetter(
                            FFXIVData?.Character?.ActiveClassJob?.Job?.Name
                        )}
                        <img
                            src={`https://xivapi.com${FFXIVData?.Character?.ActiveClassJob?.Job?.Icon}`}
                            alt={`class icon`}
                        />
                    </Typography>
                    <Typography noWrap={true} variant="h4">
                        Race: {FFXIVData.Character.Race.Name}
                    </Typography>

                    <Typography variant="h4">
                        Server: {FFXIVData.Character.Server}
                    </Typography>
                </CardContent>
                <CardActions className="meta-info-bottom">
                    <Button
                        onClick={() =>
                            fetchSelectedData(
                                "MOUNTS",
                                `${FFXIVData.Character.ID}`
                            )
                        }
                        size="medium"
                        variant="contained"
                        color="secondary"
                        endIcon={<FlightIcon />}
                        disabled={metaInfoLoading}
                    >
                        Mounts
                    </Button>
                    <Button
                        onClick={() =>
                            fetchSelectedData("MINIONS", FFXIVData.Character.ID)
                        }
                        size="medium"
                        variant="contained"
                        color="secondary"
                        endIcon={<PetsIcon />}
                        disabled={metaInfoLoading}
                    >
                        Pets
                    </Button>
                    <Button
                        onClick={() =>
                            fetchSelectedData("FC", FFXIVData.Character.ID)
                        }
                        size="medium"
                        variant="contained"
                        color="secondary"
                        endIcon={<PeopleAltIcon />}
                        disabled={metaInfoLoading}
                    >
                        Guild
                    </Button>
                    <Button
                        onClick={() =>
                            fetchSelectedData("FR", FFXIVData.Character.ID)
                        }
                        size="medium"
                        variant="contained"
                        color="secondary"
                        endIcon={<FavoriteIcon />}
                        disabled={metaInfoLoading}
                    >
                        Friends
                    </Button>
                </CardActions>
            </Card>
        );
    } else {
        return (
            <section className="intro-page">
                <Typography variant="h2" align="left" className="intro-text">
                    <strong>FFXIV Friendslist</strong>
                    {introtextMatchesTablet || introtextMatchesPhone ? (
                        <Typography
                            variant="h3"
                            align="left"
                            classes={{ root: classes.introTextStyling }}
                        >
                            Select someone by tapping the menu on the left to
                            get started
                        </Typography>
                    ) : (
                        <Typography
                            variant="h3"
                            align="left"
                            classes={{ root: classes.introTextStyling }}
                        >
                            Select someone to view their profile
                        </Typography>
                    )}
                </Typography>
            </section>
        );
    }
}
