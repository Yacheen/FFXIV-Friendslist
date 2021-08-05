import { ListItemIcon } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        display: "block",
        backgroundColor: theme.palette.background.paper,
    },
    listItemTextStyling: {
        fontSize: 14,
    },
}));

export default function FriendsList({
    setSelectedIndex,
    setSelectedButton,
    selectedIndex,
    raidGroupIdentities,
}) {
    const classes = useStyles();
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        console.log(index);
        setSelectedButton(false);
    };

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem
                    button
                    selected={selectedIndex === raidGroupIdentities.rikkasId}
                    onClick={(event) =>
                        handleListItemClick(event, raidGroupIdentities.rikkasId)
                    }
                >
                    <ListItemIcon>
                        <Avatar
                            src="/Images/Portraits/rikkazadyo.png"
                            alt="Rikka Zadyo"
                        />
                    </ListItemIcon>
                    <ListItemText
                        primary="Rikka Zadyo"
                        classes={{ primary: classes.listItemTextStyling }}
                    />
                </ListItem>
                <Divider />

                <ListItem
                    button
                    selected={selectedIndex === raidGroupIdentities.mitsusId}
                    onClick={(event) =>
                        handleListItemClick(event, raidGroupIdentities.mitsusId)
                    }
                >
                    <ListItemIcon>
                        <Avatar
                            src="/Images/Portraits/mitsuakiyama.jpg"
                            alt="Mitsu Akiyama"
                        />
                    </ListItemIcon>
                    <ListItemText
                        primary="Mitsu Akiyama"
                        classes={{ primary: classes.listItemTextStyling }}
                    />
                </ListItem>
                <Divider />

                <ListItem
                    button
                    selected={selectedIndex === raidGroupIdentities.kyarysId}
                    onClick={(event) =>
                        handleListItemClick(event, raidGroupIdentities.kyarysId)
                    }
                >
                    <ListItemIcon>
                        <Avatar
                            src="/Images/Portraits/kyaryvalentine.jpg"
                            alt="Kyary Valentine"
                        />
                    </ListItemIcon>
                    <ListItemText
                        primary="Kyary Valentine"
                        classes={{ primary: classes.listItemTextStyling }}
                    />
                </ListItem>
                <Divider />

                <ListItem
                    button
                    selected={selectedIndex === raidGroupIdentities.lirasId}
                    onClick={(event) =>
                        handleListItemClick(event, raidGroupIdentities.lirasId)
                    }
                >
                    <ListItemIcon>
                        <Avatar
                            src="/Images/Portraits/lirazadyo.jpg"
                            alt="Lira Zadyo"
                        />
                    </ListItemIcon>
                    <ListItemText
                        primary="Lira Zadyo"
                        classes={{ primary: classes.listItemTextStyling }}
                    />
                </ListItem>
                <Divider />

                <ListItem
                    button
                    selected={selectedIndex === raidGroupIdentities.braxtonsId}
                    onClick={(event) =>
                        handleListItemClick(
                            event,
                            raidGroupIdentities.braxtonsId
                        )
                    }
                >
                    <ListItemIcon>
                        <Avatar
                            src="/Images/Portraits/braxtonhiggs.jpg"
                            alt="Braxton Higgs"
                        />
                    </ListItemIcon>
                    <ListItemText
                        primary="Braxton Higgs"
                        classes={{ primary: classes.listItemTextStyling }}
                    />
                </ListItem>
                <Divider />

                <ListItem
                    button
                    selected={selectedIndex === raidGroupIdentities.ezmisId}
                    onClick={(event) =>
                        handleListItemClick(event, raidGroupIdentities.ezmisId)
                    }
                >
                    <ListItemIcon>
                        <Avatar
                            src="/Images/Portraits/queenezmi.jpg"
                            alt="Queen Ezmi"
                        />
                    </ListItemIcon>
                    <ListItemText
                        primary="Queen Ezmi"
                        classes={{ primary: classes.listItemTextStyling }}
                    />
                </ListItem>
                <Divider />

                <ListItem
                    button
                    selected={selectedIndex === raidGroupIdentities.uhrasId}
                    onClick={(event) =>
                        handleListItemClick(event, raidGroupIdentities.uhrasId)
                    }
                >
                    <ListItemIcon>
                        <Avatar
                            src="/Images/Portraits/uhramoon.jpg"
                            alt="Uhra Moon"
                        />
                    </ListItemIcon>
                    <ListItemText
                        primary="Uhra Moon"
                        classes={{ primary: classes.listItemTextStyling }}
                    />
                </ListItem>
                <Divider />

                <ListItem
                    button
                    selected={selectedIndex === raidGroupIdentities.yassinsId}
                    onClick={(event) =>
                        handleListItemClick(
                            event,
                            raidGroupIdentities.yassinsId
                        )
                    }
                >
                    <ListItemIcon>
                        <Avatar
                            src="/Images/Portraits/yassinanivia.jpg"
                            alt="Yassin Anivia"
                        />
                    </ListItemIcon>
                    <ListItemText
                        primary="Yassin Anivia"
                        classes={{ primary: classes.listItemTextStyling }}
                    />
                </ListItem>
                <Divider />
            </List>
            {/* divider, probably add just a description or some other stuff here. */}
        </div>
    );
}
