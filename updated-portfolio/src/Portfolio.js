import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Nav from "./components/Nav";
import Footer from './components/Footer';
import './App.css';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';

class Portfolio extends Component {
    state = {
      currentPage: ""
    };
  
    handlePageChange = page => {
      this.setState({ currentPage: page });
    };
  
    render() {
      return (

        <Router>
        <div>
          <Nav
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
          <Switch>
            <Route exact path = "/about" component={About} />
            <Route exact path = "/projects" component={Projects} />
            <Route exact path = "/contact" component={Contact} />
           
          </Switch>
              <About />
          <Footer />
        </div>
         </Router> 
      );
    }
  }
  
  export default Portfolio;