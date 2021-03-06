import React from 'react';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = () => {
  return (
    <Navbar bg="black" variant="dark" sticky="top">
      <Navbar.Brand>
      <img
        src="./logo.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt=" "></img>
      </Navbar.Brand>
        <NavDropdown bg="black" title="Menu" id="collasible-nav-dropdown" style={{ color: "#71ABDA" }}>
        <NavDropdown.Item style={{ color: "#5299d3" }} href="/">Home</NavDropdown.Item>
        <NavDropdown.Item style={{ color: "#5299d3" }} href="/welcome">Admin</NavDropdown.Item>
        <NavDropdown.Item style={{ color: "#5299d3" }} href="/users">Users</NavDropdown.Item>
        <NavDropdown.Item style={{ color: "#5299d3" }} href="/lessons">Lessons</NavDropdown.Item>
        <NavDropdown.Item style={{ color: "#5299d3" }} href="/challenges">Challenges</NavDropdown.Item>
      </NavDropdown>    
    </Navbar>
  );
};


export default connect()(NavBar);