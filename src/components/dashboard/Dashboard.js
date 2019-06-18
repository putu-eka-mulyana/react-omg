import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Card, Button } from "react-bootstrap";

class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { user } = this.props.auth;
        return (
            <div style={{ height: "75vh" }} className="container valign-wrepper">
                <div className="row">
                    <div className="col s12 center-align">
                        
                        <Card style={{ width: '18rem' }}>
                        <Card.Header>Sepatu</Card.Header>
                            <Card.Body >
                                <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                                <Button variant="light">Lihat tran</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
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