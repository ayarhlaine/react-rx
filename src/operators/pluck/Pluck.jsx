import { useEffect, useState } from 'react';
import { from, of } from 'rxjs';
import { delay,concatMap, pluck } from 'rxjs/operators';
import Diagram from '../../diagrams/diagram/Diagram';
import './Pluck.css';
import { operatorMenu } from '../../menu/menu';
import Footer from '../../diagrams/footer/Footer';
function Pluck() {
  const [data, setData] = useState([]);
  const [modifiedData, setModifiedData] = useState([]);
  const [replay, setReplay] = useState(false);
  useEffect(() => {
    const observable$ = from([
        {a:1},
        {a:2},
        {a:3},
        {a:4},
        {a:5},
    ]);
    const pluckedObservable$ = observable$.pipe(
        pluck('a'),
        concatMap((val) => of(val).pipe(delay(1000)))
    );
    const delayObservable$ = observable$.pipe(
        concatMap((val) => of(JSON.stringify(val)).pipe(delay(1000)))
    );
    const subscription = delayObservable$.subscribe((val) => {
        setData(current =>  [...current, val]);
    });
    const secondSubscription = pluckedObservable$.subscribe((val) => {
        setModifiedData(current =>  [...current, val]);
    });
    return () => {
       subscription.unsubscribe();
       secondSubscription.unsubscribe();
    }
  },[replay]);
  const onReplay = () => {
    setData([]);
    setModifiedData([]);
    setReplay(!replay);
  }
  const { link } = operatorMenu.pluck;
  return (
    <div className="Pluck">
        <h4>pluck</h4>
        <Diagram values={data}/>
        <div className="map__code">
            <code>
            pluck('a')
            </code>
        </div>
        <Diagram values={modifiedData}/>
        <br/>
        <div className="code">
            <code>
                const observable$ = from([{'{'}a: 1{'}'}, {'{'}a: 2{'}'}, {'{'}a: 3{'}'}, {'{'}a: 4{'}'}, {'{'}a: 5{'}'}]).pipe(
                    <br/>
                    &nbsp;pluck('a')
                    <br/>
                );
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
  );
}

export default Pluck;
