import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData);
        console.log(userData);
    };
    render() {
        const { errors } = this.state;
        return (
            <Container>
                <Row style={{ marginTop: "4rem" }} >
                    <Col sm={6} className="login_bg">
                        <div className="icon_add text-center"><i className="fa fa-user-plus"></i></div>
                        <div className="text-center" style={{ marginTop: "2rem" }} >
                            <Link to="/register" className="btn btn-danger">SIGN UP</Link>
                        </div>
                    </Col>
                    <Col sm={6} className="card" >
                        <Link to="/" className="btn btn-light">
                            <i class="fa fa-arrow-left"></i>  Back to home
                        </Link>
                        <Card style={{ backgroundColor: "#dae1e7", height: "100%" }}>
                            <div className="text-center user_login">
                                <i class="fa fa-user"></i>
                            </div>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" ><i className="fa fa-envelope-o"></i></span>
                                    </div>
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        id="email"
                                        type="email"
                                        className="form-control"
                                        placeholder="Username"
                                    />

                                </div>
                                <span className="red-text">
                                    {errors.email}
                                    {errors.emailnotfound}
                                </span>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-key"></i></span>
                                    </div>
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.password}
                                        id="password"
                                        type="password"
                                        className="form-control"
                                        placeholder="password"
                                    />
                                </div>
                                <span className="red-text">
                                    {errors.password}
                                    {errors.passwordincorrect}
                                </span>
                                <div className="text-center">
                                    <Button type="submit" variant="light">Login</Button>
                                </div>
                            </form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateTopProps = state => ({
    auth: state.auth,
    errors: state.errors
})
export default connect(
    mapStateTopProps,
    { loginUser }
)(Login);