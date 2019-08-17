import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { Navbar, Nav} from 'react-bootstrap';
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
class NavbarComponent extends Component {
	onLogoutClick = e =>{
        e.preventDefault();
        this.props.logoutUser();
    };
	render() {
		const  {isAuthenticated}  = this.props.auth;
		const  {user}  = this.props.auth;
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
						{isAuthenticated ? (
							<Nav>
							<span className="nav-link" >{user.name}</span>
							<button className="btn btn-outline-primary" onClick={this.onLogoutClick}>logout</button>
							</Nav>
						) : (
							<Nav>
						<Link className="btn btn-outline-primary" to="/login">Login</Link>
						</Nav>
						)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			
			</div>
		);
	}
}
NavbarComponent.propTypes={
    logoutUser:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired
}
const mapStateToProps = state =>({
    auth:state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(NavbarComponent);