import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/1.png'
import {Nav,Navbar} from 'react-bootstrap'

export default class Navsection extends Component {
    render() {
        return (
            <Navbar className="container " collapseOnSelect expand="lg"  >
          <Navbar.Brand > <Link to='/'> <img width="210" className="img-fluid"  src={logo} alt="logo"/> </Link> </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto items">
            <Nav.Link className="item" > <Link to='/' style={{textDecoration: 'none',color:'black'}}> Home </Link></Nav.Link>
             
              <Nav.Link className="item" > <Link to='/digitalstudio' style={{textDecoration: 'none',color:'black'}}> Digital Studio </Link></Nav.Link>
              <Nav.Link className="item"> <Link style={{textDecoration: 'none',color:'black'}} to='/partner'> Partner with us </Link></Nav.Link>
            <Nav.Link className="item"> <Link style={{textDecoration: 'none',color:'black'}} to='/schooling'> Schooling system </Link></Nav.Link>
            </Nav>
         
          </Navbar.Collapse>
          
        </Navbar>
           
        )
    }
}
