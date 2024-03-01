import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Projetos from './Projects'; 
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/App.tsx" component={App} />
        <Route path="/Projects.tsx" component={Projetos} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;