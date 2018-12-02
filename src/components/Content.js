import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import EmployeeList from './EmployeeList';
import Benefits from './Benefits';
import Profile from './Profile';

class Content extends React.Component {
    render() {
        return (
          <div className="Content">
    
            <h2>CONTENT AREA</h2>

            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/employees' component={EmployeeList} />
              <Route exact path='/benefits' component={Benefits} />
              <Route exact path='/profile' component={Profile} />
            </Switch>

          </div>
        );
    }
}

export default Content;