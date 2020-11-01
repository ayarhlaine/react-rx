import { useEffect, useState } from 'react';
import { from, of } from 'rxjs';
import { delay,concatMap, map } from 'rxjs/operators';
import Diagram from '../../diagrams/diagram/Diagram';
import './Map.css';
import { operatorMenu } from '../../menu/menu';
import Footer from '../../diagrams/footer/Footer';
function Map() {
  const [data, setData] = useState([]);
  const [modifiedData, setModifiedData] = useState([]);
  const [replay, setReplay] = useState(false);
  useEffect(() => {
    const observable$ = from([1, 2, 3, 4, 5]);
    const multiplyByTen$ = observable$.pipe(
        map(val => val * 10),
        concatMap((val) => of(val).pipe(delay(1000)))
    );
    const delayObservable$ = observable$.pipe(
        concatMap((val) => of(val).pipe(delay(1000)))
    );
    const subscription = delayObservable$.subscribe((val) => {
        setData(current =>  [...current, val]);
    });
    const secondSubscription = multiplyByTen$.subscribe((val) => {
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
  const { link } = operatorMenu.map;
  return (
    <div className="Map">
        <h4>map</h4>
        <Diagram values={data}/>
        <div className="map__code">
            <code>
                map(val ={'>'} val * 10)
            </code>
        </div>
        <Diagram values={modifiedData}/>
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
        <Footer link={link} onReplay={onReplay}/>
    </div>
  );
}

export default Map;
