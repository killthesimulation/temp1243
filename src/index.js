import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


//Pages
import Home from './components/pages/Home'
import Dashboard from './components/pages/Dashboard' 
import Borrow from './components/pages/Borrow'
import Lend from './components/pages/Lend' 
import Profile from './components/pages/Profile' 
import BorrowPoolDetailsGrace from './components/pages/BorrowPoolDetailsGrace'
import BorrowPoolDetailsCollecting from './components/pages/BorrowPoolDetailsCollecting'
import LendPoolDetailsCollecting from './components/pages/LendPoolDetailsCollecting'
import LendPoolDetailsGrace from './components/pages/LendPoolDetailsGrace';
import CreditLines from './components/pages/CreditLines'
import CreditLinesGrantedSubpage from './components/pages/CreditLinesGrantedSubpage'
import CreditLinesSave from './components/pages/CreditLinesSave'


import './components/uiElements/generalElements/style.css';
import './components/uiElements/generalElements/mobile.css';
import './components/uiElements/generalElements/landingMobile.css';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/dashboard' component={Dashboard} />  // mobile done ++
        <Route exact path='/borrow' component={Borrow} />  // mobile done ++
        <Route exact path='/lend' component={Lend} />  // mobile done ++
        <Route exact  path='/profile' component={Profile} />  // mobile done ++
        <Route exact  path='/borrow-pool-details-grace' component={BorrowPoolDetailsGrace} />  // mobile done ++
        <Route exact  path='/borrow-pool-details-collecting' component={BorrowPoolDetailsCollecting} /> // mobile done
        <Route exact  path='/lend-pool-details-collecting' component={LendPoolDetailsCollecting} /> // mobile done ++
        <Route exact  path='/lend-pool-details-grace' component={LendPoolDetailsGrace} /> // mobile done ++
        <Route exact  path='/credit-lines' component={CreditLines} /> // mobile done ++
        <Route exact  path='/credit-lines-granted-subpage' component={CreditLinesGrantedSubpage} /> // mobile done ++
        <Route exact  path='/credit-lines-save' component={CreditLinesSave} /> // mobile done ++
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

