import React from 'react';
import { makeStyles, Theme, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import MainTable from './MainTable1';
import Title from './Title';
import MainCategories from './MainCategories';

const useStyles = makeStyles((theme: Theme) => {
    return ({
        root: {
            display: 'flex',
        },

        container: {
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 2fr)',
            gridGap: theme.spacing(0),
            margin: theme.spacing(0),
        },
        paper: {
            padding: theme.spacing(0),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            whiteSpace: 'nowrap',
            margin: theme.spacing(0),
        },

    })
});

function Main() {
    const classes = useStyles();

    return (

        <Grid container spacing={0}>
            <Grid item xs={12}>
                <Paper className={classes.paper} elevation={0} square><Title /></Paper>
            </Grid>
            <Grid item xs={2}>
                <Paper className={classes.paper} elevation={0} square><MainCategories /></Paper>
            </Grid>
            <Grid item xs={10}>
                <Paper className={classes.paper} elevation={0} square><MainTable/></Paper>
            </Grid>

        </Grid>

    );
}

export default Main;