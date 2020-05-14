import React from 'react';
import { makeStyles, createMuiTheme, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme: Theme) => {

    theme = createMuiTheme({
        overrides: {
            
            MuiListItem: {
                
                selected: {
                    backgroundColor: '#2E7D32' 
                }
            }
        },
        direction: "rtl",
    });

    return ({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
            textAlign: 'right'
            
        },
        selected: {
            backgroundColor: '#2E7D32'
        }
    })
});
// const ff =  {
//         Button:selected { /* Increase the specificity */
//             backgroundColor: '#2E7D32'
//         }
//     }
export default function SelectedListItem() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        setSelectedIndex(index);
    };

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem
                    className={`${classes.root} ${classes.selected}`}
                    button
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemText primary="אני כחבר" />
                </ListItem>
                <ListItem
                   classes={{                   
                    selected: classes.selected, // class name, e.g. `classes-nesting-label-x`
                  }}
                    button
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemText primary="אני כחבר- יחס של כבוד" />
                </ListItem>
            </List>
            <List component="nav" aria-label="secondary mailbox folder">
                <ListItem
                    className={classes.root}
                    button
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemText primary="אני כתלמיד- התנהגות לומד" />
                </ListItem>
                <ListItem
                    className={classes.root}
                    button
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                    <ListItemText primary="אני כתלמיד- התנהגות לומד" />
                </ListItem>
            </List>
        </div>
    );
}
