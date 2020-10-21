import React, { Component } from 'react';
import { Col, Row, Container, Tab, Nav } from "react-bootstrap";

const schoolProjects = [
    {
        name: "SkipTheFastFood", tech: "Kotlin • Python", github: "https://github.com/jhwan7/SkipTheFast",
        description: "The final project of our Mobile App Development class required us to develop an app \
        that would help people curb a bad habit. In our case we focued on reducing the amount of fast food an individual consumes. \
        The app is meant to act as a journal for users to enter the fast food they ate throughout the week. The app would then provide \
        daily and weekly analytics based on the fast food entries made by the user. The user would then use these \
        analytics to track their progress and eventually break this bad habit "},
    {
        name: "Chat Room", tech: "C++", github: "https://github.com/MathieuGirard19/ChatRoom",
        description: "The final project of our Operating Systems class required us to develop a multi-user, multi-transaction server (Chat room). \
        This project was meant to demonstrate our understanding and usage of threads, thread synchronization, semaphores, \
        and parallel processing. The Chat Room was created to handle multiple simultaneous users who could send messages and pictures \
        to each other at any point in time"},
    {
        name: "Tattoo Hub", tech: "MySQL • SQL • Angular • TypeScript • NodeJS • Express", github: "https://github.com/jhwan7/TattooHub",
        description: "The final project of our Database Management Systems class required us to develop a website that focused on \
        pulling and displaying information from a relational database that we designed. We decied to create a website called \
        Tattoo Hub, that would allow users to look at different tattoo artist's portfolios and book appointments with them if \
        they liked their work. The realtional database was created in MySQL and was queried by our Express server using SQL. \
        This data was then displayed on our website using Angular"},
    {
        name: "Music Store", tech: "Angular • Typescript • NodeJS • Express • MongoDB", github: "https://github.com/MathieuGirard19/se3316-mgirar3-lab5",
        description: "The final project of our Web Technologies class required us to develop a full stack website that acted as \
        an online music store. This website would provide user functionalities such as creating account, logging in/out, adding/removing \
        items from cart, and purchasing items. The website would also provide admin functionalities such as adding/removing items \
        on the store, managing inventory, and managing accounts." },
    {
        name: "Space Shoot'em Up", tech: "Unity • C#", github: "https://github.com/jhwan7/3-D-Space-Shooting-Game-SHUMP",
        description: "The final project of our game design class required us to develop a shooting game in Unity. This game \
        was modeled after the classic Space Invaders game where a ship navigates through space destroying enemies. The game we \
        developed included dynamically created enemies, different enemy types, multiple power ups, player sheilds, and several \
        game difficulties to choose from."},
]

const personalProjects = [
    {
        name: "mathieugirard.site", tech: "React • JavaScript • HTML • CSS", 
        description: "The current site you are viewing and the third addition of my portfolio website! I felt that my previous website \
        was beginning to get outdated and I wanted to launch a website using React, a technology I was becoming more familiar with. \
        I built this website to further my experience with React and because I wanted a website that accurately reflected my current projects \
        and experience. I wanted to bring as much interactivity to this website as possible while also properly conveying the information \
        in an effective way. So here it is, I hope you enjoy!"},
    {
        name: "Sketchpad", tech: "Java", 
        description: "The main purpose of this project was to explore human computer interactions, and a Sketchpad is a good \
        project to test that on. A Sketchpad, such as Microsoft Paint, has many different forms of interaction as there \
        are many different tools at your disposal (free draw, line object, square object). Each tool uses a different form of \
        interaction, example: to draw free hand you drag, and to draw a line object you click two different points. This \
        project implements many of the features you would expect to find in a Sketchpad like application"},
    {
        name: "Map Game", tech: "JQuery • HTML • CSS", 
        description: "During the time I made this game I was challenging myself to learn all 50 states of the US and their locations \
        on a map. The game starts by displaying a blank US map and the text for the current state you are challenged to find. \
        The user must select the state on the map and if correct they get one point and the state fills in as green. \
        If the user does not select the right state, the state fills in as red and no points are awarded. The user \
        is then challenged to find another state until all states have been guessed, at which point your scored is displayed out of 50."
    },
    {
        name: "Minesweeper", tech: "Java • Java Swing", 
        description: "A replica of the classic game Minesweeper, I decided to do this project to get more experience with the Java \
        Swing library and to challenge myself in handling the logic that allows the game to function. I also wanted to practice \
        better code structure and object oriented design of the different parts of the game. Other than that there's not much to \
        explain, the game functions as Minesweeper would."
    },
    {
        name: "ITravel", tech: "Java • Java FX", 
        description: "This application was meant to simulate apps currently provided by Airline companies to their customers. \
        Customers would use this app to book, cancel, track and manage their flights. Additionally some of these apps have a built \
        in reward system, which was also built into this application."
    }
]

const workProjects = [
    {
        name: "Exception Management Dashboard", tech: "React • NodeJS • Express • Mongoose • Postgres • KDB+", 
        description: "A Proof of Concept developed for the Global Wholesale Risk Technology team, this full stack web application \
        was meant to act as a web portal for business analysts to perform exception handling. The actual users of this application, \
        the business analysts, worked in Capital Markets and needed to get approval from a regulatory body to perform certain stock purchases. \
        This approval of purchase is called exception handling and the application I built was meant to provide the functionality \
        needed for business analysts to request approval and a regulatory body to approve said request."
    },
    {
        name: "SAG POC", tech: "React • NodeJS • Express • Dremio", 
        description: "For this project I worked with other co-op students that were part of the Global Wholesale Risk \
        Technology team. This project was meant to replace an existing application that had become pertty outdated and was also \
        meant to act as a proof of concept for a new technology that the team was trying to adopt, Dremio "},
    {
        name: "Small Business Advisor Referal System", tech: "Python • Sas • Excel", 
        description: "This project was used to reward small businnes advisors when they referred a customer to a Business Banking Specialist. \
        If this Specialist is able to sell additional products to this customer, then the small business advisor is rewarded."},
    {
        name: "Call Targets Progress Tracker", tech: "Python • Sas • Excel", 
        description: "This project mainly consisted of a python script that would crosscheck the amount of actual calls advisors were making  \
        versus their targets for that month. Along with additional business logic, this project allowed directors to keep track \
        of their advisors and allowed for the determination of bonuses based on whether or not they were hitting their targets."}
]

class Projects extends Component {
    constructor(props) {
        super(props);
        this.changeField = this.changeField.bind(this);
        this.projectEnter = this.projectEnter.bind(this);
        this.projectExit = this.projectExit.bind(this);
        this.state = {
            activeProject: schoolProjects
        }
    }

    projectEnter(e){
        e.currentTarget.style.backgroundColor = "#b3a798";
    }

    projectExit(e){
        e.currentTarget.style.backgroundColor = "transparent"
    }

    changeField(e){
        e.target.style.backgroundColor = "#9b363b";
        e.target.style.color = "white";
        switch(e.target.id){
            case "school":
                document.getElementById("personal").style.backgroundColor = "transparent";
                document.getElementById("personal").style.color = "#9b363b";
                document.getElementById("work").style.backgroundColor = "transparent";
                document.getElementById("work").style.color = "#9b363b";
                this.setState({activeProject: schoolProjects});
                break;
            case "personal":
                document.getElementById("school").style.backgroundColor = "transparent";
                document.getElementById("school").style.color = "#9b363b";
                document.getElementById("work").style.backgroundColor = "transparent";
                document.getElementById("work").style.color = "#9b363b";
                this.setState({activeProject: personalProjects});
                break;
            case "work":
                document.getElementById("school").style.backgroundColor = "transparent";
                document.getElementById("school").style.color = "#9b363b";
                document.getElementById("personal").style.backgroundColor = "transparent";
                document.getElementById("personal").style.color = "#9b363b";
                this.setState({activeProject: workProjects});
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <Container fluid style={{ backgroundColor: "#e4d4bf", width: "100%", height: "100%" }}>
                <Row style={{ borderBottom: "solid 1px black", width: "50%", margin: "auto", display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <h1 style={{ color: "#9b363b", marginTop: "20px", fontSize: "50px", fontFamily: "Dosis" }}>Projects</h1>
                    <h3 style={{ fontSize: "35px", fontFamily: "Dosis" }}>Full Stack Developer</h3>
                </Row>
                <Row style={{ width: "90%", height: "550px", margin: "50px auto 0 auto" }}>
                    <Col xs={2} style={{margin: "0", padding: "0", display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <div onClick={this.changeField} id="school" style={{cursor: "pointer", width: "90%", textAlign: "center", backgroundColor: "#9b363b", color: "white", fontFamily: "Dosis", fontSize: "25px", borderRadius: "10px" }}>School</div>
                        <div onClick={this.changeField} id="personal" style={{cursor: "pointer", width: "90%", marginTop: "10px", textAlign: "center", color: "#9b363b", fontFamily: "Dosis", fontSize: "25px", borderRadius: "10px" }}>Personal</div>
                        <div onClick={this.changeField} id="work" style={{cursor: "pointer", width: "90%", marginTop: "10px", textAlign: "center", color: "#9b363b", fontFamily: "Dosis", fontSize: "25px", borderRadius: "10px" }}>Work</div>
                    </Col>
                    <Col xs={10} style={{ margin: "0", padding: "0", border: "solid 5px grey" , borderRadius: "10px", overflow: "scroll"}}>
                        {this.state.activeProject.map(project => {
                            return(
                                <a style={{width: "100%", height: "25%", margin: "0", textDecoration: "none", display: "block"}} target="_blank" href={project.github}>
                                    <Row onMouseEnter={this.projectEnter} onMouseLeave={this.projectExit} style={{width: "100%", height: "100%", margin: "0", color: "black"}}>
                                            <Col xs={4} style={{textAlign: "center", padding: "0", margin: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                                                <div style={{width: "80%"}}>
                                                    <h3 style={{fontWeight: "bold", fontSize: "25px", fontFamily: "dosis", color: "#9b363b"}}>{project.name}</h3>
                                                    <h4 style={{fontSize: "20px", fontFamily: "dosis"}}>{project.tech}</h4>
                                                </div>
                                            </Col>
                                            <Col xs={8} style={{ padding: "0", margin: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                                                <div style={{width: "90%"}}>
                                                    <p style={{fontSize: "14px", fontFamily: "dosis"}}>{project.description}</p>
                                                </div>
                                            </Col>
                                    </Row>
                                </a>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Projects;

