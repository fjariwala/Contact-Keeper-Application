import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Badge } from 'react-bootstrap';

const Register = (props) => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onFormSubmit = e => {
        e.preventDefault();

        console.log(user);
    };

    return (
        <div >
            <Container className="container-fluid">
                <Row className="justify-content-md-center">

                    <div className="col-xs-6 col-md-5">
                        <Col md="auto">
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <h1>
                                        <Badge variant="secondary" >Registration</Badge>
                                    </h1>
                                </Col> 
                            </Row>

                            <Form>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label >First Name</Form.Label>
                                    <Form.Control type="text" name='name' onChange={onChange} value={name} placeholder="Enter first name" />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name='email' onChange={onChange} value={email} placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name='password' onChange={onChange} value={password} placeholder="Password" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword2">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" name='password2' onChange={onChange} value={password2} placeholder="Re-enter your password" />
                                </Form.Group>

                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="I'm agreed to terms and conditions" />
                                </Form.Group>

                                <Button variant="outline-primary" onClick={onFormSubmit} type="submit" size="lg" block>
                                    Submit
                            </Button>
                            </Form>
                        </Col>
                    </div>

                </Row>
            </Container>
        </div >
    );
};

export default Register
