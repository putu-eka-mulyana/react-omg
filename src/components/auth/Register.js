import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import classnames from "classnames";
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
            <Container>
                <Row style={{ marginTop: "4rem" }}>
                    <Col md={6} className="card" >
                        <Link to="/" className="btn btn-light">
                            <i class="fa fa-arrow-left"></i> Back to home
                        </Link>
                        <Card style={{ backgroundColor: "#dae1e7", height: "100%" }}>
                        <div className="text-center user_login">
                                <i class="fa fa-user-plus"></i>
                            </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" ><i class="fa fa-user-o"></i></span>
                                </div>
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
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-envelope-o"></i></span>
                                </div>
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
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-key"></i></span>
                                </div>
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
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-key"></i></span>
                                </div>
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
                                <Button type="submit" variant="light">Login</Button>
                            </div>
                        </form>
                        </Card>
                    </Col>
                    <Col sm={6} className="login_bg">
                        <div className="icon_add text-center"><i class="fa fa-user-circle-o"></i></div>
                        <div className="text-center" style={{ marginTop: "2rem" }} >
                            <Link to="/login" className="btn btn-danger">SIGN IN</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
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