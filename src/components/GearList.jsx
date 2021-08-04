import { Container } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";
// import Avatar from '@material-ui/core/Avatar';
// import ImageIcon from '@material-ui/icons/Image';
// import WorkIcon from '@material-ui/icons/Work';
// import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { whileStatement } from "@babel/types";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        maxWidth: 250,
        backgroundColor: theme.palette.background.paper,
    },
    image: {
        maxWidth: "50%",
    },
    primaryStyling: {
        color: theme.palette.secondary.light,
        fontSize: 14,
        display: "inline-block",
    },
    secondaryStyling: {
        color: "white",
        fontSize: 10,
    },
}));

export default function GearList({ FFXIVData }) {
    const classes = useStyles();

    if (FFXIVData) {
        return (
            <List className={`${classes.root} gear-list`}>
                {Object.values(FFXIVData.Character.GearSet.Gear).map(
                    (gearPiece, index) => {
                        return (
                            <Link
                                href={`https://ffxiv.gamerescape.com/wiki/${gearPiece.Item.Name}`}
                                alt={gearPiece.Item.Name}
                                target="_blank"
                                underline="none"
                            >
                                <ListItem
                                    key={index}
                                    disableGutters={true}
                                    dense={true}
                                    divider={true}
                                    button
                                >
                                    <ListItemAvatar>
                                        <img
                                            className={classes.image}
                                            src={`https://xivapi.com${gearPiece.Item.Icon}`}
                                            alt="Gear Piece"
                                        />
                                    </ListItemAvatar>

                                    <ListItemText
                                        className="gearlist-item-text"
                                        primary={gearPiece.Item.Name}
                                        secondary={`Item Level ${gearPiece.Item.LevelItem}`}
                                        classes={{
                                            primary: classes.primaryStyling,
                                            secondary: classes.secondaryStyling,
                                        }}
                                    />
                                </ListItem>
                            </Link>
                        );
                    }
                )}
            </List>
        );
    }

    return (
        <Paper className="char-gear-container">
            <Typography variant="h4">No gear lists to show yet..</Typography>
        </Paper>
    );

    // return (
    //   <List className={classes.root}>
    //     <ListItem>
    //       <ListItemAvatar>
    //         <Avatar>
    //           <ImageIcon />
    //         </Avatar>
    //       </ListItemAvatar>
    //       <ListItemText primary="Photos" secondary="Jan 9, 2014" />
    //     </ListItem>
    //     <ListItem>
    //       <ListItemAvatar>
    //         <Avatar>
    //           <WorkIcon />
    //         </Avatar>
    //       </ListItemAvatar>
    //       <ListItemText primary="Work" secondary="Jan 7, 2014" />
    //     </ListItem>
    //     <ListItem>
    //       <ListItemAvatar>
    //         <Avatar>
    //           <BeachAccessIcon />
    //         </Avatar>
    //       </ListItemAvatar>
    //       <ListItemText primary="Vacation" secondary="July 20, 2014" />
    //     </ListItem>
    //   </List>
    // );
}
