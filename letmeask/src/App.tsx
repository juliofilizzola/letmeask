import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewRoom from './pages/NewRoom';
import { auth, firebase } from './services/firebase';

export const AuthContext = React.createContext({} as any);

function App() {
  const [user, setUser] = React.useState();

  const signWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(result => {
      if (result.user) {
        const { displayName, photoURL, uid } = result.user;
        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.')
        }
      }
    });
  }
  return (
    <Switch>
      <AuthContext.Provider value={{ user, setUser }}>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/rooms/new" component={ NewRoom }/>
      </AuthContext.Provider>
    </Switch>
  );
}

export default App;
