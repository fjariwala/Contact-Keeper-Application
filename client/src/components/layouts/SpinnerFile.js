import React from 'react';
import { Spinner, Container } from "react-bootstrap";


export default () => {
    return (
        <Container fluid="md" >

            {/* <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
                </Spinner> */}
            {/* <Spinner animation="border" variant="primary" /> */}
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />

        </Container>
    )
}

