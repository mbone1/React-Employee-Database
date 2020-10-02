import React from "react";
import "../style.css"

function Navbar() {
    return <>
        <section id="forest2">
        </section>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="concrete">
            <div className="container">
                <a className="navbar-brand" id="smartree">Smartree</a>
                <a className="navbar-brand" id="responsible">Responsible forestry for the modern era</a>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar;