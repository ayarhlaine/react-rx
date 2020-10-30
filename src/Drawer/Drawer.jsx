import React from 'react';
import DrawerMenu from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import './Drawer.css';
const Drawer = ({ toggle, toggleDrawer }) => {
    return (
        <DrawerMenu anchor={'left'} open={toggle} onClose={() => toggleDrawer(false)}>
            <List 
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Creation
                </ListSubheader>
              }
            className='List'>
                {['from'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
            <Divider />
        </DrawerMenu>
    )
}

export default Drawer
