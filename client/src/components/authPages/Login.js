import React, { useState, useContext, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Badge, Alert } from 'react-bootstrap';

import AuthContext from '../../context/auth/authContext';

const Login = (props) => {

    const authContext = useContext(AuthContext);
    const { loginUser, error, isAuthenticated } = authContext;

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onFormSubmit = e => {
        e.preventDefault();

        loginUser({
            email,
            password
        });
    };

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
        }

    }, [isAuthenticated, props.history]);

    return (
        <div >
            <br />
            <Container className="container-fluid">
                <Row className="justify-content-md-center">

                    <div className="col-xs-6 col-md-5">
                        <Col md="auto">
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <h1>
                                        <Badge variant="secondary" >Login</Badge>
                                    </h1>
                                </Col>
                            </Row>
                            <br />
                            {
                                error ?
                                    <Alert variant="danger">
                                        {error}
                                    </Alert>
                                    : ''
                            }
                            <Form onSubmit={onFormSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name='email' required onChange={onChange} value={email} placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name='password' required onChange={onChange} value={password} placeholder="Password" />
                                </Form.Group>

                                <Button variant="outline-primary" type="submit" size="lg" block>
                                    Submit
                            </Button>
                            </Form>
                        </Col>
                    </div>

                </Row>
            </Container>
        </div >
    );
}

export default Login
