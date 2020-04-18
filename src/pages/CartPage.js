import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

function CartPage(props) {
    return (
        <Container fluid={true}>
            <Row>
                <Col md={4} sm={8}>

                </Col>
                <Col md={4} sm={8}>
                    <Card
                        bg="dark"
                        text='white'
                        style={{ width: '18rem', margin: "10%" }}
                    >
                        <Card.Body>
                            <Card.Title>Address Detils</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} sm={8}>
                    <Card
                        bg="dark"
                        text='white'
                        style={{ width: '18rem', margin: "10%" }}
                    >
                        <Card.Body>
                            <Card.Title>Address Detils</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
export default CartPage