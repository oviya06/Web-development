import All from "./pages/all";
import {Route , Routes} from 'react-router-dom';
import Tamil from "./pages/tamil";
import Ap from "./pages/ap";
import Combo from "./pages/combo";

function App() {
  return (
    <div>
      <Routes>
        <Route path ="/" element={<All/>}></Route>
        <Route path ="/tamilnadu" element={<Tamil/>}></Route>
        <Route path ="/ap" element={<Ap/>}></Route>
        <Route path ="/combo" element={<Combo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
