import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class NavigationBar extends React.Component {
	render() {
		return (
			<Navbar expand="lg" variant="dark" bg="dark" fixed="top">
				<Navbar.Brand href="#home">
					<img
						src="https://raw.githubusercontent.com/jsmileydev/shoestore/master/Images/icons8-running-50(2).png"
						alt="Running logo"
						className="d-inline-block align-middle"
					/>{' '}
					Serious Shoes
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto">
						<Nav.Link href="#home" className="px-5 text-uppercase text-white">Home</Nav.Link>
						<Nav.Link href="#link" className="px-5 text-uppercase text-white">Sales</Nav.Link>
						<NavDropdown title="Men's" id="basic-nav-dropdown" className="px-5 text-uppercase text-white">
							<NavDropdown.Item href="#action/3.1">First Category</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Second</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Third</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.4">Fourth</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Women's" id="basic-nav-dropdown" className="px-5 text-uppercase text-white">
							<NavDropdown.Item href="#action/3.1">First Category</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Second</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Third</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.4">Fourth</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<ButtonToolbar className="search-btn">
						{['left'].map((direction) => (
							<DropdownButton
								drop={direction}
								variant="dark"
								title={<FontAwesomeIcon icon={faSearch} size="lg" />}
								id={`dropdown-button-drop-${direction}`}
								key={direction}
							>
								<Dropdown.Item eventKey="1" className="search-bar" ><FormControl type="text" placeholder="Search" className="mr-sm-2 search-drop" /></Dropdown.Item>
							</DropdownButton>
						))}
					</ButtonToolbar>
					<a className="navbar-brand" href="#cart">
						<img
							src="https://raw.githubusercontent.com/jsmileydev/shoestore/master/Images/icons8-shopping-cart-64.png"
							width="40"
							alt="Shopping cart icon"
							className="d-inline-block align-middle"
						/>
					</a>
					<a className="navbar-brand" href="#">
						<FontAwesomeIcon icon={faUser} size="lg" />
					</a>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavigationBar;
