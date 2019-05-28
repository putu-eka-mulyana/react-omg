import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
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
            <div className="bg-login">
            <Container className="py-5">
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <Row>
                            <Col lg={5} md={7} sm={7} className="mx-auto">
                                <Card rounded-1 className="card-auth">
                                    <Card.Header>
                                        <h4 className="text-center">LOGIN</h4>
                                    </Card.Header>
                                    <Card.Body>
                                    <form noValidate onSubmit={this.onSubmit}>
                                        <div className="form-group mb-3">
                                            <label>E-mail</label>
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.email}
                                                id="email"
                                                type="email"
                                                className="form-control"
                                                placeholder="E-mail"
                                            />
                                        </div>
                                        <span className="red-text">
                                            {errors.email}
                                            {errors.emailnotfound}
                                        </span>
                                        <div className="form-group mb-3">
                                            <label>password</label>
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
                                            <Button type="submit" className="btn btn-success btn-lg btn-block">Login</Button>
                                        </div>
                                        <div className="py-3">Dont have an account ?  <Link to="/register">SIGN UP</Link></div>
                                    </form>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            </div>
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