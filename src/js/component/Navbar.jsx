import React from "react";

const NavBar = () => {
    return (
        <div className="pos-f-t">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark pos-f-t d-none d-md-flex">
                <a className="navbar-brand ps-3" href="#">Start Bootstrap</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto d-none d-md-flex pe-5">
                        <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="navbar navbar-dark bg-dark d-md-none">
                <div className="container-fluid">
                    <a className="navbar-brand ps-3" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleContent" aria-controls="navbarToggleContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse" id="navbarToggleContent">
                    <div className="bg-dark p-3">
                        <ul className="navbar-nav d-block d-md-none pe-3">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;