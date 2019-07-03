import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
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
				<div className="navbar-top">
					<div className="navbar-toggle float-left mr-2 my-auto">
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
					</div>
					<Navbar.Brand href="#home" className="text-center mx-auto">
						<img
							src={require('./images/icons8-running-50.png')}
							alt="Running logo"
							className="d-inline-block align-middle"
						/>{' '}
						Serious Shoes
					</Navbar.Brand>
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
							<ListGroup.Item action href="#cat1">
								Oxfords
							</ListGroup.Item>
							<ListGroup.Item action href="#cat2">
								All Boots
							</ListGroup.Item>
							<ListGroup.Item action href="#cat3">
								Oxford Boots
							</ListGroup.Item>
							<ListGroup.Item action href="#cat4">
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
							title={<FontAwesomeIcon icon={faSearch} size="lg" className="search-drop-btn text-right" />}
							id="basic-nav-dropdown"
							className="px-3 text-white">
								<ListGroup.Item action href="#search">
								<FormControl type="text" placeholder="Search" className="mr-sm-2 search-drop" />
								</ListGroup.Item>
							</NavDropdown>
					</Nav>
				</Navbar.Collapse>
				<div className="navbar-icon-links">
					<ButtonToolbar className="search-btn mr-0">
						{[ 'left' ].map((direction) => (
							<DropdownButton
								drop={direction}
								variant="dark"
								title={
									<FontAwesomeIcon icon={faSearch} size="lg" className="search-drop-btn text-right" />
								}
								id={`dropdown-button-drop-${direction}`}
								key={direction}
							>
								<Dropdown.Item eventKey="1" className="search-bar">
									<FormControl type="text" placeholder="Search" className="mr-sm-2 search-drop" />
								</Dropdown.Item>
							</DropdownButton>
						))}
						<a className="navbar-brand pt-0" href="#cart">
							<img
								src={require('./images/icons8-shopping-cart-64.png')}
								width="40"
								alt="Shopping cart icon"
								className="d-inline-block align-middle"
							/>
						</a>
						<a className="navbar-brand" href="#">
							<FontAwesomeIcon icon={faUser} size="md" />
						</a>
					</ButtonToolbar>
				</div>
			</Navbar>
		);
	}
}

export default NavigationBar;
