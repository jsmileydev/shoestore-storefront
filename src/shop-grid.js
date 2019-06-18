import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

class ShopGrid extends React.Component {

	render() {
		return (
			<main>
				<Tab.Container fluid={true} id="list-group-tabs-example" defaultActiveKey="#cat1">
					<Row id="main" className="w-100 mx-auto">
						<Col xl={3} lg={4} md={4} sm={12} className="p-0 bg-light">
							<ListGroup variant={'flush'} className="my-5">
								<ListGroup.Item action href="#cat1" className="px-0">
									First Category
								</ListGroup.Item>
								<ListGroup.Item action href="#cat2" className="px-0">
									Second Category
								</ListGroup.Item>
								<ListGroup.Item action href="#cat3" className="px-0">
									Third Category
								</ListGroup.Item>
								<ListGroup.Item action href="#cat4" className="px-0">
									Fourth Category
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col xl={9} lg={8} md={8} sm={12} className="m-auto bg-light">
							<Tab.Content className="m-5 text-left">
								<Tab.Pane eventKey="#cat1" className="d-flex justify-content-around">
									<Card style={{ width: '14rem' }} className="rounded-lg shadow-sm border-0">
										<Card.Img variant="top" src={require("./images/sq-mens-dress-blk.png")} />
                                        <Badge variant="secondary" className="rounded-circle"><FontAwesomeIcon icon={faHeart} /></Badge>
										<Card.Body>
											<Card.Text className="my-1">Square Toe Lace-up</Card.Text>
											<small className="text-muted text-sm">
                                                Men's Dress Shoe
											</small>
                                            <Card.Text className="my-1">
                                                <strike className="text-muted">$150</strike> <span className="text-info font-weight-bold"> $100</span>
                                            </Card.Text>
										</Card.Body>
									</Card>
									<Card style={{ width: '14rem' }} className="rounded-lg shadow-sm border-0">
										<Card.Img variant="top" src={require("./images/sq-womens-boot-blk-heel.png")} />
                                        <Badge variant="secondary" className="rounded-circle"><FontAwesomeIcon icon={faHeart} /></Badge>
										<Card.Body>
											<Card.Text className="my-1">Heeled Ankle Boot</Card.Text>
											<small className="text-muted text-sm">
                                                Women's Boots
											</small>
                                            <Card.Text className="my-1">
                                                <strike className="text-muted">$150</strike> <span className="text-info font-weight-bold"> $100</span>
                                            </Card.Text>
										</Card.Body>
									</Card>
								</Tab.Pane>

								<Tab.Pane eventKey="#cat2">
									<p>Content</p>
								</Tab.Pane>
								<Tab.Pane eventKey="#cat3">
									<p>Content</p>
								</Tab.Pane>
								<Tab.Pane eventKey="#cat4">
									<p>Content</p>
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
			</main>
		);
	}
}

export default ShopGrid;
