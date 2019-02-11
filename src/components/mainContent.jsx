import React, { Component } from 'react';

import {Switch,Route} from 'react-router-dom';
import Ticketing from './ticketing/Ticketing';

import Inventory from './inventory/Inventory';
class MainContent extends Component {
    state = {  }
    render() { 
        return ( 
            
            <Switch>
            <Route exact path='/' component={Ticketing}/>
            <Route exact path='/inventory' component={Inventory}/>
           


        </Switch>
        

         );
    }
}
 
export default MainContent;