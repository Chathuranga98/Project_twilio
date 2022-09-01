import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { Page } from './Page';
import Aboutpage from './screens/Aboutpage';
import Homepage from './screens/Homepage';

function App() {
  return (
   <Router>
<Routes>

      <Route path="/" element={<Homepage/>}>


      </Route>
      <Route path="/about" element={<Aboutpage/>}>

      </Route>
      </Routes>
   </Router>
  );
}

export default App;
