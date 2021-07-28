import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemText from '@material-ui/core/ListItemText';
// import Avatar from '@material-ui/core/Avatar';
// import ImageIcon from '@material-ui/icons/Image';
// import WorkIcon from '@material-ui/icons/Work';
// import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function GearList(props) {
  const classes = useStyles();

  if(props.FFXIVData) {
      return(
        <List className={classes.root}>
            {
                Object.values(props.FFXIVData.Character.GearSet.Gear).map((gearPiece, i) => {
                    return(
                        <ListItem key={`gearPiece_${i}`}>
                            <ListItemAvatar>
                              <img src={`https://xivapi.com${gearPiece.Item.Icon}`} alt="Gear Piece" />
                                
                               {console.log(gearPiece.Item.Icon)}
                            </ListItemAvatar>
                        </ListItem>
                    )
                })  
            }
        </List>
        
      )
  }
  else {
    return (
    <Paper className="char-gear-container" >
        <Typography variant="h4" >
            No gear lists to show yet..
        </Typography>
    </Paper>
    )
}

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

