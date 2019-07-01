
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
				<Navbar.Brand href="#home">
					<img
						src={require("./images/icons8-running-50.png")} 
						alt="Running logo"
						className="d-inline-block align-middle"
					/>{' '}
					Serious Shoes
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto text-center">
						<Nav.Link href="#home" className="px-5 text-uppercase text-white">Home</Nav.Link>
						<Nav.Link href="#link" className="px-5 text-uppercase text-white">Sales</Nav.Link>
						<NavDropdown title="MEN'S" id="basic-nav-dropdown" className="px-5 text-white">
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
						<NavDropdown title="WOMEN'S" id="basic-nav-dropdown" className="px-5  text-white">
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
					</Nav>
					<ButtonToolbar className="search-btn text-right">
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
							src={require("./images/icons8-shopping-cart-64.png")}
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
