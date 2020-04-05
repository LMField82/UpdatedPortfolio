import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Card from "./components/Card";
import About from './pages/about';
import './App.css';
import Footer from './components/Footer';

class App extends Component {
  
  render() {
  return (

   <Router>
     <div>
       <Nav />
         <Route exact path="/" component={About} />
         <Route exact path="/about" component={About} />
        {/* <Route exact path="/portfolio" component={Portfolio} /> */}
        {/* <Route path="/contact" component={Contact} />  */}
        <Card />
        <Footer />
     </div>
   </Router>
  );
}

}

export default App;