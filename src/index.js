import React from 'react';
import ReactDOM from 'react-dom';
import {Switch,Route,Link,BrowserRouter as Router} from 'react-router-dom';
 
import './index.css';
import App from './App';
import Notfound from './notfound';
import Getcity from './Getcity';
import './App.css';
 
const routing = (
 
    <Router>
 
    <div className="navigation_bar">
 
        <ul key="nav">
            <li><Link className="link" to = "/">Search Zip</Link></li>
     	<li><Link className="link" to = "./Getcity">Search City</Link></li>
            
        </ul>
 
    <Switch>
        <Route exact path = "/" component ={App} />
        <Route component ={Getcity}/>
        
        <Route component ={Notfound}/>
</Switch>
    </div>
 
 
    </Router>
 
 
 
    )
 
 
ReactDOM.render(routing, document.getElementById('root'));

