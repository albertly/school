import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, Theme, createMuiTheme } from '@material-ui/core/styles';


import Main from './Main';
import './App.css';


const useStyles = makeStyles((theme: Theme) => {

  theme = createMuiTheme({
    direction: "rtl",
  });

  return ({
    root: {
      display: 'flex',
      background: '#2E7D32',
      margin: theme.spacing(0),
      height: '56px',
    },

  })
});

function App() {
  const classes = useStyles();

  return (

      <div>
        <CssBaseline />
        <AppBar data-test={'AppBar-component'} className={classes.root}  position="sticky" elevation={0}>
        </AppBar>
        <Main data-test={'Main-component'}/>
      </div>

  );
}

export default App;
