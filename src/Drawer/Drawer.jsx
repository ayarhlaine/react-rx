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
            <div className="drawer__logo" onClick={() => onMenuSelect('welcome')}>
                <img src="https://gblobscdn.gitbook.com/spaces%2F-LwY_OXUQHvmdEoy0xNa%2Favatar.png?alt=media" alt="RX JS Logo"/>
                <h3>{process.env.REACT_APP_WEBSITE_NAME}</h3>
            </div>
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
