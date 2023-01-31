import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";

import Navigation from "./component/Navigation";

import LandingPage from './pages/Landingpage/LandingPage';
import CreateTicketPage from "./pages/Landingpage/CreateTicketPage";
import CreateTicketFeedbackPage from "./pages/Landingpage/CreateTicketFeedbackPage";
import TicketItemPage from './pages/Landingpage/TicketItemPage';

import TicketItem from "./component/Landingpage/TicketItem";

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

  routeLP = (Component) => {
    if(sessionStorage.getItem('accessToken')) {
      return <Redirect to='/dashboard'></Redirect>
    } else {
      return <Component />
    }
  };


  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>

            <Route exact path="/" render={() => {
              return (
                this.routeLP(LandingPage)
              )
            }}>
            </Route>
            <Route path="/login" render={() => {
              return (
                this.routeLP(LoginAdminPage)
              )
            }}>
            </Route>
            <Route path="/create-ticket-visitor" render={() => {
              return (
                this.routeLP(CreateTicketPage)
              )
            }}>
            </Route>
            <Route path="/create-ticket-feedback" render={() => {
              return (
                this.routeLP(CreateTicketFeedbackPage)
              )
            }}>
            </Route>
            <Route path="/ticket-item-page" render={() => {
              return (
                this.routeLP(TicketItemPage)
              )
            }}>
            </Route>
            <Route path="/ticket-item" render={() => {
              return (
                this.routeLP(TicketItem)
              )
            }}>
            </Route>
            <Route path="/dashboard" render={() => { 
              return (
                this.routeGuard (DashboardPage)
                )
              }}>
            </Route>
            <Route path="/navigation" render={() => {  
              return (
                 this.routeGuard (Navigation) 
                )
            }}>  
            </Route>

          </Switch>
        </BrowserRouter>
      </React.Fragment>

    )
  }
}
                 
         
       
export default App
