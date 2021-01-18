import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MediaControlCard from './Card';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height:'100vh'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#cfe8fc',
  },
  grid: {
    width: '100vw',
    height: '100vh',
    spacing: 0,
    justify: 'space-around'
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container >

        <Grid item xs={5}>
          <Paper className={classes.paper}>
          <MediaControlCard/>
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
