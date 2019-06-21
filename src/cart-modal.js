import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

class CartModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            total: 0
        }
    }
    render() {
        return(
            <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Your Cart
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row className="show-grid">
                            <Col md={8}>
                                <p>Product</p>
                            </Col>
                            <Col md={4}>
                                <p>Price</p>
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col md={12} className="text-right">
                                <p>Total</p>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

class Cart extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = { modalShow: false};
    }
    render() {
        let modalClose = () => this.setState({ modalShow: false});
        return (
            <ButtonToolbar className="d-inline">
                <Button variant="primary" onClick={() => this.setState({ modalShow: true})}>
                    Display Cart
                </Button>
                <CartModal show={this.state.modalShow} onHide={modalClose} />
            </ButtonToolbar>
        );
    }
}

export default Cart;