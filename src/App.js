import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import DetailSection from './DetailSection';

function App() {
  return(
  <Router>
   <React.Fragment>
    <Route path="/" exact component={Home} />     
    <Route path="/book"  component={DetailSection} />
   </React.Fragment>
   </Router>
  )
}

export default App
