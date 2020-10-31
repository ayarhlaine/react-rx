import ReplyIcon from '@material-ui/icons/Reply';
import Button from '@material-ui/core/Button';
import './Footer.css';
const Footer = ({ link, onReplay }) => {
    return (
        <div className="footer">
            <a href={link} className="href">View Code</a>
            <Button variant="contained" color="primary" onClick={onReplay}>
            <ReplyIcon />
            Replay 
            </Button>
        </div>
    )
}

export default Footer
