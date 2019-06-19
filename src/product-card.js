import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';

const Heart = ({ filled, onClick }) => {
    return (
        <Badge variant="secondary" className="rounded-circle" onClick={onClick}>
            <FontAwesomeIcon icon={filled ? fasHeart : farHeart}/>
        </Badge>
    );
};

class ProductCard extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            filled: false
        }
        this.handleLike = this.handleLike.bind(this);
    }
    
    handleLike() {
        this.setState({
            filled: !this.state.filled
        });
    };

	render() {
		return (
			<Col className="w-100 mx-auto my-3" xl={4} lg={6} sm={6}>
				<Card className="rounded-lg h-100 shadow-sm border-0 mx-auto">
					<Card.Img variant="top" src={require('./images/horz-mens-dress-dkbrn-sit.jpg')} />
                    <Heart filled={this.state.filled} onClick={this.handleLike}/>
					<Card.Body>
						<Card.Text className="my-1">Cap Toe Lace-up</Card.Text>
						<small className="text-muted text-sm">Men's Dress Shoe</small>
						<Card.Text className="my-1">
							<strike className="text-muted">$150</strike>{' '}
							<span className="text-info font-weight-bold"> $100</span>
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		);
	}
}

export default ProductCard;
