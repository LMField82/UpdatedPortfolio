import React, { Component } from 'react';
import Nav from "./components/Nav";
import Footer from './components/Footer';
import './App.css';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';

class Portfolio extends Component {
    state = {
      currentPage: "Projects"
    };
  
    handlePageChange = page => {
      this.setState({ currentPage: page });
    };
  
    renderPage = () => {
        if (this.state.currentPage === "About") {
        return <About />;
      } else if (this.state.currentPage === "Projects") {
        return <Projects />;
      } else if (this.state.currentPage === "Contact") {
        return <Contact />;
      } else {
          return <About />;
      }
    };
  
    render() {
      return (
        <div>
          <Nav
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
          {this.renderPage()}
          <Footer />
        </div>
      );
    }
  }
  
  export default Portfolio;