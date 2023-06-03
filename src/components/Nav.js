import React from "react"
import logo from "../images/Fill213.png"

export default function Nav() {
    return (
        <nav className="nav-bar">
            <img className="nav-logo" src={logo} alt="logo" />
            <h3 className="nav-title" >my travel journal.</h3>
        </nav>
    )
}