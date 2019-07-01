import React from 'react';
import './storeMain.css';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
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
					<Modal.Title id="contained-modal-title-vcenter">Your Cart</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Container>
						<Row className="show-grid">
							<Col md={8}>
								<p>Product</p>
								<p>{this.props.name}</p>
							</Col>
							<Col md={4}>
								<p>Price</p>
								<p>{this.props.price}</p>
							</Col>
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
	}
	render() {
		let modalClose = () => this.setState({ modalShow: false });
		return (
			<Badge variant="secondary" className="product-quickview rounded-circle">
				<FontAwesomeIcon
					icon={faSearch}
					className="product-modal-btn"
					onClick={() => this.setState({ modalShow: true })}
				/>
				<ProductModal show={this.state.modalShow} onHide={modalClose} />
			</Badge>
		);
	}
}

export default QuickView;
