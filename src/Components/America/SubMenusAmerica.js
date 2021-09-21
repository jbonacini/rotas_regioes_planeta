import React from 'react'
import { Route, Switch} from 'react-router-dom'

import '../App/App.css';

import AmericaHeader from './AmericaHeader';
// import App from '../App/App.js';
import AmericaDoNorte from "./America_do_norte/America_do_norte.js"
import AmericaCentral from "./America_central/America_central.js"
import AmericaDoSul from "./America_do_sul/America_do_sul.js"
import Equador from "./Equador/Equador.js"
import Inferiores from "./Inferiores/Inferiores.js"
export default function SubMenusAmerica(props) {
  return (   
    <>
      <AmericaHeader />

      <main>
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/America_do_norte" render={(props) => <AmericaDoNorte />}></Route>
          <Route exact path="/America_central" render={(props) => <AmericaCentral />}></Route>
          <Route exact path="/America_do_sul" render={(props) => <AmericaDoSul />}></Route>
          <Route exact path="/Equador" render={(props) => <Equador />}></Route>
          <Route exact path="/Inferiores" render={(props) => <Inferiores />}></Route>
        </Switch>
      </main>

    </>
    
  );
}