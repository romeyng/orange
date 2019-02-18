import React, { Component } from 'react';

import {Switch,Route} from 'react-router-dom';
import Ticketing from './ticketing/Ticketing';

import Inventory from './inventory/Inventory';
import Administrative from './administrative/Administrative';
class MainContent extends Component {
    state = {  }
    render() { 
        return ( 
            
            <Switch>
            <Route exact path='/' component={Ticketing}/>
            <Route exact path='/inventory' component={Inventory}/>
            <Route exact path='/administrative' component={Administrative}/> 


        </Switch>
        

         );
    }
}
 
export default MainContent;