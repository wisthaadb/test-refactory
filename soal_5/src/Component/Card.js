import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { borders } from '@material-ui/system';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: "10 12",
    borderRadius:"10%",
    backgroundColor:"#0442D0",
    
    
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    backgroundColor:"#0442D0",
    color:"#FABE2C"
    
    
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },

}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root} >
      <div className={classes.details}>
        <CardContent className={classes.content} >
          <Typography  component="h5" variant="h5">
          <DescriptionIcon style={{width:"7em", height:"13em"}}/>
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          
        </div>
      </div>
      <CardContent className={classes.content} >
          <div>
          <Typography component="h2" variant="h2">
          Hello Sam! <br/> 
          </Typography>
          </div>
          <div>
          <Typography component="h4" variant="h4">
          You have 2 tasks left for today, Already completed Task today?
          </Typography>
          </div>
        </CardContent>
    </Card>
  );
}
