import React, { Component } from "react";
class Footer extends Component {
	render() {
		return (
			<footer className="footer-distributed">
			<div className="footer-left">
				<h3>OMG</h3>
				<p className="footer-company-name">online market monitoring &copy; {new Date().getFullYear()}</p>
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
					<span>Follow us</span>
				</p>
				<div className="footer-icons">
					<a href="www.facebook.com" target="_blank"><i className="fa fa-facebook"></i></a>
					<a href="www.twitter.com"><i className="fa fa-twitter"></i></a>
					<a href="linkedin.com"><i className="fa fa-linkedin"></i></a>
					<a href="instagram.com"><i className="fa fa-instagram"></i></a>					
				</div>
			</div>
		</footer>
		);
	}
}
export default Footer;