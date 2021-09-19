import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewRoom from './pages/NewRoom';
import { AuthContextProvider } from './context/AuthContext'
import Room from './pages/Room';
import AdminRoom from './pages/AdminRoom';

function App() {


  return (
    <Switch>
      <AuthContextProvider>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/rooms/new" component={ NewRoom }/>
        <Route path="/rooms/:id" component={ Room }/>
        <Route path="/admin/rooms/:id" component={ AdminRoom }/>

      </AuthContextProvider>
    </Switch>
  );
}

export default App;
