import React, { Component } from 'react';
import './styles/App.scss';
import MainNav from './Navbar';
import MainHeader from './MainHeader';
import QuoteDiv from './QuoteDiv';
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
          <section id="quote-div" className="container-fluid">
            <QuoteDiv />
          </section>
          <section id="content" className="container-fluid">
            <Journal />
            <Upcoming />
            <New />
          </section>
          <section id="signup">

          </section>
        </main>
        <footer id="contact-info">

        </footer>
      </div>
    );
  }

  componentDidMount() {
    const dropdown = document.querySelector('.dropdown');
    const navToggle = document.querySelector('.nav-toggle');
    navToggle.addEventListener('click', () => {
      if (dropdown.style.display === '') {
        dropdown.style.display = 'block';
      } else if (dropdown.style.display === 'block') {
        dropdown.style.display = '';
      }
    });

    document.addEventListener('scroll', () => {
      const navbar = document.querySelector('.main-nav');
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
