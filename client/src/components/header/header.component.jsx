import React from 'react';
import './header.components.css';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap"
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (<Navbar style={{backgroundColor: '#28a745', paddingLeft: '60px', paddingRight: '60px'}} variant='dark'>
        <Navbar.Brand href="/offers" style={{color: '#ffffff', fontSize: '40px'}}>PareUp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className='nav-link-additional' style={{color: '#ffffff', fontSize: '30px'}}>Home</Nav.Link>
            <Nav.Link href="/offers" className='nav-link-additional' style={{color: '#ffffff', fontSize: '30px'}}>View Offers</Nav.Link>
            <Nav.Link href="/survey" className='nav-link-additional' style={{color: '#ffffff', fontSize: '30px'}}>Enter Your Offer</Nav.Link>
            <Nav.Link href="/negotiation-tips" className='nav-link-additional' style={{color: '#ffffff', fontSize: '30px'}}>Negotiation Tips</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      );
      // return (<Navbar bg='light'>
      //   <Navbar.Brand href="/offers">PareUp</Navbar.Brand>
      //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //   <Navbar.Collapse id="basic-navbar-nav">
      //     <Nav className="ml-auto">
      //       <Nav.Link href="/" >Home</Nav.Link>
      //       <Nav.Link href="/offers">View Offers</Nav.Link>
      //       <Nav.Link href="/survey">Enter Your Offer</Nav.Link>
      //       <Nav.Link href="/negotiation-tips">Negotiation Tips</Nav.Link>
      //     </Nav>
      //   </Navbar.Collapse>
      // </Navbar>
      // );
      // return (
      //   <div className='header'>
      //       <Link className='logo-container' to='/'>
      //           {/* <img src={logo} alt='logo' className='logo' /> */}
      //           PareUp
      //       </Link>
      //       <div className='options'>
      //           {/* <Link className='option' to='/executive_summary'>
      //               EXECUTIVE SUMMARY
      //           </Link> */}
      //           <Link className='option' to='/offers'>
      //               View Offers
      //           </Link>
      //           <Link className='option' to='/survey'>
      //               Enter Your Offer
      //           </Link>
      //           <Link className='option' to='/negotiation-tips'>
      //               Negotiation Tips
      //           </Link>
      //       </div>
      //   </div>
      // )
    }
}

export default Header;