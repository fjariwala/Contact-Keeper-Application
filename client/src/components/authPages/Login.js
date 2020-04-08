import React, { useState, useContext, useEffect, Fragment } from 'react';
import { Form, Button, Container, Row, Col, Badge, Alert } from 'react-bootstrap';

import AuthContext from '../../context/auth/authContext';
import SpinnerFile from '../layouts/SpinnerFile';

const Login = (props) => {

    const [staticLoading, setStaticLoading] = useState(false);

    const authContext = useContext(AuthContext);
    const { loginUser, error, isAuthenticated, loading } = authContext;

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onFormSubmit = e => {
        e.preventDefault();

        if (password.length < 5) {
            alert('Your password should be 5 characters long..');
        }
        else {
            loginUser({
                email,
                password
            });

            //setStaticLoading(true);
        }


        //console.log(staticLoading);
    };

    useEffect(() => {
        if (isAuthenticated) {
            //setStaticLoading(false);
            props.history.push('/');
        }

    }, [isAuthenticated, props.history]);

    return (

       
               
                    // <Container fluid="md">
                    //     <Row className="mh-100" className="justify-content-md-center">
                    //         <Col md="auto"><SpinnerFile /></Col>
                    //     </Row>

                    // </Container>
                    
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
