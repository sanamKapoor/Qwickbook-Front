import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import DetailSection from './DetailSection';
import SellBook from './SellBook';

function App() {
  return(
  <Router>
   <React.Fragment>
    <Route path="/" exact component={Home} />     
    <Route path="/book"  component={DetailSection} />
    <Route path="/sell-book"  component={SellBook} />
   </React.Fragment>
   </Router>
  )
}

export default App
