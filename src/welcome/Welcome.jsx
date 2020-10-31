import {unstable_batchedUpdates} from 'react-dom';
import { useEffect, useState } from 'react';
import { from, of } from 'rxjs';
import { delay,concatMap } from 'rxjs/operators';
import WelcomeDiagram from '../diagrams/welcomediagram/WelcomeDiagram';
import './Welcome.css';
const Welcome = () => {
    const [data, setData] = useState([]);
    const [replay, setReplay] = useState(false);
    useEffect(() => {
        const observable$ = from(["Welcome", "From", "React RX"]);
        const delayObservable$ = observable$.pipe(
            concatMap((val) => of(val).pipe(delay(1000)))
        );
        const subscription = delayObservable$.subscribe({
            next: (val) => setData(current =>  current.length === 3 ? [val] : [...current, val]),
            error: (error) => console.log,
            complete: () => {
                unstable_batchedUpdates(() => {
                    setReplay(!replay);
                });
            },
        })
        return () => {
            subscription.unsubscribe();
        }
    },[replay]);
    return (
        <div className='welcome'>
           <WelcomeDiagram values={data} />
           <h2>Welcome to React RX</h2>
            <p>This is a learning website how 
                &nbsp;<a href="https://rxjs-dev.firebaseapp.com/" rel="noreferrer" target='_blank'>RX JS</a>
                &nbsp;is used in <a href="https://reactjs.org/" rel="noreferrer" target='_blank'>React JS</a>.</p>
           <h2>About RX JS</h2>
           <p>RxJS is a library for composing asynchronous and event-based programs by using observable sequences.</p>
           <h2>Resources</h2>
           <ul className='welcome_resource__list'>
               <li>
                   <a href="https://rxjs-dev.firebaseapp.com/" rel="noreferrer" target='_blank'>Official Documentation</a>
               </li>
               <li>
                   <a href="https://www.learnrxjs.io/" rel="noreferrer" target='_blank'>Learn RX JS</a>
               </li>
           </ul>
           <h2>YouTube Videos</h2>
           <ul className='welcome_youtube__list'>
               <li>
                   <a href="https://youtu.be/PhggNGsSQyg" rel="noreferrer" target='_blank'>Learn RxJS in 60 Minutes for Beginners - Free Crash Course</a>
               </li>
               <li>
                   <a href="https://www.youtube.com/playlist?list=PL55RiY5tL51pHpagYcrN9ubNLVXF8rGVi" rel="noreferrer" target='_blank'>Understanding RxJS</a>
               </li>
           </ul>
        </div>
    )
}

export default Welcome
