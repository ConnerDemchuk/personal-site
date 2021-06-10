import React, { useState } from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import ProfilePicture from "../../resources/ProfilePicture.jpg";
import BMBSunset from "../../resources/BMBSunset.jpeg";
import './Home.scss';

const Home = () => {
    return (
        <div className="baseline">
            <Container>
                <Row>
                    <Col>
                        <img src={ProfilePicture} alt="Conner's Profile Picture"></img>
                    </Col>
                    <Col>
                        <Card style={{ width: "100%", height: "100%" }}>
                            <Card.Body>
                                <Card.Title>About Me</Card.Title>
                                <Card.Text>
                                    <p>
                                        My name is Conner Demchuk and I'm a software engineer and consultant from Hopkins, MN.
                                        In 2019 I graduated from the Univeristy of Wisconsin - Eau Claire with a degree in Computer Science.
                                        After graduating I began working as a software engineer for Daugherty Business Solutions, which is where I am today.
                                        I currently work primarily on backend applications using Groovy/Java, Spring, and Cassandra DB.
                                    </p>
                                    <p>
                                        Outside of work, my hobbies include gaming with friends (online and in person), reading, playing music, and exploring new places.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ width: "100%", height: "100%" }}>
                            <Card.Body>
                                <Card.Title>My Time in the BMB</Card.Title>
                                <Card.Img src={BMBSunset} className="bmb-sunset"></Card.Img>
                                <Card.Text>
                                    <p>
                                        When I was in college, I was a member of the Blugold Marching Band (BMB) where I played the cymbals on the drumline. Through the band
                                        I had the opportunity to travel across the world on two separate trips.
                                        In 2016 I joined them on their tour around Spain and Italy. In 2018 I was a part of their trip to Singapore, Malaysia, and Thailand.
                                        Being a part of the band was a blast and I met some of my best friends through it. If you're interested in seeing some of our performances
                                        check out the videos below!
                                    </p>
                                </Card.Text>
                                <iframe width="30%" height="auto" src="https://www.youtube.com/embed/G2M37iBGOOg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe width="30%" height="auto" src="https://www.youtube.com/embed/a0seuyeYt0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe width="30%" height="auto" src="https://www.youtube.com/embed/dPgysNZqTU8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;