import React from "react";
import "../style.css"

function Navbar() {
    return <div>
        <section id="forest2">
        </section>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <a class="navbar-brand" id="smartree">Smartree</a>
                <a class="navbar-brand" id="responsible">Responsible forestry for the modern era</a>

                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav><nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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
    </div >
}

export default Navbar;