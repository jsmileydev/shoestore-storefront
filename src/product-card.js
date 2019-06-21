import React from 'react';
import Cart from './cart-modal';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';

const Heart = ({ filled, onClick }) => {
	return (
		<Badge variant="secondary" className="rounded-circle" onClick={onClick}>
			<FontAwesomeIcon icon={filled ? fasHeart : farHeart} />
		</Badge>
	);
};

class ProductCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filled: false,
			colors: ''
		};
		this.handleLike = this.handleLike.bind(this);
		this.showColors = this.showColors.bind(this);
	}

	handleLike() {
		this.setState({ filled: !this.state.filled });
	}

	showColors() {
		for (let index = 0; index < this.props.colors.length; index++) {
			const element = this.props.colors[index];
			this.setState({
				colors: element
			})
		}
	}

	render() {
		return (
			<Col className="w-100 mx-auto mb-5" xl={4} lg={6} sm={6}>
				<Card className="rounded-lg h-100 shadow-sm border-0 mx-auto">
					<div className="product-image">
						<Card.Img variant="top" src={require(`${this.props.img}`)} alt={this.props.name} />
						<Card.ImgOverlay className="my-auto text-center">
							<Heart filled={this.state.filled} onClick={this.handleLike} />
							{/*}
							<div className="product-overlay-btn-hover h-100 w-100">
								<Button variant="outline-dark" className="mx-1 btn-view-product-page d-inline text-dark">
									View
								</Button>
								<Cart />
							</div>*/}
						</Card.ImgOverlay>
					</div>
					<Card.Body>
						<Card.Text className="my-1">{this.props.name}</Card.Text>
						<small className="text-muted text-sm">{this.props.category}</small>
						<Card.Text className="my-1">
							<strike className="text-muted">{this.props.price}</strike>{' '}
							<span className="text-primary font-weight-bold"> {this.props.salePrice}</span>
							<span className="badge rounded-circle" style="backgroundColor:{this.state.colors" ></span>
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		);
	}
}

export default ProductCard;
