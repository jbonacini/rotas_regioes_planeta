import React from 'react'
import { Route, Switch} from 'react-router-dom'

import './App.css';

import Header from '../Header/Header.js';
import America from '../America/America.js';
import Antartica from '../Antartica/Antartica.js';
import Asia from '../Asia/Asia.js';
import Europa from '../Europa/Europa.js';
import Oceania from '../Oceania/Oceania.js';

function App(props) {
  return (   
    <>
      <Header />

      <main>
        <Switch>
          <Route exact path="/america" render={(props) => <America />}></Route>
          <Route exact path="/" render={(props) => <Asia />}></Route>
          <Route exact path="/oceania" render={(props) => <Oceania />}></Route>
          <Route exact path="/antartica" render={(props) => <Antartica />}></Route>
          <Route exact path="/europa" render={(props) => <Europa />}></Route>
        </Switch>
      </main>

    </>
    
  );
}

export default App;