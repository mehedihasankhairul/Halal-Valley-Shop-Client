import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PrivateRoute } from "react-private-public-route";
import { createContext, useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import LogIn from './components/LogIn/LogIn';
import CheckOut from './components/CheckOut/CheckOut';
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
          
          <Route path='/login'>
            <LogIn />
          </Route>
          <PrivateRoute path='/admin'>
          <Admin />
        </PrivateRoute>
          <Route path='/checkout/:id'>
            <CheckOut></CheckOut>
          </Route>
          <Route path='*'>
            <h1>Page is not found: 404</h1>
          </Route>
        </Switch>
      
      </Router>
    </UserContext.Provider>

  );
}

export default App;