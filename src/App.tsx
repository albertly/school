import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles, Theme, createMuiTheme } from '@material-ui/core/styles';


import Main from './Main';
import data from './all1.json'
import { buildCombo, ICombo } from './MarksData';
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
  const [topic, setTopic] = useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    console.log('app topic', event.target.value);
    setTopic(event.target.value as string);
  };

  return (

    <div>
      <CssBaseline />
      <AppBar data-test={'AppBar-component'} className={classes.root} position="sticky" elevation={0}>
        <NativeSelect style={{width:'30%'}} onChange={handleChange} value={topic}>
          {buildCombo(data.d.b.d).map((item: ICombo) => {
            return <option value={item.code}>{item.value}</option>;
          })
          }
        </NativeSelect>
        <div>{topic}</div>
      </AppBar>
      <Main data-test={'Main-component'} topic={topic} />
    </div>

  );
}

export default App;
