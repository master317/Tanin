import React, { Component } from 'react';
import {  SessionStore} from "./stores/sessionStore";
import { Route } from "src/components/Router";
import './App.css';
export interface IAppProps {
  sessionStore?: SessionStore;
}

class App extends Component{
  render() {
    return (
     <Route />
    );
  }
}

export default App;
