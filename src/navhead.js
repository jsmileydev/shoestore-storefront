import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export class Navhead extends React.Component {
	render() {
		return (
			<header>
				<Navbar bg="dark" variant="dark" expand="lg" fixed="top">
					<Navbar.Brand href="#home">
						<img
							src="https://raw.githubusercontent.com/jsmileydev/shoestore/master/Images/icons8-running-50(2).png"
							alt="Running logo"
							className="d-inline-block align-middle"
						/>
						{'Serious Shoes'}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Navbar.Link href="#home">Home</Navbar.Link>
							<Navbar.Link href="#link">Sales</Navbar.Link>
							<NavDropdown title="Products" id="basic-nav-dropdown">
								<NavDropdown.Item href="#cat1">First Category</NavDropdown.Item>
								<NavDropdown.Item href="#cat2">Second Category</NavDropdown.Item>
								<NavDropdown.Item href="#cat3">Third Category</NavDropdown.Item>
								<NavDropdown.Item href="#cat4">Fourth Category</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Form inline>
							<FormControl type="text" placeholder="Search" className="mr-sm-2" />
							<Button variant="info">Search</Button>
						</Form>
						<a className="navbar-brand" href="#cart">
							<img
								src="https://raw.githubusercontent.com/jsmileydev/shoestore/master/Images/icons8-shopping-cart-64.png"
								width="40"
								alt="Shopping cart icon"
								className="d-inline-block align-middle"
							/>
						</a>
					</Navbar.Collapse>
				</Navbar>
			</header>
		);
	}
}
