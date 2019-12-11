import React from 'react';
import './storeMain.css';
import { ProductMap, MensMap, WomensMap, OxfordsMap, BootsMap, ChukkasMap, HeelBootsMap } from './maps';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';

class StoreMain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			key: '#cat1'
		}
	}
	handleSelect(key) {
		this.setState({
		key: key
		});
	}
	render() {
		return (
			<main>
				<Tab.Container fluid={true} id="tab-container" defaultActiveKey="#cat1" activeKey={this.state.key}>
					<Row id="main" className="w-100 mx-auto">
						<Col xl={2} md={3} sm={12} className="p-0 bg-light">
							<ListGroup variant={'flush'} className="my-5">
								<ListGroup.Item action eventKey="#cat1" className="px-0">
									All
								</ListGroup.Item>
								<ListGroup.Item action eventKey="#cat2" className="px-0">
									Men's
								</ListGroup.Item>
								<ListGroup.Item action eventKey="#cat3" className="px-0">
									Women's
								</ListGroup.Item>
								<ListGroup.Item className="px-0 list-break">
									&nbsp;
								</ListGroup.Item>
								<ListGroup.Item action eventKey="#cat4" className="px-0">
									Oxfords
								</ListGroup.Item>
								<ListGroup.Item action eventKey="#cat5" className="px-0">
									All Boots
								</ListGroup.Item>
								<ListGroup.Item action eventKey="#cat6" className="px-0">
									Chukkas
								</ListGroup.Item>
								<ListGroup.Item action eventKey="#cat7" className="px-0">
									Heeled Boots
								</ListGroup.Item>
								<ListGroup.Item className="px-0 list-break">
									&nbsp;
								</ListGroup.Item>
								<ListGroup.Item action eventKey="#cat8" className="px-0">
									By Price
								</ListGroup.Item>
								<ListGroup.Item action eventKey="#cat9" className="px-0">
									By Size
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col xl={10} md={9} sm={12} className="mx-auto bg-light">
							<Tab.Content className="m-5 text-left">
								<Tab.Pane eventKey="#cat1">
									<Row >{ProductMap}</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="#cat2">
									<Row >{MensMap}</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="#cat3">
									<Row >{WomensMap}</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="#cat4">
									<Row>{OxfordsMap}</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="#cat5">
									<Row >{BootsMap}</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="#cat6">
									<Row>{ChukkasMap}</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="#cat7">
									<Row>{HeelBootsMap}</Row>
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
