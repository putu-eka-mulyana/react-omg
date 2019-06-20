import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import axios from "axios";
import { Container,Row } from "react-bootstrap";
import Item from "./Item";

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    } 
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    componentDidMount(){
        const url="http://127.0.0.1:5000/api/store";
        axios.get(url)
            .then(res =>{
                const data=res.data.store
                this.setState({data})
                console.log(data)
            })     
    }
    render() {
        // const conttrollItems=this.state.data.map(item => 
        //     <BuildControl key={item.id} label={item.kategori} />);
        return (
            <div style={{backgroundColor:'#e1e4e8'}}>
            <Container>
                <div style={{paddingBottom: '20px'}}></div>
                <h1 className="card">Daftar Produk Yang Sedang Tren</h1>
                <Row>
                {
                    this.state.data.map(item=><Item key={item.id} name={item.name} persentease={item.persentease} img={item.img} price={item.price} kategori={item.kategori} link={item.link}/>)
                }
                </Row>
            </Container>
            </div>
        )
    }
}
Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);