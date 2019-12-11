import React from 'react';
import './nav.css';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavigationBar extends React.Component {
	render() {
		return (
			<Navbar expand="lg" variant="dark" bg="dark" fixed="top">
				<div className=" mx-auto">
					<div className="navbar-toggle">
						<Navbar.Brand href="#home" className="text-center mx-auto p-0">
						<Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-5 float-left"/>
							<img
								src={require('./images/icons8-running-50.png')}
								alt="Running logo"
								className="d-inline-block navbar-logo"
							/>{' '}
							<span className="brand">SERIOUS SHOES</span>
						</Navbar.Brand>
					</div>
				</div>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto text-center">
						<Nav.Link href="#home" className="px-3 text-uppercase text-white">
							Home
						</Nav.Link>
						<Nav.Link href="#link" className="px-3 text-uppercase text-white">
							Sales
						</Nav.Link>
						<NavDropdown title="MEN'S" id="basic-nav-dropdown" className="px-3 text-white">
							<ListGroup.Item action href="#cat4">
								Oxfords
							</ListGroup.Item>
							<ListGroup.Item action href="#cat2">
								All Boots
							</ListGroup.Item>
							<ListGroup.Item action href="#cat3">
								Oxford Boots
							</ListGroup.Item>
							<ListGroup.Item action href="#cat6">
								Chukka Boots
							</ListGroup.Item>
						</NavDropdown>
						<NavDropdown title="WOMEN'S" id="basic-nav-dropdown" className="px-3 text-white">
							<ListGroup.Item action href="#cat1">
								All Boots
							</ListGroup.Item>
							<ListGroup.Item action href="#cat2">
								Heeled Boots
							</ListGroup.Item>
							<ListGroup.Item action href="#cat3">
								Calf-High Boots
							</ListGroup.Item>
							<ListGroup.Item action href="#cat4">
								Chukka Boots
							</ListGroup.Item>
						</NavDropdown>
						<NavDropdown
							title={ <FontAwesomeIcon icon={faSearch} size="lg" className="search-drop-btn text-right" />}
							id="basic-nav-dropdown"
							className="px-3 text-white"
						>
							<ListGroup.Item action href="#search" className="p-0">
								<FormControl type="text" placeholder="Search" className="search-drop w-150" />
							</ListGroup.Item>
						</NavDropdown>
					</Nav>
					<div className="navbar-icon-links text-center">
						<a className="navbar-brand pt-0" href="#cart">
							<img
								src={require('./images/icons8-shopping-cart-64.png')}
								width="40"
								alt="Shopping cart icon"
								className="d-inline-block align-middle"
							/>
						</a>
						<a className="navbar-brand" href="#">
							<FontAwesomeIcon icon={faUser} size="lg" />
						</a>
					</div>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavigationBar;
