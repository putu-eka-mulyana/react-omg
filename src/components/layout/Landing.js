import React,{ Component } from "react";
// import { Link } from "react-router-dom";
import { Jumbotron, Container, Row,Col,Button } from "react-bootstrap";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChartLine } from '@fortawesome/free-solid-svg-icons';
// library.add(faChartLine);
import 'font-awesome/css/font-awesome.min.css';

class Landing extends Component {
	constructor(props){
		super(props);
		this.state={
			about_image:"https://res-staging.cloudinary.com/omg-helo/image/upload/v1556082332/trand_t1prbm.jpg",
			img_jumbo:"https://res-staging.cloudinary.com/omg-helo/video/upload/v1556094907/Money_qe1bcn.webm"
		}
	}
	render(){
		return(
			<div>
			<Jumbotron className="jumbo-edit">
				<div className="kotak_jumbo">
					<h1 className="m-900">Lorem ipsum dolor sit amet.</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rem eligendi dolorum nam reiciendis porro vitae consectetur laudantium adipisci quaerat.</p>
					<div className="text-center">
						<Button variant="danger" className="b_bergabung">Bergabung Bersama kami</Button>
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
				<section style={{
					height:"900px"	
				}}>

				</section>
			</section>
			</div>
			)
	}
}
export default Landing;