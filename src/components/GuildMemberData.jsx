import React from "react";
import {
    Paper,
    makeStyles,
    Card,
    CardContent,
    Typography,
    Link,
    List,
    ListItem,
    ListItemText,
    Avatar,
    ListItemAvatar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        width: 450,
        backgroundColor: theme.palette.background.paper,
    },
    scroller: {
        overflowY: "scroll",
        overflowX: "hidden",
        maxHeight: "50vh",
    },
    friendsListPrimaryStyling: {
        fontSize: 18,
    },
    friendsListSecondaryStyling: {
        fontSize: 14,
    },
}));

export default function GuildMemberData({
    setSelectedMetaInformation,
    selectedMetaInformation,
    FFXIVData,
    metaInfoLoading,
    setMetaInfoLoading,
    setButtonPressed,
}) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <Typography
                variant="h3"
                className="person-data-header"
                color="primary"
                align="center"
            >
                Guild Members
            </Typography>
            <CardContent className={classes.scroller}>
                <Paper elevation={0}>
                    <List className={classes.root}>
                        {selectedMetaInformation.FreeCompanyMembers.map(
                            (member) => {
                                return (
                                    <Link
                                        href={`https://na.finalfantasyxiv.com/lodestone/character/${member.ID}`}
                                        target="_blank"
                                        underline="none"
                                    >
                                        <ListItem button>
                                            <ListItemAvatar>
                                                <Avatar
                                                    src={member.Avatar}
                                                    alt={member.Name}
                                                    variant="square"
                                                />
                                            </ListItemAvatar>
                                            <ListItemText
                                                classes={{
                                                    primary:
                                                        classes.friendsListPrimaryStyling,
                                                    secondary:
                                                        classes.friendsListSecondaryStyling,
                                                }}
                                                primary={member.Name}
                                                secondary={`Rank: ${member.Rank}`}
                                            />
                                        </ListItem>
                                    </Link>
                                );
                            }
                        )}
                    </List>
                </Paper>
            </CardContent>
        </Card>
    );
}
