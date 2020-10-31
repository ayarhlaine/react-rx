import DrawerMenu from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { creationMenu } from '../menu/menu';
import './Drawer.css';
const Drawer = ({ toggle, toggleDrawer, onMenuSelect }) => {
    return (
        <div className="drawer">
            <DrawerMenu className='drawer__menu' anchor={'left'} open={toggle} onClose={() => toggleDrawer(false)}>
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
                <div className="drawer__footer">
                    <h3>
                        <FavoriteIcon/> by &nbsp;
                        <a
                        href="https://github.com/ayarhlaine"
                        rel="noreferrer"
                        target='_blank'>Ayar Hlaine</a>
                    </h3>
                </div>
            </DrawerMenu>
        </div>
    )
}

export default Drawer
