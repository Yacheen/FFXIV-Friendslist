import React from "react";
import {
    Card,
    CardContent,
    Typography,
    makeStyles,
    CardActions,
    Button,
    Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        display: "block",
        maxHeight: "50vh",
        overflow: "auto",
    },
    guildInfo: {
        display: "flex",
        justifyContent: "space-between",
    },
    guildMetaInformation: {
        display: "block",
    },
    buttonStyling: {
        backgroundColor: theme.palette.primary.dark,
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
            <Typography
                variant="h3"
                className="person-data-header"
                color="primary"
                align="center"
            >
                Guild
            </Typography>
            <CardContent>
                <div className={classes.guildInfo}>
                    <div className={classes.guildMetaInformation}>
                        {selectedMetaInformation.FreeCompany.Name}
                    </div>
                    <Button
                        size="medium"
                        variant="contained"
                        color={classes.buttonStyling}
                        disabled={metaInfoLoading}
                        onClick={() => getGuildMembers(FFXIVData.Character.ID)}
                    >
                        View members
                    </Button>
                </div>

                <Paper elevation={3}></Paper>
            </CardContent>
            <CardActions></CardActions>
        </Card>
    );
}
