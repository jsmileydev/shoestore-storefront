import React from 'react';
import './storeMain.css';
import ProductCard from '../product-card';
import productArr from '../product-arr';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';

//Map through product array to create product cards of each
const ProductMap = productArr.map((product) => (
	<ProductCard
		key={product.id}
		name={product.name}
		category={product.category}
		price={product.price}
		salePrice={product.salePrice}
		colors={product.colors}
		sizes={product.sizes}
		img={product.img}
	/>
));
//Map through filtered product array categories by searching for a specific substring in each category value, and creating product cards of remaining objects
const MensMap = productArr
	.filter((product) => {
		return product.category.includes("Men's");
	})
	.map((product) => (
		<ProductCard
			key={product.id}
			name={product.name}
			category={product.category}
			price={product.price}
			salePrice={product.salePrice}
			colors={product.colors}
			sizes={product.sizes}
			img={product.img}
		/>
	));
const WomensMap = productArr
	.filter((product) => {
		return product.category.includes("Women's");
	})
	.map((product) => (
		<ProductCard
			key={product.id}
			name={product.name}
			category={product.category}
			price={product.price}
			salePrice={product.salePrice}
			colors={product.colors}
			sizes={product.sizes}
			img={product.img}
		/>
	));
const OxfordsMap = productArr
	.filter((product) => {
		return product.category.includes("Men's Dress Shoes");
	})
	.map((product) => (
		<ProductCard
			key={product.id}
			name={product.name}
			category={product.category}
			price={product.price}
			salePrice={product.salePrice}
			colors={product.colors}
			sizes={product.sizes}
			img={product.img}
		/>
	));
const BootsMap = productArr
	.filter((product) => {
		return product.category.includes('Boots');
	})
	.map((product) => (
		<ProductCard
			key={product.id}
			name={product.name}
			category={product.category}
			price={product.price}
			salePrice={product.salePrice}
			colors={product.colors}
			sizes={product.sizes}
			img={product.img}
		/>
	));
const ChukkasMap = productArr
	.filter((product) => {
		return product.category.includes('Chukka');
	})
	.map((product) => (
		<ProductCard
			key={product.id}
			name={product.name}
			category={product.category}
			price={product.price}
			salePrice={product.salePrice}
			colors={product.colors}
			sizes={product.sizes}
			img={product.img}
		/>
	));
const HeelBootMap = productArr
	.filter((product) => {
		return product.category.includes('Heel');
	})
	.map((product) => (
		<ProductCard
			key={product.id}
			name={product.name}
			category={product.category}
			price={product.price}
			salePrice={product.salePrice}
			colors={product.colors}
			sizes={product.sizes}
			img={product.img}
		/>
	));

class StoreMain extends React.Component {
	render() {
		return (
			<main>
				<Tab.Container fluid={true} id="list-group-tabs-example" defaultActiveKey="#cat1">
					<Row id="main" className="w-100 mx-auto">
						<Col xl={2} md={3} sm={12} className="p-0 bg-light">
							<ListGroup variant={'flush'} className="my-5">
								<ListGroup.Item action href="#cat1" className="px-0">
									All
								</ListGroup.Item>
								<ListGroup.Item action href="#cat2" className="px-0">
									Men's
								</ListGroup.Item>
								<ListGroup.Item action href="#cat3" className="px-0">
									Women's
								</ListGroup.Item>
								<ListGroup.Item href="" className="px-0 list-break">
									&nbsp;
								</ListGroup.Item>
								<ListGroup.Item action href="#cat4" className="px-0">
									Oxfords
								</ListGroup.Item>
								<ListGroup.Item action href="#cat5" className="px-0">
									All Boots
								</ListGroup.Item>
								<ListGroup.Item action href="#cat6" className="px-0">
									Chukkas
								</ListGroup.Item>
								<ListGroup.Item action href="#cat7" className="px-0">
									Heeled Boots
								</ListGroup.Item>
								<ListGroup.Item href="" className="px-0 list-break">
									&nbsp;
								</ListGroup.Item>
								<ListGroup.Item action href="#cat8" className="px-0">
									By Price
								</ListGroup.Item>
								<ListGroup.Item action href="#cat9" className="px-0">
									By Size
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col xl={10} md={9} sm={12} className="mx-auto bg-light">
							<Tab.Content className="m-5 text-left">
								<Tab.Pane eventKey="#cat1">
									<Row>{ProductMap}</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="#cat2">
									<Row>{MensMap}</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="#cat3">
									<Row>{WomensMap}</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="#cat4">
									<Row>{OxfordsMap}</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="#cat5">
									<Row>{BootsMap}</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="#cat6">
									<Row>{ChukkasMap}</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="#cat7">
									<Row>{HeelBootMap}</Row>
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
			</main>
		);
	}
}

export default StoreMain;
