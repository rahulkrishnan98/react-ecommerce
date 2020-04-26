import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import { FaIdCard, FaAdobe } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

import Footer from './components/footer'
import FlyersPage from './pages/FlyersPage';
import CardsPage from './pages/CardsPage';
import HomePage from './pages/Homepage';
import CartPage from './pages/CartPage'
import logo from './assets/images/logo_2.png'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Business Cards', path: '/cards' },
        { title: 'Flyers', path: '/flyers' }
      ],
      home: {
        info_printing: ["Business Cards ", "Compliment slips ", "Flyers ", "Folded Flyers ", "Greeting Cards "],
        info_support: ["Artwork ", "Paper Size ", "Samples ", "Contact "],
        info_about: ["About Us", "Our Terms", "Your Privacy"],
        info_newsletter: "Sign up for our newsletter and we'll let you know as soon as we post any sales or coupon codes!",
        title: "We add value to your business",
        subTitle: '25 Years of ....blah blah',
        text: "Our experienced designers and state of the art production line printers backed by a host of finishing equipments have catered to over 1000 satisfied customers over the turn of two decades. "
      }
    }
  }
  render() {
    return (
      <Router>
        <Container className='p-0' fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand><Link to="/"><img src={logo} alt="Logo" style={{ height: "45px", width: "140px", align: 'top' }} /></Link></Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link class="nav-link" to="/">Home</Link>
                <Link class="nav-link" to="/cards">Cards <FaIdCard /></Link>
                <Link class="nav-link" to="/flyers">Flyers <FaAdobe /></Link>
                <Link class="nav-link" to="/cart"><FiShoppingCart /></Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} info_printing={this.state.home.info_printing} info_about={this.state.home.info_about} info_support={this.state.home.info_support} info_newsletter={this.state.home.info_newsletter} />} />
          <Route path="/cards" render={() => <CardsPage />} />
          <Route path="/flyers" render={() => <FlyersPage />} />
          <Route path="/cart" render={() => <CartPage />} />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
