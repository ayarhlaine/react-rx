import {useState} from 'react';
import From from './creation/from/From';
import TopBar from './TopBar/TopBar';
import Drawer from './Drawer/Drawer';
import './App.css';
function App() {
  const [toggle, setToggle] = useState(false);
  const toggleDrawer = (open) => {
    setToggle(open)
  }
  return (
    <div className="App">
     <TopBar onMenuClick={() => setToggle(!toggle)}/>
     <Drawer toggle={toggle} toggleDrawer={(open) => toggleDrawer(open)}/>
     <div className="app__body">
      <From/>
     </div>
    </div>
  );
}

export default App;
