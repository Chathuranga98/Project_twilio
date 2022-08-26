import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { Page } from './Page';
import Homepage from './screens/Homepage';

function App() {
  return (
   <Router>
<Routes>

      <Route path="abc" element={<Homepage/>}>


      </Route>
      <Route path="/about" exact>

      </Route>
      </Routes>
   </Router>
  );
}

export default App;
