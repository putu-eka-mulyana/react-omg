import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import axios from "axios";
import { Container,Row,Form,Col } from "react-bootstrap";
import FilterResults from 'react-filter-search';
import Item from "./Item";

const root_server = 'http://34.67.178.45:5000'

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            dataKategory:[],
            filter:''
        }
    } 
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    componentDidMount(){
        const url=`${root_server}/api/store`;
        axios.get(url)
            .then(res =>{
                const data=res.data.store
                data.sort((a,b)=>b.persentease - a.persentease)
                this.setState({data})
                data.map(item => this.setState({dataKategory: [...this.state.dataKategory,item.kategori]}))
            });
    }
    onChange=(e)=>{
        this.setState({filter:e.target.value})
    }
    render() {
        const dataFilter = Array.from(new Set(this.state.dataKategory));
        return (
            <div style={{backgroundColor:'#e1e4e8'}}>
            <Container>
                <div style={{paddingBottom: '20px'}}></div>
                <h1 className="card">Daftar Produk Yang Sedang Tren</h1>
                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Filter Data</Form.Label>
                <Form.Control as="select" onChange={this.onChange}>
                    <option value="">Pilih Semua</option>
                    {dataFilter.map((item,i)=> <option key={i} value={item}>{item}</option> )}>
                </Form.Control>
                </Form.Group>
                <Row>
                <FilterResults
                 value={this.state.filter}
                 data={this.state.data}
                 renderResults={results=>(
                    results.map(item=><Item key={item.id} name={item.name} persentease={item.persentease} img={item.img} price={item.price} kategori={item.kategori} link={item.link}/>)
                 )}
                 />
                
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
