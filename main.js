import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './containers/LoginPage.js';
import AboutUs from './containers/AboutUs'
import Home from './components/Home'
import Profile from './components/Profile'
import Team from './components/Team'
import Contact from './components/Contact'

import {BrowserRouter,Route,Switch} from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer);
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/aboutus/profile" component={Profile}/>
                <Route path="/aboutus/team" component={Team} />
                <Route path="/aboutus/contact" component={Contact} />
                <Route path="/home" component={Home} />
                <Route  path="/aboutus" component={AboutUs} />
                <Route path="/" component={LoginPage} />
            </Switch>
            
        </BrowserRouter>
    </Provider>
    
    , document.getElementById('LoginHome'));