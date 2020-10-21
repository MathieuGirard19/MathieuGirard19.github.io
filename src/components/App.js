import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Col, Row, Button, Carousel } from "react-bootstrap";
import Experience from "./Experience";
import Landing from "./Landing";
import Profile from "./Profile";
import NavBar from "./NavBar";
import Projects from "./Projects";

export class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Container fluid style={{ minWidth: "1200px", width: "100%", height: "100%", padding: "0" }}>
                    <Row style={{ width: "100%", height: "100%", margin: "0" }}>
                        <Col xs={11} style={{ margin: "0", padding: "0" }}>
                            <Switch>
                                <Route exact path="/">
                                    <Landing />
                                </Route>
                                <Route path="/profile">
                                    <Profile />
                                </Route>
                                <Route path="/experience">
                                    <Experience />
                                </Route>
                                <Route exact path="/projects">
                                    <Projects />
                                </Route>
                            </Switch>
                        </Col >
                        <Col xs={1} style={{ margin: "0", padding: "0" }}>
                            <NavBar />
                        </Col>
                    </Row>
                </Container>
            </Router>
        )
    }
}

export const pageTransition = {
    in: {
        opacity: 1,
        y: 0
    },
    out: {
        opacity: 0,
        y: '-100%'
    }
}