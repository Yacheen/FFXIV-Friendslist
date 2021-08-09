import React from "react";
import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Card,
    CardContent,
    CardActions,
    makeStyles,
    Typography,
    Avatar,
    Link,
    Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        width: 450,
        backgroundColor: theme.palette.background.paper,
    },
    scroller: {
        maxHeight: "50vh",
        overflowY: "auto",
        overflowX: "hidden",
    },
    friendsListPrimaryStyling: {
        color: theme.palette.primary.light,
        fontSize: 18,
    },
    friendsListSecondaryStyling: {
        fontSize: 14,
    },
    //media queries
    [theme.breakpoints.down(theme.breakpoints.values.laptop)]: {
        root: {
            width: 350,
            height: 417,
        },
    },
    [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
        root: {
            height: 375,
        },
    },
}));

export default function FriendsListData({
    selectedMetaInformation,
    metaInfoLoading,
}) {
    const classes = useStyles();

    if (selectedMetaInformation.Friends.length > 0) {
        return (
            <Card className={`${classes.root}`}>
                <Typography
                    variant="h3"
                    className="person-data-header"
                    color="primary"
                    align="center"
                >
                    Friends
                </Typography>
                <CardContent className={classes.scroller}>
                    <Paper elevation={0}>
                        <List className={`${classes.root}`}>
                            {selectedMetaInformation.Friends.map((Friend) => {
                                return (
                                    <Link
                                        href={`https://na.finalfantasyxiv.com/lodestone/character/${Friend.ID}`}
                                        target="_blank"
                                        underline="none"
                                    >
                                        <ListItem button>
                                            <ListItemAvatar>
                                                <Avatar
                                                    src={Friend.Avatar}
                                                    alt={Friend.Name}
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
                                                primary={Friend.Name}
                                                secondary={Friend.Server}
                                            />
                                        </ListItem>
                                    </Link>
                                );
                            })}
                        </List>
                    </Paper>
                </CardContent>
                <CardActions></CardActions>
            </Card>
        );
    } else if (!selectedMetaInformation) {
        return (
            <Card className={classes.root}>
                <CardContent>
                    <Typography
                        variant="h4"
                        className="person-data-header"
                        align="center"
                    >
                        {selectedMetaInformation.Character.Name} Something just
                        totally broke from the inside. Try clicking on friends
                        again, or try another button.
                    </Typography>
                </CardContent>
                <CardActions></CardActions>
            </Card>
        );
    } else {
        return (
            <Card className={classes.root}>
                <CardContent>
                    <Typography
                        variant="h4"
                        className="person-data-header"
                        align="center"
                    >
                        {selectedMetaInformation.Character.Name} appears to have
                        their friends list set on private :c
                    </Typography>
                </CardContent>
                <CardActions></CardActions>
            </Card>
        );
    }
}
