import React from 'react';
import { makeStyles, Theme, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PrintIcon from '@material-ui/icons/Print';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import Details from './Details';

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
            marginBottom: theme.spacing(0),
            marginRight: theme.spacing(0),
            margin: theme.spacing(0),
            backgroundColor: '#e5ecda',
            height: "100px",
        },
        margin: {
            margin: theme.spacing(2),
            alignItems: 'center',
            borderRadius: '0%'
        },
        colorBody1: {
            color: '#2E7D32',
            fontWeight: 'bold',
            fontSize: '18px'
        },
        colorBody2: {
            color: '#2E7D32',
            fontWeight: 'normal',
            fontSize: '16px'
        }

    })
});

function Title() {
    const classes = useStyles();

    return (

        <Grid container spacing={0}>
            <Grid item xs={3}>
                <Paper className={classes.paper} style={{ textAlign: 'right' }} elevation={0} square><img style={{ height: '90px', textAlign: 'right', margin: '10px' }} src="logo-hh.png" /></Paper>
            </Grid>

            <Grid item xs={6}>
                <Paper className={classes.paper} elevation={0} square><Details /></Paper>
            </Grid>

            <Grid item xs={2} >
                <Paper className={classes.paper} elevation={0} square style={{ display: "flex", flexDirection: "column", alignContent: "center", justifyContent: "center" }}>
                    <Typography className={classes.colorBody1} variant="body1" component="div" >
                        מתווה להתקדמות בחיים חפר
                    </Typography>
                    <Typography className={classes.colorBody2} variant="body2" component="div" >
                        בית ספר לחיים, שיח ותקשורת
                    </Typography>
                </Paper>
            </Grid>



            <Grid item xs={1}>
                <Paper className={classes.paper} style={{ display: "flex", flexDirection: "row-reverse" }} elevation={0} square>
                    <IconButton aria-label="print" className={classes.margin} >
                        <PrintIcon fontSize="large" />
                    </IconButton>
                </Paper>
            </Grid>
        </Grid>

    );
}

export default Title;