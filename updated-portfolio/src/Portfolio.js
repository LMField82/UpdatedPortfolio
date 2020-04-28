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
  
    // renderPage = () => {
    //   if (this.state.currentPage === "About") {
    //     return <About />;
    //   } else if (this.state.currentPage === "Projects") {
    //     return <Projects />;
    //   } else if (this.state.currentPage === "Contact") {
    //     return <Contact />;
    //   } else {
    //     return <About />;
    //   }
    // };

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
              
          {/* {this.renderPage()} */}

          <Footer />
          </div>
         </Router> 
      );
    }
  }
  
  export default Portfolio;