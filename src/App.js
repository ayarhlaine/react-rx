import {useState} from 'react';
import From from './creation/from/From';
import TopBar from './TopBar/TopBar';
import Drawer from './Drawer/Drawer';
import './App.css';
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
         selectedMenu === 'from' &&
          <From/>
       }
     </div>
    </div>
  );
}

export default App;
