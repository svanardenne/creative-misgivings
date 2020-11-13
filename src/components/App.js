import React, { Component } from 'react';
import "react-bootstrap/dist/react-bootstrap.min.js";
import './App.css';
import MainNav from './Navbar';
import MainHeader from './MainHeader';
import Divider from './Divider';
import Journal from './Journal';
import Upcoming from './Upcoming';
import New from './New';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header id="main-header">
          <MainNav />
          <MainHeader />
        </header>
        <main className="container-fluid">
          <section id="divider" className="container-fluid">
            <Divider />
          </section>
          <section id="content" className="container-fluid">
            <Journal />
            <Upcoming />
            <New />
          </section>
        </main>
      </div>
    );
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const navbar = document.getElementById('main-nav');
      if (window.pageYOffset > 0) {
        navbar.classList.add("navbar-light", "bg-light");
        navbar.classList.remove("navbar-dark");
      } else if (window.pageYOffset === 0) {
        navbar.classList.add("navbar-dark");
        navbar.classList.remove("navbar-light", "bg-light");
      }
    });
  }
}

export default App;
