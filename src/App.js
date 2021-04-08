import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PrivateRoute } from "react-private-public-route";
import { createContext, useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import LogIn from './components/LogIn/LogIn';
export const UserContext = createContext()


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [product, setProduct] = useState([]);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser], [product, setProduct]}>
      <Router>
        <div><Header></Header> </div>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          
          <Route path='/logIn'>
            <LogIn />
          </Route>
          <Route path='*'>
            <h1>Page is not found: 404</h1>
          </Route>
        </Switch>
        <PrivateRoute path='/admin'>
        <Admin />
      </PrivateRoute>
      </Router>
    </UserContext.Provider>

  );
}

export default App;