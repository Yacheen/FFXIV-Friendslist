import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import RikkaPortrait from '../images/rikkazadyoportrait.png';
import MitsuPortrait from '../images/mitsuakiyamaportrait.jpg';
import KyaryPortrait from '../images/kyaryvalentineportrait.jpg';
import LiraPortrait from '../images/lirazadyoportrait.jpg';
import BraxtonPortrait from '../images/braxtonhiggsportrait.jpg';
import EzmiPortrait from '../images/queenezmiportrait.jpg';
import UhraPortrait from '../images/uhramoonportrait.jpg';
import YassinPortrait from '../images/yassinaniviaportrait.jpg';
import { ListItemIcon } from '@material-ui/core';

import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'block',
    backgroundColor: theme.palette.background.paper,
    
  },
}));

export default function FriendsList() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
            <ListItemIcon>
            <Avatar src={RikkaPortrait} alt="Rikka Zadyo" />
            </ListItemIcon>
          <ListItemText primary="Rikka Zadyo" />
        </ListItem>
        <Divider />

        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <Avatar src={MitsuPortrait} alt="Mitsu Akiyama" />
          </ListItemIcon>
          <ListItemText primary="Mitsu Akiyama" />
        </ListItem>
        <Divider />

        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
            <ListItemIcon>
            <Avatar src={KyaryPortrait} alt="Kyary Valentine" />
            </ListItemIcon>
          <ListItemText primary="Kyary Valentine" />
        </ListItem>
        <Divider />

        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
            <ListItemIcon>
            <Avatar src={LiraPortrait} alt="Lira Zadyo" />
            </ListItemIcon>
          <ListItemText primary="Lira Zadyo" />
        </ListItem>
        <Divider />

        <ListItem
          button
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
            <ListItemIcon>
            <Avatar src={BraxtonPortrait} alt="Braxton Higgs" />
            </ListItemIcon>
          <ListItemText primary="Braxton Higgs" />
        </ListItem>
        <Divider />

        <ListItem
          button
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
            <ListItemIcon>
            <Avatar src={EzmiPortrait} alt="Queen Ezmi" />
            </ListItemIcon>
          <ListItemText primary="Queen Ezmi" />
        </ListItem>
        <Divider />

        <ListItem
          button
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}
        >
            <ListItemIcon>
            <Avatar src={UhraPortrait} alt="Uhra Moon" />
            </ListItemIcon>
          <ListItemText primary="Uhra Moon" />
        </ListItem>
        <Divider />

        <ListItem
          button
          selected={selectedIndex === 7}
          onClick={(event) => handleListItemClick(event, 7)}
        >
            <ListItemIcon>
            <Avatar src={YassinPortrait} alt="Yassin Anivia" />
            </ListItemIcon>
          <ListItemText primary="Yassin Anivia" />
        </ListItem>
        <Divider />
      </List>

   
      {/* divider, probably add just a description or some other stuff here.*/}
      
    </div>
  );
}