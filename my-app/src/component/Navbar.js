import React from 'react'
import { Link, NavLink} from 'react-router-dom';
import '../css/active.css'

function Navbar() {
  return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" name="mainNav">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="">CultureCambodia</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto py-4 py-lg-0">
                            <li className="nav-item">
                                <form className="d-flex" style={{height: 40, marginTop: 20}}>
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit"><i className='fa fa-search' style={{marginBottom: 20}}/></button>
                                </form></li>
                            <li className="nav-item nav-link px-lg-3 py-3 py-lg-4"><NavLink to="/">Home</NavLink></li>
                            <li className="nav-item nav-link px-lg-3 py-3 py-lg-4"><NavLink to="/about">About</NavLink></li>
                            <li className="nav-item nav-link px-lg-3 py-3 py-lg-4"><NavLink to="/login" end>Login</NavLink></li>
                            <li className="nav-item nav-link px-lg-3 py-3 py-lg-4"><NavLink to="/signup">Signup</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
  );
}

export default Navbar;