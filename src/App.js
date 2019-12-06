import React from "react";
import Survey from "./components/survey";
import Header from "./components/header";
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
    <React.Fragment>
      <Header />
      <Route path="/" exact={true} render= {
        () => {
          return ( <h1> Welcome Home </h1> )
        }
      } />

        <Route path="/survey" component={Survey} render= {
        () => {
          return ( <h1> Welcome Home </h1> )
        }
      } />

      
    </React.Fragment>
    </Router>
  );
}

export default App;
