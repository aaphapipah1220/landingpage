import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";

// import Navigation from "./component/Navigation";

import LandingPage from './pages/Landingpage/LandingPage';
import CreateTicketPage from "./pages/Landingpage/CreateTicketPage";
import CreateTicketFeedbackPage from "./pages/Landingpage/CreateTicketFeedbackPage";
import TicketItemPage from './pages/Landingpage/TicketItemPage';

import LoginAdminPage from "./pages/Login/LoginAdminPage";

import DashboardPage from './pages/Dashboard/DashboardPage';


class App extends React.Component {

  routeGuard = (Component) => {

    if (sessionStorage.getItem('accessToken')) {
        let token = sessionStorage.getItem('accessToken')
        const { exp } = jwtDecode(token)
        const expirationTime = (exp * 1000) - 60000
        if (Date.now() >= expirationTime) {
            return <Redirect to="/login"></Redirect>
        }
        else {
            return <Component />
        }
    } else {
        return <Redirect to="/login"></Redirect>
    }
};


  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
              <Route exact path="/" component={LandingPage}>
              </Route>
              <Route path="/login" component={LoginAdminPage}>
              </Route>
              <Route path="/create-ticket-visitor"component={CreateTicketPage}>
              </Route>
              <Route path="/create-ticket-feedback" component={CreateTicketFeedbackPage}>
              </Route>
              <Route path="/ticket-item-page" component={TicketItemPage}>
              </Route>
              <Route path="/dashboard" render={() => { return this.routeGuard (DashboardPage)}}> 
              </Route> 
          </Switch>
      </BrowserRouter>
      </React.Fragment>
      );
  }
    
}
       

export default App
