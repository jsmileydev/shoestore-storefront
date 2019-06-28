import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';

class FooterBar extends React.Component {
	render() {
		return (
			<footer>
				<Col>
					<Row className="footer-btn-row justify-content-center m-5">
						<Button className="footer-btn mx-5" variant="secondary">
							Find a Location 
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="d-block mx-auto" />
						</Button>
						<Button className="footer-btn mx-5" variant="secondary">
							Contact Us 
                            <FontAwesomeIcon icon={faMobileAlt} className="d-block mx-auto" />
						</Button>
						<Button className="footer-btn mx-5" variant="secondary">
							Track Your Order 
                            <FontAwesomeIcon icon={faShippingFast} className="d-block mx-auto" />
						</Button>
					</Row>
				</Col>
				<Col>
					<Row className="m-5">
						<Form className="signup" as={Col} sm={10} md={6}>
							<Form.Row className="align-items-end">
								<Col className="px-0" sm={8}>
									<Form.Group as={Col} controlId="formGridEmail" className="p-0 mb-0">
										<Form.Label>Sign up for sales and updates!</Form.Label>
										<Form.Control
											type="email"
											placeholder="Enter email address"
											className="email-input pb-"
										/>
									</Form.Group>
								</Col>
								<Col className="px-0" sm={4}>
									<Button variant="info" type="submit" className="signup-btn btn-sm mt-4 py-0 h-50">
										Submit
									</Button>
								</Col>
							</Form.Row>
						</Form>
					</Row>
					<Row className="m-5">
						<div className="col-mdtext-left">
							<p className="h6">Follow us on</p>
							<div className="share-icons mr-2">
								<img
									src="https://raw.githubusercontent.com/jsmileydev/shoestore/master/Images/icons8-twitter-64.png"
									width="36"
									alt="Twitter icon"
								/>
								<img
									src="https://raw.githubusercontent.com/jsmileydev/shoestore/master/Images/icons8-facebook-64.png"
									width="36"
									alt="Facebook icon"
								/>
								<img
									src="https://raw.githubusercontent.com/jsmileydev/shoestore/master/Images/icons8-instagram-64.png"
									width="36"
									alt="Instagram icon"
								/>
								<img
									src="https://raw.githubusercontent.com/jsmileydev/shoestore/master/Images/icons8-youtube-squared-64.png"
									width="36"
									alt="Youtube icon"
								/>
								<img
									src="https://raw.githubusercontent.com/jsmileydev/shoestore/master/Images/icons8-share-64.png"
									width="36"
									alt="Share icon"
								/>
							</div>
						</div>
					</Row>
				</Col>
				<div className="bg-dark border-dark">
					<div className="image-links bg-dark border-dark text-right">
						<p className="my-0">
							<small>
								<a href="https://icons8.com/" className="text-white">
									Icons by Icons8
								</a>
							</small>
						</p>
						<p className="my-0">
							<small>
								<a href="https://pixabay.com/" className="text-white">
									Images from Pixabay
								</a>
							</small>
						</p>
					</div>
				</div>
			</footer>
		);
	}
}

export default FooterBar;
