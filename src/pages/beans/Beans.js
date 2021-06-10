import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Beans.scss';

const Beans = () => {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    return (
        <div className="baseline">
            <Container className="section">
                <Row className="center">
                    <h1>Let's talk about beans!</h1>
                </Row>
                <Row className="center">
                    <img src="https://blog.insidetracker.com/hubfs/healthy%20beans%20lentils%20legumes.jpg"></img>
                </Row>
                <Row className="center">
                    <p>
                        Beans are wonderful things. They can be a refreshing snack, the punchline to a funny joke, and even the components of a web application!
                        If you have any thoughts about beans, leave them in the comment box below!
                    </p>
                </Row>
            </Container>
            <Form className="spacing">
                <Form.Group>
                    <Form.Label>Thoughts and Feelings:</Form.Label>
                    <Form.Control type="text" placeholder="I think..." />
                </Form.Group>
                <Button type="submit" className="my-button">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Beans;