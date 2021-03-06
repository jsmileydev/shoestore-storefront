import React from 'react';
import './footer.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<Col>
					<Row className="footer-btn-row justify-content-center m-5">
						<Button className="footer-btn mx-4 my-3" variant="secondary">
							Find a Location
							<FontAwesomeIcon icon={faMapMarkerAlt} className="d-block mx-auto" />
						</Button>
						<Button className="footer-btn mx-4 my-3" variant="secondary">
							Contact Us
							<FontAwesomeIcon icon={faMobileAlt} className="d-block mx-auto" />
						</Button>
						<Button className="footer-btn mx-4 my-3" variant="secondary">
							Track Your Order
							<FontAwesomeIcon icon={faShippingFast} className="d-block mx-auto" />
						</Button>
					</Row>
					<Row>
						<Col sm={10} md={6} className="mx-auto">
							<Form className="signup mx-5 mb-5 mt-0">
								<Form.Row className="align-items-end">
									<Col className="px-0" sm={8}>
										<Form.Group as={Col} controlId="formGridEmail" className="p-0 mb-0">
											<Form.Label className="my-2">Sign up for sales and updates!</Form.Label>
											<Form.Control
												type="email"
												placeholder="Enter email address"
												className="email-input pb-"
											/>
										</Form.Group>
									</Col>
									<Col className="px-0" sm={4}>
										<Button
											variant="info"
											type="submit"
											className="signup-btn btn-sm mt-4 py-0 h-50"
										>
											Submit
										</Button>
									</Col>
								</Form.Row>
							</Form>
						</Col>
						<Col sm={10} md={6} >
							<div className="social-links text-center mx-5 mb-5 mt-0">
								<p className="h6">Follow us on</p>
								<div className="share-icons mr-2">
									<img
										src={require('./images/icons8-facebook-64.png')}
										width="36"
										alt="Twitter icon"
									/>
									<img
										src={require('./images/icons8-twitter-64.png')}
										width="36"
										alt="Facebook icon"
									/>
									<img
										src={require('./images/icons8-instagram-64.png')}
										width="36"
										alt="Instagram icon"
									/>
									<img
										src={require('./images/icons8-youtube-64.png')}
										width="36"
										alt="Youtube icon"
									/>
									<img src={require('./images/icons8-share-64.png')} width="36" alt="Share icon" />
								</div>
							</div>
						</Col>
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

export default Footer;
