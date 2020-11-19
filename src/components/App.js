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
      const toggleFill = document.querySelector('.toggle-fill');
      const mobileLinks = document.getElementsByClassName('nav-link');
      const desktopNavItems = document.getElementsByClassName('nav-item');
      const desktopLinks = document.getElementsByClassName('desktop-nav-link');
      if (window.pageYOffset > 0) {
        navbar.style.backgroundColor = 'white';
        navbar.style.color = 'black';
        toggleFill.setAttribute('fill', '#000000');
        for (let i = 0; i < mobileLinks.length; i++) {
          mobileLinks[i].style.color = 'black';
        }
        for (let i = 0; i < desktopLinks.length; i++) {
          desktopLinks[i].style.color = 'black';
          desktopNavItems[i].style.borderLeftColor = "black";
        }
      } else if (window.pageYOffset === 0) {
        navbar.style.backgroundColor = '';
        navbar.style.color = 'white';
        toggleFill.setAttribute('fill', '#FFFFFF');
        for (let i = 0; i < mobileLinks.length; i++) {
          mobileLinks[i].style.color = 'white';
        }
        for (let i = 0; i < desktopLinks.length; i++) {
          desktopLinks[i].style.color = 'white';
          desktopNavItems[i].style.borderLeftColor = "white";
        }
      }
    });
    const downArrow = document.querySelector(".down-arrow");
    downArrow.addEventListener('click', () => {
      downArrow.scrollIntoView();
    });
  }
}

export default App;
