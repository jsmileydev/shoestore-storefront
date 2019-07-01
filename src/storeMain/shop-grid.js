import React from 'react';
import './storeMain.css';
import ProductCard from './product-card';
import productArr from './product-arr';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';

class ShopGrid extends React.Component {
	render() {
		const ProductMap = productArr.map((product) => (
			<ProductCard
				key={product.id}
				name={product.name}
				category={product.category}
				price={product.price}
				salePrice={product.salePrice}
				colors={product.colors}
				img={product.img}
			/>
		));
		return (
			<main>
				<Tab.Container fluid={true} id="list-group-tabs-example" defaultActiveKey="#cat1">
					<Row id="main" className="w-100 mx-auto">
						<Col xl={2} md={3} sm={12} className="p-0 bg-light">
							<ListGroup variant={'flush'} className="my-5">
								<ListGroup.Item action href="#cat1" className="px-0">
									Oxfords
								</ListGroup.Item>
								<ListGroup.Item action href="#cat2" className="px-0">
									All Boots
								</ListGroup.Item>
								<ListGroup.Item action href="#cat3" className="px-0">
									Chukkas
								</ListGroup.Item>
								<ListGroup.Item action href="#cat4" className="px-0">
									Heeled Boots
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col xl={10} md={9} sm={12} className="mx-auto bg-light">
							<Tab.Content className="m-5 text-left">
								<Tab.Pane eventKey="#cat1">
									<Row>
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
