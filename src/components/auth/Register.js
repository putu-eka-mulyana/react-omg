import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        }
    }
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    };
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        console.log(newUser);
        this.props.registerUser(newUser, this.props.history);
    }
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
                                            <h4 className="text-center">SIGN UP</h4>
                                        </Card.Header>
                                        <Card.Body>

                                            <form noValidate onSubmit={this.onSubmit}>
                                                <div className="form-group mb-3">
                                                    <label>Name</label>
                                                    <input
                                                        onChange={this.onChange}
                                                        value={this.state.name}
                                                        error={errors.name}
                                                        id="name"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Name"
                                                    />
                                                </div>
                                                <span className="red-text">{errors.name}</span>
                                                <div className="form-group mb-3">
                                                    <label>E-mail</label>
                                                    <input
                                                        onChange={this.onChange}
                                                        value={this.state.email}
                                                        error={errors.email}
                                                        id="email"
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="E-mail"
                                                    />
                                                </div>
                                                <span className="red-text">{errors.email}</span>
                                                <div className="form-group mb-3">
                                                    <label>Password</label>
                                                    <input
                                                        onChange={this.onChange}
                                                        value={this.state.password}
                                                        error={errors.password}
                                                        id="password"
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Password"
                                                    />
                                                </div>
                                                <span className="red-text">{errors.password}</span>
                                                <div className="form-group mb-3">
                                                    <label>Confirm Password</label>
                                                    <input
                                                        onChange={this.onChange}
                                                        value={this.state.password2}
                                                        error={errors.password2}
                                                        id="password2"
                                                        type="password"
                                                        placeholder="Confirm password"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <span className="red-text">{errors.password2}</span>
                                                <div className="text-center">
                                                    <Button type="submit" className="btn btn-success btn-lg btn-block">SIGN UP</Button>
                                                </div>
                                                <div className="py-3">already have an account? <Link to="/login">SIGN IN</Link></div>
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
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateTopProps = state => ({
    auth: state.auth,
    errors: state.errors
})
export default connect(
    mapStateTopProps,
    { registerUser }
)(withRouter(Register));