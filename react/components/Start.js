import React, { Component } from "react";
import Loadable from 'react-loadable'
import {PrivateRoute} from './ProtectedRoute'
import { Route, NavLink, BrowserRouter } from "react-router-dom";
//for code splitting, show loading page
function Loading({ isLoading, pastDelay, error }) {
  if (isLoading && pastDelay) {
    return <p>Loading...</p>;
  } else if (error && !isLoading) {
    return <p>Error!</p>;
  } else {
    return null;
  }
}
function promise() {
  return new Promise(resolve => {
    resolve();
  });
}
const Second = Loadable({
  loader: () => promise().then(() => import('./Second')),
  loading: Loading
});
const Third = Loadable({
  loader: () => promise().then(() => import('./Third')),
  loading: Loading
});
export default class Start extends Component{
    constructor(props){
        super(props)
    }
    render(){

        
        return (
    <BrowserRouter>
        {/* Wrap the whole app with the BrowserRouter component */}
        <div>

          <div>
            <div className="panel panel-default">
              <div className="content">
                {/* Declare your routes */}
                {/* Route for the home/landing page the exact keyword here means it will only match the `/` route */}
                <Route exact path="/" component={Second} />
                <PrivateRoute exact path="/:id" component={Third} />
              </div>

            </div>
          </div>

        </div>
      </BrowserRouter>);
    }
}
