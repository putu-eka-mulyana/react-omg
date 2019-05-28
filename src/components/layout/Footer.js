import React, { Component } from "react";
class Footer extends Component {
	render() {
		return (
			<footer className="footer-distributed">
			<div className="footer-left">
				<h3>OMG</h3>
				<p className="footer-company-name">online market monitoring &copy; 2019</p>
			</div>
			<div className="footer-center">
				<div>
					<i className="fa fa-map-marker"></i>
					<p>Indonesia</p>
				</div>
				<div>
					<i className="fa fa-phone"></i>
					<p>+62 555 7776 9998</p>
				</div>
				<div>
					<i className="fa fa-envelope"></i>
					<p>support@omg.com</p>
				</div>
			</div>
			<div className="footer-right">
				<p className="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>
				<div className="footer-icons">
					<a href="facebook.com"><i className="fa fa-facebook"></i></a>
					<a href="twitter.com"><i className="fa fa-twitter"></i></a>
					<a href="linkedin.com"><i className="fa fa-linkedin"></i></a>
				</div>
			</div>
		</footer>
		);
	}
}
export default Footer;