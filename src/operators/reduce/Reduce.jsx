import { useEffect, useState } from 'react';
import { from, of } from 'rxjs';
import { delay,concatMap, reduce } from 'rxjs/operators';
import Diagram from '../../diagrams/diagram/Diagram';
import './Reduce.css';
import { operatorMenu } from '../../menu/menu';
import Footer from '../../diagrams/footer/Footer';
function Reduce() {
  const [data, setData] = useState([]);
  const [modifiedData, setModifiedData] = useState([]);
  const [replay, setReplay] = useState(false);
  const seed = 0;
  useEffect(() => {
    const observable$ = from([1, 2, 3, 4, 5]);
    const scannedObservable$ = observable$.pipe(
        reduce((accumulator, current) => accumulator + current, seed),
        concatMap((val) => of(val).pipe(delay(1000)))
    );
    const delayObservable$ = observable$.pipe(
        concatMap((val) => of(val).pipe(delay(1000)))
    );
    const subscription = delayObservable$.subscribe((val) => {
        setData(current =>  [...current, val]);
    });
    const secondSubscription = scannedObservable$.subscribe((val) => {
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
  const { link } = operatorMenu.reduce;
  return (
    <div className="Reduce">
        <h4>reduce</h4>
        <Diagram values={data}/>
        <div className="map__code">
            <code>
            reduce((accumulator, current) ={'>'} accumulator + current, seed)
            </code>
        </div>
        <Diagram values={modifiedData}/>
        <br/>
        <div className="code">
            <code>
                const observable$ = from([1, 2, 3, 4, 5]).pipe(
                    <br/>
                    &nbsp;reduce((accumulator, current) ={'>'} accumulator + current, seed)
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

export default Reduce;
