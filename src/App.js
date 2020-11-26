
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { renderRoutes } from 'react-router-config';
import routes from './route';
import { Navbar } from './components'

function App() {
  return (
    <Router>
      <Switch>      
       <div className="container">
          <Navbar />
          {renderRoutes(routes)}
        </div>
      </Switch>      
    </Router>
  );
}

export default App;
