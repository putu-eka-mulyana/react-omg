import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { Navbar, Nav} from 'react-bootstrap';
class NavbarComponent extends Component {
	render() {
		return (
			<div>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<LinkContainer to="/">
					<Navbar.Brand>OMG</Navbar.Brand>
				</LinkContainer>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
				
					</Nav>
					<Nav >
						<Link className="nav-link" to="/">HOME</Link>
						<Link className="nav-link" to="#about">ABOUT US</Link>
						<Link className="nav-link btn btn-danger" to="/login">Login</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			
			</div>
		);
	}
}
export default NavbarComponent;