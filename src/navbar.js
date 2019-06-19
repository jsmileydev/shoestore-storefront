import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

class Navbar extends React.Component {
    render() {
        return (
            <header className="container">
                <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                    <img src="https://raw.githubusercontent.com/jsmileydev/shoestore/master/Images/icons8-running-50(2).png" alt="Running logo"/>
                    <a className="navbar-brand" href="#">Serious Shoes</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto justify-content-center">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0 mx-3">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-info my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        <a className="navbar-brand" href="#">
                            <img src="https://raw.githubusercontent.com/jsmileydev/shoestore/master/Images/icons8-shopping-cart-64.png" width="40" alt="Shopping cart icon"/>
                        </a>
                        <a className="navbar-brand" href="#">
                            <FontAwesomeIcon icon={faUser} size="lg" />
                        </a>
                    </div>
                </nav>
            </header>
        );
    };
}

export default Navbar;