import { useEffect, useState } from 'react';
import { from, of} from 'rxjs';
import { delay,concatMap } from 'rxjs/operators';
import Diagram from '../../diagrams/diagram/Diagram';
import ReplyIcon from '@material-ui/icons/Reply';
import Button from '@material-ui/core/Button';
import './From.css';
function From() {
  const [data, setData] = useState([]);
  const [replay, setReplay] = useState(false);
  useEffect(() => {
    const observable$ = from([1, 2, 3, 4, 5]);
    const delayObservable$ = observable$.pipe(
        concatMap((val) => of(val).pipe(delay(1000)))
    );
    const subscription = delayObservable$.subscribe((val) => {
        setData(current =>  [...current, val]);
    });
    return () => {
       subscription.unsubscribe();
    }
  },[replay]);
  const onReplay = () => {
    setData([]);
    setReplay(!replay);
  }
  return (
    <div className="From">
        <h4>from</h4>
        <Diagram values={data}/>
        <br/>
        <div className="code">
            <code>
                const observable$ = from([1, 2, 3, 4, 5]);
                <br/>
                <br/>
                observable$.subscribe((val) ={'>'} {'{'}
                <br/>
                    &nbsp;setData(current ={'>'}  [...current, val]){';'}
                <br/>
                {'}'})
            </code>
        </div>
        <div className="footer">
          <a href="https://github.com/ayarhlaine" className="href">View Code</a>
          <Button variant="contained" color="primary" onClick={onReplay}>
            <ReplyIcon />
            Replay 
          </Button>
        </div>
    </div>
  );
}

export default From;
