import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewRoom from './pages/NewRoom';
import { AuthContextProvider } from './context/AuthContext'
import Room from './pages/Room';

function App() {


  return (
    <Switch>
      <AuthContextProvider>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/rooms/new" component={ NewRoom }/>
        <Route path="/room/:id" component={ Room }/>
      </AuthContextProvider>
    </Switch>
  );
}

export default App;
