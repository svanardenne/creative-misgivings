import React, { Component } from 'react';
import "react-bootstrap/dist/react-bootstrap.min.js";
import './App.css';
import MainNav from './Navbar';
import MainHeader from './MainHeader';
import Divider from './Divider';
import Content from './Content'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="main-header">
          <MainNav />
          <MainHeader />
        </header>
        <main className="container-fluid">
          <section className="divider">
            <Divider />
          </section>
          <section id="content">
            <Content />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
