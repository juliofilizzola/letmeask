import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewRoom from './pages/NewRoom';
// import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/rooms/new" component={ NewRoom }/>

    </Switch>
  );
}

export default App;
