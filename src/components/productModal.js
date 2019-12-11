import React from 'react';
import './storeMain/storeMain.css';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class ProductModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			total: 0
		};
	}
	render() {
		return (
			<Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter" className="px-3">{this.props.product}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Container>
						<Row className="quickview-main-row">
							<Col md={5} className="mx-3">
								<Row>
									<p>
										<img
											src={require(`${this.props.img}`)}
											alt={this.props.product}
											className="quickview-product-img"
										/>
									</p>
								</Row>
								<Row className="quickview-product-link" >
									<p><a href="" alt="Full product page">VIEW FULL PRODUCT DETAILS >></a></p>
								</Row>
							</Col>
							<Col md={5} className="mx-3">						
								<Row className="quickview-options-row">
									<p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
								</Row>
								<Row className="quickview-options-row mt-3">
									<p ><strike className="text-muted">{this.props.price}</strike>{' '}
									<span className="text-info font-weight-bold"> {this.props.salePrice}</span></p>
								</Row>
								<Row className="quickview-options-row mt-3">
									<p >Available Colors</p>
									<p className="d-block mx-2">
										<ButtonToolbar >
											<ToggleButtonGroup type="radio" name="options">
											{this.props.colors.map((colors) => {
												const ColorBg = { backgroundColor: colors };
												return (
													<ToggleButton
														value={colors}
														key={colors}
														style={ColorBg}
														variant="outline-dark"
														className="color-badge quickview-color-btn m-1"
													>
														{' '}
													</ToggleButton>
												);
											})}
											</ToggleButtonGroup>
										</ButtonToolbar>
									</p>
								</Row>
								<Row className="quickview-options-row mt-3">
									<p >Sizes</p>
									<p className="mx-2">
										<ButtonToolbar >
											<ToggleButtonGroup type="radio" name="options">
												{this.props.sizes.map((sizes) => {
													return (
														<ToggleButton
															key={sizes}
															value={sizes}
															variant="outline-secondary"
															className="size-btn"
														>
															{sizes}
														</ToggleButton>
													);
												})}
											</ToggleButtonGroup>
										</ButtonToolbar>
									</p>
								</Row>						
								<Row className="quickview-options-row mt-3">
									<Button variant="info">Add to Cart</Button>
								</Row>								
							</Col>
						</Row>
					</Container>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.onHide} variant="info">Close</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

class QuickView extends React.Component {
	constructor(...args) {
		super(...args);
		this.state = { modalShow: false };
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({
			modalShow: true
		});
		console.log(this.props.product);
	}

	render() {
		let modalClose = () => this.setState({ modalShow: false });
		return (
			<Badge variant="secondary" className="product-quickview rounded-circle">
				<FontAwesomeIcon icon={faSearch} className="product-modal-btn" onClick={this.handleClick} />
				<ProductModal
					onHide={modalClose}
					show={this.state.modalShow}
					product={this.props.product}
					category={this.props.category}
					price={this.props.price}
					salePrice={this.props.salePrice}
					colors={this.props.colors}
					sizes={this.props.sizes}
					img={this.props.img}
				/>
			</Badge>
		);
	}
}

export default QuickView;
