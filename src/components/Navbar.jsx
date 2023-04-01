import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="./images/logo.jfif" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        <span style={{color: 'white', fontStyle: 'bold'}}>Techoverflow</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon btn btn-secondary"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/"><a className="nav-link"><span style={{color: 'white'}}>Home</span></a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Services"><a className="nav-link"><span style={{color: 'white'}}>Services</span></a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact"><a className="nav-link"><span style={{color: 'white'}}>Contact</span></a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Career"><a className="nav-link"><span style={{color: 'white'}}>Career</span></a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Services_Group"><a className="nav-link active"><span style={{color: 'white'}}>ServicesGroup</span></a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
