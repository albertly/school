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
      background: '#2E7D32'
    },

  })
});

function App() {
  const classes = useStyles();

  return (

      <div>
        <CssBaseline />
        <AppBar className={classes.root}  position="sticky" elevation={0}>
          <h1></h1>
        </AppBar>
        <Main/>
      </div>

  );
}

export default App;
