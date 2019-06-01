import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Card } from "react-bootstrap";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChartLine } from '@fortawesome/free-solid-svg-icons';
// library.add(faChartLine);
import 'font-awesome/css/font-awesome.min.css';
import Footer from "./Footer";

class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			about_image: "https://res-staging.cloudinary.com/omg-helo/image/upload/v1556082332/trand_t1prbm.jpg",
			img_jumbo: "https://res-staging.cloudinary.com/omg-helo/video/upload/v1556094907/Money_qe1bcn.webm"
		}
	}
	render() {
		return (
			<div>
				<Jumbotron className="jumbo-edit">
					<div className="kotak_jumbo">
						<h1 className="m-900 text-center">SELAMAT DATANG PEJUANG</h1>
						<h3 className="text-center">MUDA</h3>
						<div className="text-center">
							<Link className="btn btn-outline-primary" to="/register">JOIN NOW</Link>
						</div>
					</div>
				</Jumbotron>
				<section id="about">
					<Container>
						<h2 className="about-title text-center" id="about">ABOUT US</h2>
						<p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at facilis a facere animi aliquid quam nihil dignissimos corrupti delectus eligendi, praesentium nam perspiciatis deleniti quod, sunt tenetur! Blanditiis, tenetur!</p>
					</Container>
					<Container>
						<Row>
							<Col sm={6}><div className="img_about"></div></Col>
							<Col sm={6}>
								<div className="test">
									<h5>APA MANFAATNYA YANG DIDAPATKAN ?</h5>
									<ul className="fitur">
										<li><i className="fa fa-crosshairs"></i> DAPATKAN TARGET YANG TEPAT</li>
										<li><i class="fa fa-shopping-cart"></i> TINGKATKAN PENJUALAN SECARA MAKSIMAL</li>
										<li><i class="fa fa-gift"></i> TINGKATKAN PENDAPATAN</li>
									</ul>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
				<section id="fiturs" className="mt-5">
					<Container>
						<h1 className="text-center text-light">FITUR</h1>
						<Row className="mt-5">
							<Col sm={{span:2,offset:2}} className="float-right">
								<Card style={{ width: '18rem' }}>
									<Card.Img variant="top" src="https://res-staging.cloudinary.com/omg-helo/image/upload/v1558270282/luke-chesser-1399685-unsplash_xk6mfh.jpg" />
									<Card.Body>
										<Card.Title>Analisis Pasar</Card.Title>
										<Card.Text>
											Some quick example text to build on the card title and make up the bulk of
											the card's content.
    </Card.Text>
					
									</Card.Body>
								</Card>
							</Col>
							<Col sm={{span:3,offset:3}}>
								<Card style={{ width: '18rem' }}>
									<Card.Img variant="top" src="https://res-staging.cloudinary.com/omg-helo/image/upload/v1558270300/mr-lee-618477-unsplash_yu0p2w.jpg" />
									<Card.Body>
										<Card.Title>Tren Produk</Card.Title>
										<Card.Text>
											Some quick example text to build on the card title and make up the bulk of
											the card's content.
    </Card.Text>
		
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
				</section>
				<Footer/>
			</div>
		)
	}
}
export default Landing;