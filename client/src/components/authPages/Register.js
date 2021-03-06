import React, { useState, useContext, useEffect, Fragment } from 'react';
import { Form, Button, Container, Row, Col, Badge, Alert } from 'react-bootstrap';

import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import SpinnerFile from '../layouts/SpinnerFile';

const Register = (props) => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    //const [staticLoading, setStaticLoading] = useState(false);

    const { name, email, password, password2 } = user;

    /**
     * Using Alert context for setting up the alert msg and type
     */

    const authContext = useContext(AuthContext);
    var { registerUser, error, isAuthenticated } = authContext;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onFormSubmit = e => {
        e.preventDefault();

        /**
         * Form validation with setting up the alert
         */

        if (password !== password2) {
            alert('Password does not match..');
            // error = 'Passwords are not same';
        }
        else if (password.length < 5) {
            alert('Password lenght must be alteast 5 characters');
            // error = 'Your password must be 5 characters long';
        }
        else {
            /**
             * Register method from authContext page
             */
            //setStaticLoading(true);
            registerUser({
                name, email, password
            })
            // console.log(staticLoading);
        }
    };

    useEffect(() => {

        if (isAuthenticated) {
            //setStaticLoading(false);
            // console.log(staticLoading)
            props.history.push('/');
        } else {
            //setStaticLoading(false);
        }

    }, [isAuthenticated, props.history]);

    return (

        <Fragment>



            < div >

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
                                <br />
                                {
                                    error ?
                                        <Alert variant="danger">
                                            {error}
                                        </Alert>
                                        : ''
                                }

                                <Form onSubmit={onFormSubmit}>
                                    <Form.Group controlId="formBasicName">
                                        <Form.Label >First Name</Form.Label>
                                        <Form.Control type="text" name='name' onChange={onChange} value={name} placeholder="Enter first name" required />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" name='email' onChange={onChange} value={email} placeholder="Enter email" required />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                </Form.Text>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name='password' onChange={onChange} value={password} placeholder="Password" required />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword2">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" name='password2' onChange={onChange} value={password2} placeholder="Re-enter your password" required />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" required label="I'm agreed to terms and conditions" />
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





        </Fragment>
    );
};

export default Register
