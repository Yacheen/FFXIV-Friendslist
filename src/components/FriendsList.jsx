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

export default function FriendsList(props) {
  const classes = useStyles();
  const handleListItemClick = (event, index) => {
    props.setSelectedIndex(index);
    console.log(index);
    

  };
  
  
  return (
    
      
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        
        <ListItem
          button
          selected={props.selectedIndex === props.raidGroupIdentities.rikkasId}
          onClick={(event) => handleListItemClick(event, props.raidGroupIdentities.rikkasId)}
        >
          <ListItemIcon>
            <Avatar src={RikkaPortrait} alt="Rikka Zadyo" />
          </ListItemIcon>
          <ListItemText primary="Rikka Zadyo" />
        </ListItem>
        <Divider />

        <ListItem
          button
          selected={props.selectedIndex === props.raidGroupIdentities.mitsusId}
          onClick={(event) => handleListItemClick(event, props.raidGroupIdentities.mitsusId)}
        >
          <ListItemIcon>
            <Avatar src={MitsuPortrait} alt="Mitsu Akiyama" />
          </ListItemIcon>
          <ListItemText primary="Mitsu Akiyama" />
        </ListItem>
        <Divider />

        <ListItem
          button
          selected={props.selectedIndex === props.raidGroupIdentities.kyarysId}
          onClick={(event) => handleListItemClick(event, props.raidGroupIdentities.kyarysId)}
        >
            <ListItemIcon>
            <Avatar src={KyaryPortrait} alt="Kyary Valentine" />
            </ListItemIcon>
          <ListItemText primary="Kyary Valentine" />
        </ListItem>
        <Divider />

        <ListItem
          button
          selected={props.selectedIndex === props.raidGroupIdentities.lirassId}
          onClick={(event) => handleListItemClick(event, props.raidGroupIdentities.lirasId)}
        >
            <ListItemIcon>
            <Avatar src={LiraPortrait} alt="Lira Zadyo" />
            </ListItemIcon>
          <ListItemText primary="Lira Zadyo" />
        </ListItem>
        <Divider />

        <ListItem
          button
          selected={props.selectedIndex === props.raidGroupIdentities.braxtonsId}
          onClick={(event) => handleListItemClick(event, props.raidGroupIdentities.braxtonsId)}
        >
            <ListItemIcon>
            <Avatar src={BraxtonPortrait} alt="Braxton Higgs" />
            </ListItemIcon>
          <ListItemText primary="Braxton Higgs" />
        </ListItem>
        <Divider />

        <ListItem
          button
          selected={props.selectedIndex === props.raidGroupIdentities.ezmisId}
          onClick={(event) => handleListItemClick(event, props.raidGroupIdentities.ezmisId)}
        >
            <ListItemIcon>
            <Avatar src={EzmiPortrait} alt="Queen Ezmi" />
            </ListItemIcon>
          <ListItemText primary="Queen Ezmi" />
        </ListItem>
        <Divider />

        <ListItem
          button
          selected={props.selectedIndex === props.raidGroupIdentities.uhrassId}
          onClick={(event) => handleListItemClick(event, props.raidGroupIdentities.uhrasId)}
        >
            <ListItemIcon>
            <Avatar src={UhraPortrait} alt="Uhra Moon" />
            </ListItemIcon>
          <ListItemText primary="Uhra Moon" />
        </ListItem>
        <Divider />

        <ListItem
          button
          selected={props.selectedIndex === props.raidGroupIdentities.yassinsId}
          onClick={(event) => handleListItemClick(event, props.raidGroupIdentities.yassinsId)}
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