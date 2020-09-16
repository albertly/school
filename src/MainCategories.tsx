import React from 'react';
import { makeStyles, createMuiTheme, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStylesMui = makeStyles({

    selected: {
        backgroundColor: "#1b925a !important"
    },
}, { name: 'Mui' });

const useStylesListItemText = makeStyles({

    root: {

        textAlign: 'right'
    },
}, { name: 'MuiListItemText' });

const useStyles = makeStyles((theme: Theme) => {

    return ({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },

    })
});

//o[Object.keys(o)[0]].name
export default function SelectedListItem() {
    const classes = useStyles();
    useStylesMui();
    useStylesListItemText();

    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        setSelectedIndex(index);
    };

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem
                    button
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemText primary="אני כחבר" />
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemText primary="אני כחבר- יחס של כבוד" />
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemText primary="אני כתלמיד- התנהגות לומד" />
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                    <ListItemText primary="אני כתלמיד- התנהגות לומד" />
                    <div>d</div>
                </ListItem>
            </List>
        </div>
    );
}
