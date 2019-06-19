import React from 'react';
import ProductCard from './product-card';
import productArr from './product-arr';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

class ShopGrid extends React.Component {
	render() {
		const ProductMap = productArr.map((product) => (
			<ProductCard
				name={product.name}
				category={product.category}
				price={product.price}
				salePrice={product.salePrice}
				img={product.img}
			/>
		));
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
						<Col xl={9} lg={8} md={8} sm={12} className="mx-auto bg-light">
							<Tab.Content className="m-5 text-left">
								<Tab.Pane eventKey="#cat1">
									<Row>
										{/*
										<Col className="w-100 mx-auto my-3" xl={4} lg={6} sm={6}>
											<Card className="rounded-lg h-100 shadow-sm border-0 mx-auto">
												<Card.Img
													variant="top"
													src={require('./images/horz-mens-dress-dkbrn-sit.jpg')}
												/>
												<Badge variant="secondary" className="rounded-circle">
													<FontAwesomeIcon icon={farHeart} />
												</Badge>
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

										<Col className="w-100 mx-auto my-3" xl={4} lg={6} sm={6}>
											<Card className="rounded-lg shadow-sm border-0 h-100 mx-auto">
												<Card.Img
													variant="top"
													src={require('./images/horz-womens-boot-heel.jpg')}
												/>
												<Badge variant="secondary" className="rounded-circle">
													<FontAwesomeIcon icon={farHeart} />
												</Badge>
												<Card.Body>
													<Card.Text className="my-1">Heeled Ankle Boot</Card.Text>
													<small className="text-muted text-sm">Women's Boots</small>
													<Card.Text className="my-1">
														<strike className="text-muted">$150</strike>{' '}
														<span className="text-info font-weight-bold"> $100</span>
													</Card.Text>
												</Card.Body>
											</Card>
										</Col>

										<Col className="w-100 mx-auto my-3" xl={4} lg={6} sm={6}>
											<Card className="rounded-lg shadow-sm h-100 border-0 mx-auto">
												<Card.Img
													variant="top"
													src={require('./images/horz-mens-boot-brn.jpg')}
												/>
												<Badge variant="secondary" className="rounded-circle">
													<FontAwesomeIcon icon={farHeart} />
												</Badge>
												<Card.Body>
													<Card.Text className="my-1">Ankle Dress Boot</Card.Text>
													<small className="text-muted text-sm">
														Men's Boots, Men's Dress Shoes
													</small>
													<Card.Text className="my-1">
														<strike className="text-muted">$150</strike>{' '}
														<span className="text-info font-weight-bold"> $100</span>
													</Card.Text>
												</Card.Body>
											</Card>
										</Col>*/}
										{ProductMap}
									</Row>
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
