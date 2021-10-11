import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Redirect,Switch} from 'react-router-dom';

import UseEffectAPI from "./component/useEffectAPI";
import Details from './component/Details';


const App = () => {

  return <Router>
  <main>
    <Switch>
      <Route path="/" exact>
        <UseEffectAPI/>
      </Route>
      <Route path="/details" exact>  
        <Details/>
      </Route>        
    </Switch>
  </main>
  </Router>
} 

export default App