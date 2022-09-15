import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../search";

const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/all_character">
                                    Characters
                                </NavLink>
                            </li>

                        </ul>
                        {/* <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="/">
                            LOGO
                        </NavLink> */}

                        <form className="d-flex justify-content-end" role="search">
                          {/* <Search /> */}
                            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                        </form>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;