import React, { Component } from 'react';
import profile from "./resources/profile.jpg";
import { Container, Col, Row, Button, Carousel } from "react-bootstrap";

class Profile extends Component {
    render(){
        return(
            <Container fluid style={{backgroundColor: "#e4d4bf", width: "100%", height: "100%"}}>
                <Row style={{borderBottom: "solid 1px black", width: "50%", margin: "auto", display: "flex", alignItems: "center", flexDirection: "column"}}>
                    <h1 style={{color: "#9b363b", marginTop: "20px", fontSize: "50px", fontFamily: "Dosis"}}>Profile</h1>
                    <h3 style={{fontSize: "35px", fontFamily: "Dosis"}}>Full Stack Developer</h3>
                </Row>
                <Row style={{ paddingTop: "50px", width: "90%", margin: "auto"}}>
                    <Col style={{ fontFamily: "Dosis", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column" }}>
                        <h3 style={{ color: "#9b363b", fontFamily: "Dosis", fontSize: "35px" }}>Details</h3>
                        <ul style={{ padding: "0", listStyle: "none", width: "100%", display: "flex", alignItems: "center", flexDirection: "column" }}>
                            <li><b>School -</b> University of Western Ontario</li>
                            <li><b>Studying -</b> Software Engineering</li>
                            <li><b>Graduating -</b> May 2022</li>
                            <li><b>Current Role -</b> Velocity Program, Scotiabank</li>
                            <li><b>Location -</b> Toronto, Ontario</li>
                        </ul>
                        <h3 style={{ color: "#9b363b", fontFamily: "Dosis", fontSize: "35px" }}>Contact</h3>
                        <ul style={{ padding: "0", listStyle: "none", width: "100%", display: "flex", alignItems: "center", flexDirection: "column" }}>
                            <li><b>Email -</b> mathieu.m.girard@gmail.com</li>
                            <li><b>Phone -</b> 289-681-0310</li>
                            <li><b>LinkedIn -</b> mathieugirard1997</li>
                            <li><b>GitHub -</b> MathieuGirard19</li>
                        </ul>
                    </Col>
                    <Col style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img
                            style={{ borderRadius: "100%", width: "90%", height: "auto" }}
                            src={profile}
                            alt="Profile Picture"
                        />
                    </Col>
                    <Col style={{ fontFamily: "Dosis", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column" }}>
                        <h3 style={{ color: "#9b363b", fontFamily: "Dosis", fontSize: "35px" }}>About Me</h3>
                        <p>
                            My full name is Mathieu Masaru Girard and I'm a prospective Software Engineer from the University of 
                            Western Ontario. My passion lies in learning, developing and utilizing technology to drive business solutions.
                            <br/><br/>
                            I would describe myself as a quick learner, always looking to be challenged. 
                            I beleive in learning from experience and growing a little more each day in my journey as a Software Engineer.
                            <br/><br/>
                            My Goal: Always be an asset to my team
                        </p>
                    </Col>
                </Row>
                <Row style={{display: "flex", justifyContent: "center", width: "75%", margin: "auto", paddingTop: "50px"}}>
                    <h3 style={{fontFamily: "Dosis", fontSize: "28px"}}><b style={{color: "#9b363b"}}>Languages: </b>JavaScript • Python • Swift • Java • C++</h3>
                    <h3 style={{fontFamily: "Dosis", fontSize: "28px"}}><b style={{color: "#9b363b"}}>Technologies: </b>React • NodeJS • SQL • Express • MongoDB • PostGres • Cucmber • Citrus</h3>
                </Row>
            </Container>
        )
    }
}

export default Profile;