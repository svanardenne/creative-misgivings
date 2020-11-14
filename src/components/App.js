import React, { Component } from 'react';
import './styles/App.scss';
import MainNav from './Navbar';
import MainHeader from './MainHeader';
import QuoteDiv from './QuoteDiv';
import Journal from './Journal';
import Upcoming from './Upcoming';
import New from './New';
import Contact from './Contact'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header id="main-header">
          <MainNav />
          <MainHeader />
        </header>
        <main>
          <section id="quote-div">
            <QuoteDiv />
          </section>
          <section id="content">
            <Journal />
            <Upcoming />
            <New />
          </section>
          <section id="signup">

          </section>
        </main>
        <footer id="contact-info">
          <Contact />
        </footer>
      </div>
    );
  }

  /* ============================================= */
  /*               Scripts on Mount                */
  /* ============================================= */

  //Toggles dropdown menu on navbar
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

    //Toggles navbar style on scroll
    document.addEventListener('scroll', () => {
      const navbar = document.querySelector('.nav-container');
      const mobileLinks = document.getElementsByClassName('nav-link');
      const desktopLinks = document.getElementsByClassName('desktop-nav-link');
      if (window.pageYOffset > 0) {
        navbar.style.backgroundColor = 'white';
        navbar.style.color = 'black';
        for (let i = 0; i < mobileLinks.length; i++) {
          mobileLinks[i].style.color = 'black';
        }
        for (let i = 0; i < desktopLinks.length; i++) {
          desktopLinks[i].style.color = 'black';
        }
      } else if (window.pageYOffset === 0) {
        navbar.style.backgroundColor = '';
        navbar.style.color = 'white';
        for (let i = 0; i < mobileLinks.length; i++) {
          mobileLinks[i].style.color = 'white';
        }
        for (let i = 0; i < desktopLinks.length; i++) {
          desktopLinks[i].style.color = 'white';
        }
      }
    });
  }
}

export default App;
