import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.navEnter = this.navEnter.bind(this);
        this.navExit = this.navExit.bind(this)
        this.state = {
        }
    }

    navEnter(e){
        e.target.style.backgroundColor = "whitesmoke";
        e.target.style.color = "black";
    }

    navExit(e){
        e.target.style.backgroundColor = "black";
        e.target.style.color = "white";
    }

    render(){
        return(
            <div style={{ width: "100%", height: "100%", display: "grid", gridTemplateColumns: "auto" }}>
                <Link to='/' onMouseEnter={this.navEnter} onMouseLeave={this.navExit} style={{ textDecoration: "none", color: "white", backgroundColor: "black", borderBottom: "white 1px solid", fontSize: "18px", display: "flex", justifyContent: "center", alignItems: "center" }}>Home</Link>
                <Link to='/profile' onMouseEnter={this.navEnter} onMouseLeave={this.navExit} style={{ textDecoration: "none", color: "white", backgroundColor: "black", borderBottom: "white 1px solid", fontSize: "18px", display: "flex", justifyContent: "center", alignItems: "center" }}>Profile</Link>
                <Link to='/experience' onMouseEnter={this.navEnter} onMouseLeave={this.navExit} style={{ textDecoration: "none", color: "white", backgroundColor: "black", borderBottom: "white 1px solid", fontSize: "18px", display: "flex", justifyContent: "center", alignItems: "center" }}>Experience</Link>
                <Link to='/projects' onMouseEnter={this.navEnter} onMouseLeave={this.navExit} style={{ textDecoration: "none", color: "white", backgroundColor: "black", fontSize: "18px", display: "flex", justifyContent: "center", alignItems: "center" }}>Projects</Link>
            </div>
        )
    }
}

export default NavBar;