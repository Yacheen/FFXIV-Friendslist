import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import MountsData from "./MountsData";

import React from "react";
import PetsData from "./PetsData";
import FriendsListData from "./FriendsListData";
import GuildData from "./GuildData";
import GuildMemberData from "./GuildMemberData";

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
    loadingTypography: {
        color: theme.palette.secondary.light,
    },
    [theme.breakpoints.down(theme.breakpoints.values.laptop)]: {
        root: {
            width: 350,
        },
    },
    [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
        root: {
            width: 350,
        },
    },
}));

export default function PersonData({
    onHome,
    setSelectedMetaInformation,
    selectedMetaInformation,
    FFXIVData,
    buttonPressed,
    metaInfoLoading,
    setMetaInfoLoading,
    setButtonPressed,
}) {
    const classes = useStyles();
    while (metaInfoLoading) {
        return (
            <Card className={classes.root}>
                <CardContent className={`person-data-loading`}>
                    <Typography variant="h4" color="secondary">
                        Loading...
                        <br /> <br />
                        <Typography
                            variant="h5"
                            classes={{ h5: classes.loadingTypography }}
                        >
                            Hint: <br /> Friends List may take a tiny bit
                            longer..
                        </Typography>
                    </Typography>
                </CardContent>
                <CardActions></CardActions>
            </Card>
        );
    }
    if (selectedMetaInformation && onHome == false) {
        if (buttonPressed === "FC") {
            return (
                <GuildData
                    setSelectedMetaInformation={setSelectedMetaInformation}
                    selectedMetaInformation={selectedMetaInformation}
                    metaInfoLoading={metaInfoLoading}
                    setMetaInfoLoading={setMetaInfoLoading}
                    FFXIVData={FFXIVData}
                    setButtonPressed={setButtonPressed}
                />
            );
        } else if (buttonPressed === "FR") {
            return (
                <FriendsListData
                    selectedMetaInformation={selectedMetaInformation}
                    setSelectedMetaInformation={setSelectedMetaInformation}
                    setMetaInfoLoading={setMetaInfoLoading}
                    metaInfoLoading={metaInfoLoading}
                />
            );
        } else if (buttonPressed === "MOUNTS") {
            return (
                <MountsData selectedMetaInformation={selectedMetaInformation} />
            );
        } else if (buttonPressed === "MINIONS") {
            return (
                <PetsData selectedMetaInformation={selectedMetaInformation} />
            );
        } else if (buttonPressed === "FCM") {
            return (
                <GuildMemberData
                    setSelectedMetaInformation={setSelectedMetaInformation}
                    selectedMetaInformation={selectedMetaInformation}
                    FFXIVData={FFXIVData}
                    metaInfoLoading={metaInfoLoading}
                    setMetaInfoLoading={setMetaInfoLoading}
                    setButtonPressed={setButtonPressed}
                />
            );
        } else {
            return (
                <Card className={classes.root}>
                    <CardContent>
                        {" "}
                        Something broke from the inside! Please try again
                        later..{" "}
                    </CardContent>
                    <CardActions></CardActions>
                </Card>
            );
        }
    } else {
        return null;
    }
}
