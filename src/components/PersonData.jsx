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

export default function PersonData({
    setSelectedMetaInformation,
    selectedMetaInformation,
    FFXIVData,
    buttonPressed,
    metaInfoLoading,
    setMetaInfoLoading,
}) {
    const classes = useStyles();
    while (metaInfoLoading) {
        return (
            <Card className={classes.root}>
                <CardContent className={`person-data-loading`}>
                    <Typography variant="h4" color="secondary">
                        Loading...
                    </Typography>
                </CardContent>
                <CardActions></CardActions>
            </Card>
        );
    }
    if (selectedMetaInformation) {
        if (buttonPressed === "FC") {
            return (
                <GuildData
                    setSelectedMetaInformation={setSelectedMetaInformation}
                    selectedMetaInformation={selectedMetaInformation}
                    metaInfoLoading={metaInfoLoading}
                    setMetaInfoLoading={setMetaInfoLoading}
                    FFXIVData={FFXIVData}
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
        return (
            <Card className={classes.root}>
                <CardContent>
                    {" "}
                    Hint: Choose something above to display stuff here!{" "}
                </CardContent>
                <CardActions></CardActions>
            </Card>
        );
    }
}
