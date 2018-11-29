import React, { Component } from 'react';
import './App.css';
import TrailContainer from './TrailContainer/trailContainer';
import NavBarContainer from './NavBarContainer/Navbar'
import LogIn from './LogInContainer/LogIn'
import { Route, Switch, Redirect } from 'react-router-dom';
import AddTrail from './AddTrail/addTrail';
import EditTrail from './EditTrail/editTrail';




const My404 = () => {
  return (
    <div>
      You're Lost
    </div>
    )
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarContainer />
          <main>
            <Switch>
              <Route exact path="/login" component={LogIn} />
              <Route path="/trail" component={TrailContainer} />
              <Redirect from="/" to="/trail"/>
              <Route component={My404} />
            </Switch>
          </main>
      </div>
    );
  }
}

export default App;
