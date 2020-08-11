import React from 'react';
//import SearchString from './SearchString';
import './App.css';
import * as rbstrap from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <rbstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <rbstrap.Navbar.Brand href="#home">WELCOME!!</rbstrap.Navbar.Brand>
  <rbstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <rbstrap.Navbar.Collapse id="responsive-navbar-nav">
    <rbstrap.Nav className="mr-auto">
      <rbstrap.Nav.Link href="#features">Features</rbstrap.Nav.Link>
      <rbstrap.Nav.Link href="#pricing">Pricing</rbstrap.Nav.Link>
      <rbstrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <rbstrap.NavDropdown.Item href="#action/3.1">Action</rbstrap.NavDropdown.Item>
        <rbstrap.NavDropdown.Item href="#action/3.2">Another action</rbstrap.NavDropdown.Item>
        <rbstrap.NavDropdown.Item href="#action/3.3">Something</rbstrap.NavDropdown.Item>
        <rbstrap.NavDropdown.Divider />
        <rbstrap.NavDropdown.Item href="#action/3.4">Separated link</rbstrap.NavDropdown.Item>
      </rbstrap.NavDropdown>
    </rbstrap.Nav>
    <rbstrap.Nav>
      <rbstrap.Nav.Link href="#deets">More deets</rbstrap.Nav.Link>
      <rbstrap.Nav.Link eventKey={2} href="#memes">
        Dank memes
      </rbstrap.Nav.Link>
    </rbstrap.Nav>
  </rbstrap.Navbar.Collapse>
</rbstrap.Navbar>
    </div>
  );
}
 
export default App;
