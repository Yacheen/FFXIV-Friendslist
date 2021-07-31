import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PetsIcon from "@material-ui/icons/Pets";
import FlightIcon from "@material-ui/icons/Flight";

const useStyles = makeStyles({
    root: {
        minWidth: 450,
        display: "block",
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
});

export default function PersonMetaInformation({ FFXIVData }) {
    const classes = useStyles();
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    if (FFXIVData) {
        return (
            <Card className={classes.root}>
                <CardContent className="meta-info-top">
                    <Typography noWrap={true} variant="h3" color="primary">
                        {FFXIVData.Character.Name}
                    </Typography>
                    <Typography className="job-info" noWrap={true} variant="h4">
                        Class:{" "}
                        {capitalizeFirstLetter(
                            FFXIVData.Character.ActiveClassJob.Job.Name
                        )}
                        <img
                            src={`https://xivapi.com${FFXIVData.Character.ActiveClassJob.Job.Icon}`}
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
                        size="medium"
                        variant="contained"
                        color="secondary"
                        endIcon={<FlightIcon />}
                    >
                        Mounts
                    </Button>
                    <Button
                        size="medium"
                        variant="contained"
                        color="secondary"
                        endIcon={<PetsIcon />}
                    >
                        Pets
                    </Button>
                    <Button
                        size="medium"
                        variant="contained"
                        color="secondary"
                        endIcon={<PeopleAltIcon />}
                    >
                        Guild
                    </Button>
                    <Button
                        size="medium"
                        variant="contained"
                        color="secondary"
                        endIcon={<FavoriteIcon />}
                    >
                        Friends List
                    </Button>
                </CardActions>
            </Card>
        );
    } else {
        return (
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h3">
                        No info to display yet..
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}
