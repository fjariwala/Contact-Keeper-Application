import React, { Fragment } from 'react'
import { Media, Alert } from 'react-bootstrap';

const About = () => {
    return (
        <Fragment>
            <Media>

                <Media.Body>

                </Media.Body><br />


            </Media>
            <Alert variant="primary">
                <Alert.Heading><h5>Contact Keeper</h5></Alert.Heading>

                <p>
                    Here we simply keep your contacts online.
                    You can add many contacts to the site and it is fully secured.
                </p>
                <hr />
                <p className="mb-0">
                    <h5>About Developer</h5>
                    <p>
                        Fenil Jariwala
                    </p>
                </p>


            </Alert>
        </Fragment>
    )
}

export default About;