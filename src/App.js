import React from "react";
import Survey from "./components/survey";
import Header from "./components/header";
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Link} from 'react-router-dom';
import SurveyCreator from './components/surveyCreator';

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

        <Route path="/survey" component={Survey} />
        <Route path="/surveyCreator" component={SurveyCreator} />
      
    </React.Fragment>
    </Router>
  );
}

export default App;
