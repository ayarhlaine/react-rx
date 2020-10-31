import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import './TopBar.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));
const TopBar = ({ onMenuClick }) => {
    const classes = useStyles();
    return (
        <AppBar position="static" className='TopBar'>
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={onMenuClick}>
                  <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                  React RX
              </Typography>
              <a href="https://github.com/ayarhlaine/react-rx"
              rel="noreferrer"
              target='_blank' className="github__link">
                <GitHubIcon />
              </a>
            </Toolbar>
      </AppBar>
    )
}

export default TopBar;
