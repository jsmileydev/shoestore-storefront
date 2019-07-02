import React from 'react';
import './storeMain.css';
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
					<Modal.Title id="contained-modal-title-vcenter">{this.props.product}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Container>
						<Row className="show-grid">
							<Col md={6}>
								<p>
									<img
										src={require(`${this.props.img}`)}
										alt={this.props.product}
										className="quickview-product-img"
									/>
								</p>
							</Col>
							<Col md={6}>
								<Row>
									<h4>{this.props.product}</h4>
								</Row>
								<Row>
                                    <p>Available Colors</p>
                                    <p className="d-block ">
									{this.props.colors.map((colors) => {
										const ColorBg = { backgroundColor: colors };
										return (
											<Button
												variant="outline-dark"
												className="color-badge my-2 mx-1"
												key={colors}
												style={ColorBg}
											>
												{' '}
											</Button>
										);
                                    })}
                                    </p>
								</Row>
								<Row>
									<ButtonToolbar>
										<ToggleButtonGroup type="radio" name="options">
                                            {this.props.sizes.map((sizes) => {
                                                return (
                                                    <ToggleButton value={sizes} variant="outline-secondary" className="size-btn">{sizes}</ToggleButton>
                                                )
                                            })}
										</ToggleButtonGroup>
									</ButtonToolbar>
								</Row>
							</Col>
						</Row>
                        <Row>
                            <p>Lorem ipsum</p>
                        </Row>
						<Row className="show-grid">
							<Col md={12} className="text-right">
								<p>Total</p>
							</Col>
						</Row>
					</Container>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.onHide}>Close</Button>
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
