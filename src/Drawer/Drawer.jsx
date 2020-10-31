import DrawerMenu from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { creationMenu } from '../menu/menu';
import './Drawer.css';
const Drawer = ({ toggle, toggleDrawer, onMenuSelect }) => {
    return (
        <DrawerMenu anchor={'left'} open={toggle} onClose={() => toggleDrawer(false)}>
            <List 
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Creation
                </ListSubheader>
              }
            className='List'>
                {
                    Object.entries(creationMenu).map(([key, { name }]) => (
                        <ListItem button key={key} onClick={() => onMenuSelect(name)}>
                            <ListItemText primary={name} />
                        </ListItem>
                    ))
                }
            </List>
            <Divider />
        </DrawerMenu>
    )
}

export default Drawer
