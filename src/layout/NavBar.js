import React from "react";
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href={NavBar}>CRUD REACT - SPRING </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className={"btn btn-outline-warning"} to={"/addUser"}>
                    Add User
                </Link>
            </div>
        </nav>
    )
}