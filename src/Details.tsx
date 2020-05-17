import React from 'react';
import { makeStyles, Theme, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
        },
        colorPrimary: {
            color: '#2E7D32',
            fontWeight: 'bold',
            fontSize: '28px',
            marginTop: theme.spacing(2)
        },
        colorBody1: {
            color: '#2E7D32',
            fontWeight: 'bold',
            fontSize: '18px'
        },
        colorBody2: {
            color: 'black',
            fontWeight: 'normal',
            fontSize: '18px'
        }


    })
});

function Details() {
    const classes = useStyles();

    return (

        <Grid container spacing={0}>
            <Grid container spacing={0}>
            <Grid item xs={12}>
                <Paper className={`${classes.paper} ${classes.colorPrimary}`} style={{ textAlign: 'center' }} elevation={0} square>
                    <Typography variant="h4" component="h5"  style={{ color: '#2E7D32', fontWeight: 'bold', fontSize: '30px' }} >
                        רבעון שלישי
                    </Typography>
                </Paper>
            </Grid>
            </Grid>
            <Grid container spacing={0} style={{display: "flex", justifyContent: "center"}}>
            <Grid item xs={4} style={{flexBasis: "5%"}}>
                <Paper className={classes.paper} elevation={0} square >
                    <Typography className={classes.colorBody1} variant="body1" component="span" >
                    שם התלמיד/ה: 
                    </Typography>
                    <Typography className={classes.colorBody2} variant="body2" component="span">
                    &nbsp; לירן ליוברסקי{'  |'} &nbsp;
                 </Typography>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{flexBasis: "5%"}}>
                <Paper className={classes.paper} elevation={0} square>
                    <Typography className={classes.colorBody1} variant="body1" component="span" >
                   כיתה: 
                    </Typography>
                    <Typography className={classes.colorBody2} variant="body2" component="span">
                    &nbsp; ב'1{'  |'} &nbsp;
                 </Typography>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{flexBasis: "5%"}}>
                <Paper className={classes.paper} elevation={0} square>
                    <Typography className={classes.colorBody1} variant="body1" component="span" >
                     מחנך/ת: 
                    </Typography>
                    <Typography className={classes.colorBody2} variant="body2" component="span">
                    {' '}ספיר קורן
                     </Typography>
                </Paper>
            </Grid>
            </Grid>
        </Grid>

    );
}

export default Details;