import { useEffect, useState } from 'react';
import { interval, of } from 'rxjs';
import { delay,concatMap, take } from 'rxjs/operators';
import Diagram from '../../diagrams/diagram/Diagram';
import Footer from '../../diagrams/footer/Footer';
import { creationMenu } from '../../menu/menu';
import './Interval.css';
const Interval = () => {
    const [data, setData] = useState([]);
    const [replay, setReplay] = useState(false);
    useEffect(() => {
        const observable$ = interval(1000).pipe(take(5));
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
    const { link } = creationMenu.interval;
    return (
        <div className="interval">
            <h4>interval</h4>
            <Diagram values={data}/>
            <br/>
            <div className="code">
                <code>
                    const observable$ = interval(1000).pipe(take(5));
                    <br/>
                    <br/>
                    observable$.subscribe((val) ={'>'} {'{'}
                    <br/>
                        &nbsp;setData(current ={'>'}  [...current, val]){';'}
                    <br/>
                    {'}'})
                </code>
            </div>
            <Footer link={link} onReplay={onReplay}/>
        </div>
    )
}

export default Interval;
