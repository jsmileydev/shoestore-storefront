import React from 'react';
import QuickView from './productModal';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

const Heart = ({ filled, onClick }) => {
	return (
		<Badge variant="secondary" className="heart rounded-circle" onClick={onClick}>
			<FontAwesomeIcon icon={filled ? fasHeart : farHeart} />
		</Badge>
	);
};

class ProductCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filled: false,
			product: ''
		};
		this.handleLike = this.handleLike.bind(this);
	}

	handleLike() {
		this.setState({ filled: !this.state.filled });
	}

	render() {
		return (
			<Col className="w-100 mx-auto mb-5" xl={4} lg={6} sm={6}>
				<Card className="rounded-lg h-100 shadow-sm border-0 mx-auto">
					<div className="product-image">
						<Card.Img variant="top" src={require(`${this.props.img}`)} alt={this.props.name} />
						<Heart filled={this.state.filled} onClick={this.handleLike} />
						<QuickView
							product={this.props.name}
							category={this.props.category}
							price={this.props.price}
							salePrice={this.props.salePrice}
							colors={this.props.colors}
							sizes={this.props.sizes}
							img={this.props.img}
						/>

						{/*
						<QuickView/>
						<Card.ImgOverlay className="my-auto text-center">
							<div className="product-overlay-btn-hover h-100 w-100">
								<Button variant="outline-dark" className="mx-1 btn-view-product-page d-inline text-dark">
									View
								</Button>
								<Cart />
							</div>
						</Card.ImgOverlay>*/}
					</div>
					<Card.Body>
						<Card.Text className="my-1">{this.props.name}</Card.Text>
						<small className="text-muted text-sm">{this.props.category}</small>
						<Card.Text className="my-1 price-text">
							<strike className="text-muted">{this.props.price}</strike>{' '}
							<span className="text-primary font-weight-bold"> {this.props.salePrice}</span>
							{this.props.colors.map((colors) => {
								const ColorBg = { backgroundColor: colors };
								return (
									<Button
										variant="outline-dark"
										className="color-badge float-right d-inline my-2 mx-1  shadow-none"
										key={colors}
										style={ColorBg}
									>
										{' '}
									</Button>
								);
							})}
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		);
	}
}

export default ProductCard;
