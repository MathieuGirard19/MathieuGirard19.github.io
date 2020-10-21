import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import { Col, Row, Container } from "react-bootstrap";
import western from './resources/western.jpg';
import engineering from './resources/engineering.jpeg';
import softwareEng1 from './resources/softwareEng1.jpeg';
import softwareEng2 from './resources/softwareEng2.jpg';
import kaushikRef from './resources/kaushikRef.png';
import anshulRef from './resources/anshulRef.png';
import aakashRef from './resources/aakashRef.png';

const MySlider = withStyles({
    root: {
        color: "#9b363b",
    },
    thumb: {
        textAlign: "center"
    },
    active: {},
    valueLabel: {
        '& *': {
            background: "transparent",
            color: "black"
        }
    },
    track: {
        height: 2,
    },
    mark: {
        backgroundColor: '#9b363b',
        height: 10,
        width: 2,
        marginTop: -4,
        opacity: 0.5
    },
    markActive: {
        opacity: 1,
        backgroundColor: '#9b363b',
    },
})(Slider);

const university = (
    <Row style={{ width: "70%", height: "500px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Row style={{ width: "100%", height: "120px", borderRadius: "20px", backgroundColor: "red", overflow: "hidden" }}>
            <Col xs={3} style={{ backgroundColor: "#582c82", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <h2 style={{ color: "white", fontFamily: "Dosis", fontSize: "30px" }}>First Year</h2>
                <h3 style={{ color: "white", fontFamily: "Dosis", fontSize: "20px" }}>Medical Sciences</h3>
                <h3 style={{ color: "white", fontFamily: "Dosis", fontSize: "20px" }}>Average: 88.9</h3>
            </Col>
            <Col xs={3} style={{ backgroundColor: "black", padding: "0", width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
                <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src={western}
                />
            </Col>
            <Col xs={6} style={{ backgroundColor: "whitesmoke", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <p style={{ fontFamily: "Dosis", fontSize: "11px", margin: "0px" }}>
                    Initially I received admission and went to Western for the Medical Science program as I wanted
                    to pursue medical school. I found the content quite interesting but it soon dawned on me that
                    this program gears you up for one of two things medical school or research. I knew that I didn't want
                    to pursue reasearch and I also made the realization that you can apply to medical school from any undergraduate
                    program. So I decided to pursue a more technical degree as I could utilize it right after undergrad and I could
                    still leave my ability to apply to medical school open.
                </p>
            </Col>
        </Row>
        <Row style={{ width: "100%", height: "120px", borderRadius: "20px", backgroundColor: "red", overflow: "hidden" }}>
            <Col xs={3} style={{ backgroundColor: "#582c82", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <h2 style={{ color: "white", fontFamily: "Dosis", fontSize: "30px" }}>First Year</h2>
                <h3 style={{ color: "white", fontFamily: "Dosis", fontSize: "20px" }}>Engineering</h3>
                <h3 style={{ color: "white", fontFamily: "Dosis", fontSize: "20px" }}>Average: 86.4</h3>
            </Col>
            <Col xs={3} style={{ backgroundColor: "black", padding: "0", width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
                <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src={engineering}
                />
            </Col>
            <Col xs={6} style={{ backgroundColor: "whitesmoke", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <p style={{ fontFamily: "Dosis", fontSize: "11px", margin: "0px" }}>
                    After successullfy transferring from Medical Sceince I started my first year of general
                    engineering, as you choose your stream in second year. In this general year, engineering students
                    must take a whole spectrum of courses in differrent engineering disciplines with the purpose being
                    to narrow down which stream you want to puruse for the next year. One of the courses I took was
                    a programming course in C++ which I ended up really enjoying and excelling in. Both the professor
                    and the content itself got me inspired to pusure Software Engineering.
                </p>
            </Col>
        </Row>
        <Row style={{ width: "100%", height: "120px", borderRadius: "20px", backgroundColor: "red", overflow: "hidden" }}>
            <Col xs={3} style={{ backgroundColor: "#582c82", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <h2 style={{ color: "white", fontFamily: "Dosis", fontSize: "30px" }}>Second Year</h2>
                <h3 style={{ color: "white", fontFamily: "Dosis", fontSize: "20px" }}>Software Engineering</h3>
                <h3 style={{ color: "white", fontFamily: "Dosis", fontSize: "20px" }}>Average: 78.9</h3>
            </Col>
            <Col xs={3} style={{ backgroundColor: "black", padding: "0", width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
                <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src={softwareEng1}
                />
            </Col>
            <Col xs={6} style={{ backgroundColor: "whitesmoke", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <p style={{ fontFamily: "Dosis", fontSize: "11px", margin: "0px" }}>
                    My first year of Software Engineering had its ups and downs as it was notorious for being quite hard and
                    very theoretical. Rather than having primarily coding courses we had a lot of math and electircal
                    courses such as Discrete Math, Statistics, Applied Math, Digital Logic Systems, etc. At first I was
                    was a little disheartened by the content but I eventually found myself enjoying the content and seeing
                    its value for my growth as a Software Engineer.
                </p>
            </Col>
        </Row>
        <Row style={{ width: "100%", height: "120px", borderRadius: "20px", backgroundColor: "red", overflow: "hidden" }}>
            <Col xs={3} style={{ backgroundColor: "#582c82", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <h2 style={{ color: "white", fontFamily: "Dosis", fontSize: "30px" }}>Third Year</h2>
                <h3 style={{ color: "white", fontFamily: "Dosis", fontSize: "20px" }}>Software Engineering</h3>
                <h3 style={{ color: "white", fontFamily: "Dosis", fontSize: "20px" }}>Average: 80.0</h3>
            </Col>
            <Col xs={3} style={{ backgroundColor: "black", padding: "0", width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
                <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src={softwareEng2}
                />
            </Col>
            <Col xs={6} style={{ backgroundColor: "whitesmoke", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <p style={{ fontFamily: "Dosis", fontSize: "11px", margin: "0px" }}>
                    My most recent year of software engineering has probably been my favorite so far, as we primarily
                    focused on building our technical skills. I especially enjoyed my web technology course where we worked
                    with HTML, CSS, JS, and Angular; my database management systems course where we learned how to design
                    relational databases using MySql and create queries with SQL; and lastly my microprocessors course where
                    we learned the internal structure of microprocessors and how to utilize their power by programming/interfacing
                    them with basic input and output peripherals.
                </p>
            </Col>
        </Row>
    </Row>
)

const dataEngineer = (
    <Row style={{ width: "70%", height: "500px", margin: "0", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Row style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "240px", margin: "0", borderRadius: "20px", backgroundColor: "whitesmoke", overflow: "hidden" }}>
            <h1 style={{fontSize: "40px", color: "#9b363b"}}>Scotiabank</h1>
            <h2 style={{fontSize: "25px"}}>Commercial Banking</h2>
            <h3 style={{fontSize: "18px"}}>May 2019 - Sept 2019</h3>
            <p style={{ width: "90%", fontFamily: "Dosis", fontSize: "14px", margin: "0px" }}>
                Worked in Commercial Banking as part of the Data Analytics team in a variety of data engineering projects. 
                These projects included a referral system for Small Business advisors that gave monetary credit upon 
                successful referral, an annual review process for the business banking team that assessed the financial                     health of current loans, and a progress tracker that compared relationship managers against their call 
                targets.
            </p>
        </Row>
        <Row style={{ width: "100%", height: "120px", borderRadius: "20px", margin: "0", backgroundColor: "whitesmoke", overflow: "hidden" }}>
            <Col xs={4} style={{ backgroundColor: "black", padding: "0", width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
                <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src={kaushikRef}
                />
            </Col>
            <Col xs={8} style={{ backgroundColor: "whitesmoke", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <p style={{ fontFamily: "Dosis", fontSize: "14px", margin: "0px" }}>
                    Mathieu is an intelligent,driven and curious professional with a very strong work ethic. 
                    In his short stint with Commercial Banking, he single handedly developed a complex client 
                    referral process within the bank. His pleasant personality, combined with his friendly and 
                    honest approach makes him a pleasure to work with and an asset to any team. 
                </p>
            </Col>
        </Row>
        <Row style={{ width: "100%", height: "120px", margin: "0", borderRadius: "20px", backgroundColor: "whitesmoke", overflow: "hidden" }}>
            <Col xs={4} style={{ backgroundColor: "black", padding: "0", width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
                <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src={anshulRef}
                />
            </Col>
            <Col xs={8} style={{ backgroundColor: "whitesmoke", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <p style={{ fontFamily: "Dosis", fontSize: "14px", margin: "0px" }}>
                    Mathieu joined our analytics team for a summer internship. He did a wonderful job taking on a challenging 
                    task and provided a solution that was implemented for our business. I was impressed with Mathieu’s ability 
                    to learn new tools in quick order, aptitude to understand the business problem as well as willingness to 
                    push himself to actively participate in other development opportunities the Bank provided to the Employees. 
                    Keep up the good work!
                </p>
            </Col>
        </Row>
    </Row>
)

const programmerAnalyst = (
    <Row style={{ width: "70%", height: "500px", margin: "0", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Row style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "240px", margin: "0", borderRadius: "20px", backgroundColor: "whitesmoke", overflow: "hidden" }}>
            <h1 style={{fontSize: "40px", color: "#9b363b"}}>Scotiabank</h1>
            <h2 style={{fontSize: "25px"}}>Global Wholesale Risk Technology</h2>
            <h3 style={{fontSize: "18px"}}>May 2020 - Sept 2020</h3>
            <p style={{ width: "90%", fontFamily: "Dosis", fontSize: "14px", margin: "0px" }}>
                My first rotation as part of Scotiabank's Velocity program, I worked as part of the Global Wholesale Risk 
                Technology team. This team primarily focused on delivering applications that meditated risk for those working 
                in Capital markets. My first project was to independently develop an Exception Management dashboard using the 
                MERN stack. While my second project was a POC that I developed with my fellow velocity students to replace an 
                existing legacy system for the "add pre-clear request" process.
            </p>
        </Row>
        <Row style={{ width: "100%", height: "120px", borderRadius: "20px", margin: "0", backgroundColor: "whitesmoke", overflow: "hidden" }}>
            <Col xs={4} style={{ backgroundColor: "black", padding: "0", width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
                <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src={aakashRef}
                />
            </Col>
            <Col xs={8} style={{ backgroundColor: "whitesmoke", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <p style={{ fontFamily: "Dosis", fontSize: "14px", margin: "0px" }}>
                    Mathieu is a driven, hard-working and goal oriented individual. He worked on multiple projects during his 
                    internship with our group and demonstrated the ability to quickly learn new technologies and build useful 
                    features for our users. He has good people and leadership skills which would be beneficial for any organization he works for.
                </p>
            </Col>
        </Row>
        <Row style={{ width: "100%", height: "120px", borderRadius: "20px", margin: "0", backgroundColor: "#e4d4bf", overflow: "hidden" }}>
            <Col xs={4} style={{ padding: "0", width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
            </Col>
            <Col xs={8} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            </Col>
        </Row>
    </Row>
)

const itAnalyst = (
    <Row style={{ width: "70%", height: "500px", margin: "0", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Row style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "240px", margin: "0", borderRadius: "20px", backgroundColor: "whitesmoke", overflow: "hidden" }}>
            <h1 style={{fontSize: "40px", color: "#9b363b"}}>In Progress</h1>
        </Row>
        <Row style={{ width: "100%", height: "120px", borderRadius: "20px", margin: "0", backgroundColor: "#e4d4bf", overflow: "hidden" }}>
            <Col xs={4} style={{ padding: "0", width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
            </Col>
            <Col xs={8} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            </Col>
        </Row>
        <Row style={{ width: "100%", height: "120px", borderRadius: "20px", margin: "0", backgroundColor: "#e4d4bf", overflow: "hidden" }}>
            <Col xs={4} style={{ padding: "0", width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
            </Col>
            <Col xs={8} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            </Col>
        </Row>
    </Row>
)

class Experience extends Component {
    constructor(props) {
        super(props);
        this.getTag = this.getTag.bind(this);
        this.sliderChange = this.sliderChange.bind(this);
        this.tileEnter = this.tileEnter.bind(this);
        this.tileExit = this.tileExit.bind(this);
        this.state = {
            value: 0,
            previous: 0,
            activeMark: 0,
            marks: [
                {
                    value: 0,
                    label: 'University of Western Ontario',
                    date: "Sept 2016"
                },
                {
                    value: 1,
                    label: 'Data Engineer',
                    date: "May 2019"
                },
                {
                    value: 2,
                    label: 'Programmer Analyst',
                    date: "May 2020"
                },
                {
                    value: 3,
                    label: "IT Analyst",
                    date: "Sept 2020"
                }
            ]
        }
    }

    getTag(value) {
        return this.state.marks[value].date
    }

    sliderChange(e, value) {
        this.setState({ activeMark: value });
    }

    tileEnter(e) {
        e.target.style.backgroundColor = "black";
        e.target.style.opacity = "0.75"
        e.target.style.color = "white";
    }

    tileExit(e) {
        e.target.style.backgroundColor = "transparent";
        e.target.style.opacity = "0"
    }

    render() {
        let activeTitle;
        let activeContent;
        switch (this.state.activeMark) {
            case 0:
                activeTitle = "University of Western Ontario";
                activeContent = university;
                break;
            case 1:
                activeTitle = "Data Engineering";
                activeContent = dataEngineer;
                break;
            case 2:
                activeTitle = "Programmer Analyst";
                activeContent = programmerAnalyst;
                break;
            case 3:
                activeTitle = "IT Analyst";
                activeContent = itAnalyst;
                break;
            default:
                break;
        }

        return (
            <Container fluid style={{ backgroundColor: "#e4d4bf", width: "100%", height: "100%" }}>
                <Row style={{ width: "100%", margin: "auto", display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <h1 style={{ color: "#9b363b", marginTop: "20px", fontSize: "50px", fontFamily: "Dosis" }}>Experience</h1>
                    <h3 style={{ fontSize: "35px", fontFamily: "Dosis" }}>{activeTitle}</h3>
                    <MySlider
                        style={{ width: "70%", margin: "40px 0 0 0" }}
                        getAriaValueText={this.valuetext}
                        aria-labelledby="discrete-slider"
                        defaultValue={0}
                        step={1}
                        min={0}
                        max={3}
                        marks={this.state.marks}
                        valueLabelDisplay="on"
                        getAriaValueText={this.getTag}
                        valueLabelFormat={this.getTag}
                        onChange={this.sliderChange}
                    />
                </Row>
                <Row style={{width: "100%", display: "flex", justifyContent: "center", margin: "50px 0 0 0"}}>
                    {activeContent}
                </Row>
            </Container>
        );
    }
}

export default Experience;