import {useState} from 'react';
import From from './creation/from/From';
import TopBar from './TopBar/TopBar';
import Drawer from './Drawer/Drawer';
import './App.css';
import Interval from './creation/interval/Interval';
import Welcome from './welcome/Welcome';
import Map from './operators/map/Map';
import Scan from './operators/scan/Scan';
import Reduce from './operators/reduce/Reduce';
import Pluck from './operators/pluck/Pluck';
import SwitchMap from './operators/switchMap/SwitchMap';
function App() {
  const [toggle, setToggle] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('welcome');
  const toggleDrawer = (open) => {
    setToggle(open)
  }
  return (
    <div className="App">
     <TopBar onMenuClick={() => setToggle(!toggle)}/>
     <Drawer toggle={toggle}
     toggleDrawer={(open) => toggleDrawer(open)}
     onMenuSelect={(menu) => setSelectedMenu(menu)}
     />
     <div className="app__body">
       {
         selectedMenu === 'welcome' &&
          <Welcome/>
       }
       {
         selectedMenu === 'from' &&
          <From/>
       }
       {
         selectedMenu === 'interval' &&
          <Interval/>
       }
       {
         selectedMenu === 'map' &&
          <Map/>
       }
       {
         selectedMenu === 'scan' &&
          <Scan/>
       }
       {
         selectedMenu === 'reduce' &&
          <Reduce/>
       }
       {
         selectedMenu === 'pluck' &&
          <Pluck/>
       }
       {
         selectedMenu === 'switchMap' &&
          <SwitchMap/>
       }
     </div>
    </div>
  );
}

export default App;
