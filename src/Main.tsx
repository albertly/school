import React from 'react';
import { makeStyles, Theme, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Title from './Title';
import MainCategories from './MainCategories';

const useStyles = makeStyles((theme: Theme) => {

    theme = createMuiTheme({
        direction: "rtl",
    });

    return ({
        root: {
            display: 'flex',
        },

        container: {
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 2fr)',
            gridGap: theme.spacing(0),
            marginRight: theme.spacing(0)
        },
        paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            whiteSpace: 'nowrap',
            marginBottom: theme.spacing(0),
            marginRight: theme.spacing(0)
        },

    })
});

function Main() {
    const classes = useStyles();

    return (

        <Grid container spacing={0}>
        <Grid item  xs={12}>
          <Paper className={classes.paper}><Title/></Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}><MainCategories /></Paper>
        </Grid>
      </Grid>

    );
}

export default Main;