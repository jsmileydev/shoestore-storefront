import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';

export class ShopGrid extends React.Component {
    render() {
        return(
            <Tab.Container fluid={true} id="list-group-tabs-example" defaultActiveKey="#cat1">
                <Row id="main">
                    <Col xl={3} lg={4} md={4} sm={12}>
                        <ListGroup variant={'flush'}>
                            <ListGroup.Item action href="#cat1">First Category</ListGroup.Item>
                            <ListGroup.Item action href="#cat2">Second Category</ListGroup.Item>
                            <ListGroup.Item action href="#cat3">Third Category</ListGroup.Item>
                            <ListGroup.Item action href="#cat4">Fourth Category</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xl={9} lg={8} md={8} sm={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#cat1">
                            <p>Content</p></Tab.Pane>
                            <Tab.Pane eventKey="#cat2">
                            <p>Content</p></Tab.Pane>
                            <Tab.Pane eventKey="#cat3">
                            <p>Content</p></Tab.Pane>
                            <Tab.Pane eventKey="#cat4">
                            <p>Content</p></Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        )
    }
}